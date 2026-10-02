'use client';

import React, { useEffect, useRef } from 'react';

// Konfigurasi tipe data untuk node dan cluster
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Cluster {
  id: number;
  nodes: Node[];
  life: number;      // Umur cluster saat ini
  maxLife: number;   // Umur maksimal sebelum mulai fade-out
  opacity: number;   // Transparansi saat ini (berubah saat fade-in/out)
  state: 'fading-in' | 'alive' | 'fading-out';
}

export default function TopologicalMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Periksa aksesibilitas (prefers-reduced-motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return; // Jangan jalankan animasi jika pengguna meminta pengurangan gerakan

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Variabel state untuk cluster
    const clusters: Cluster[] = [];
    const maxConcurrentClusters = 30; // Batasi jumlah grup graph yang aktif bersamaan
    const meshColorRGB = '59, 130, 246'; // Warna mesh (putih)

    // Fungsi untuk membuat node individual
    const createNode = (baseX: number, baseY: number): Node => ({
      x: baseX + (Math.random() - 0.5) * 100, // Spawn di sekitar titik tengah cluster
      y: baseY + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 0.4, // Kecepatan gerak (sesuaikan jika terlalu cepat/lambat)
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.8, // Ukuran bervariasi tapi relatif kecil
    });

    // Fungsi untuk membuat cluster (grup graph) baru
    const createCluster = (): Cluster => {
      const numNodes = Math.floor(Math.random() * 3) + 3; // Antara 3 - 5 node per cluster
      const centerX = Math.random() * width;
      const centerY = Math.random() * height;
      const nodes: Node[] = [];

      for (let i = 0; i < numNodes; i++) {
        nodes.push(createNode(centerX, centerY));
      }

      return {
        id: Math.random(),
        nodes,
        life: 0,
        maxLife: Math.random() * 300 + 400, // Umur cluster antara 400-700 frame (sekitar 6-11 detik)
        opacity: 0,
        state: 'fading-in',
      };
    };

    // Inisialisasi beberapa cluster di awal
    for (let i = 0; i < 12; i++) {
      clusters.push(createCluster());
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Secara acak tambahkan cluster baru jika jumlahnya kurang dari maksimum
      if (clusters.length < maxConcurrentClusters && Math.random() < 0.04) {
        clusters.push(createCluster());
      }

      // Loop melalui setiap cluster
      for (let i = clusters.length - 1; i >= 0; i--) {
        const cluster = clusters[i];

        // 1. Update status siklus hidup cluster
        if (cluster.state === 'fading-in') {
          cluster.opacity += 0.01;
          if (cluster.opacity >= 1) {
            cluster.opacity = 1;
            cluster.state = 'alive';
          }
        } else if (cluster.state === 'alive') {
          cluster.life++;
          if (cluster.life > cluster.maxLife) {
            cluster.state = 'fading-out';
          }
        } else if (cluster.state === 'fading-out') {
          cluster.opacity -= 0.005;
          if (cluster.opacity <= 0) {
            // Hapus cluster jika sudah sepenuhnya memudar
            clusters.splice(i, 1);
            continue; // Lanjut ke iterasi cluster berikutnya
          }
        }

        // Terapkan opacity dasar untuk cluster ini (maksimal 40% agar tetap 'low-opacity' di background)
        const baseOpacity = cluster.opacity * 0.45;

        // 2. Update posisi dan gambar node dalam cluster
        for (let j = 0; j < cluster.nodes.length; j++) {
          const node = cluster.nodes[j];

          // Pergerakan
          node.x += node.vx;
          node.y += node.vy;

          // Bounce ringan jika menyentuh batas layar (opsional, tapi bagus agar node tidak hilang begitu saja)
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          // Gambar node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${meshColorRGB}, ${baseOpacity})`;
          ctx.fill();

          // 3. Gambar garis hanya dengan node lain DALAM CLUSTER YANG SAMA
          for (let k = j + 1; k < cluster.nodes.length; k++) {
            const node2 = cluster.nodes[k];
            
            // Gambar garis terlepas dari jarak, atau Anda bisa tambahkan batasan jarak di sini
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            // Garis sedikit lebih transparan dari node
            ctx.strokeStyle = `rgba(${meshColorRGB}, ${baseOpacity * 0.5})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw(); // Mulai loop animasi

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    // Container absolut di belakang semua konten (z-index negatif, pointer-events-none)
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}