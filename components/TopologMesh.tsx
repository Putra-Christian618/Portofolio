'use client';

import React, { useEffect, useRef } from 'react';

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
  life: number;
  maxLife: number;
  opacity: number;
  state: 'fading-in' | 'alive' | 'fading-out';
}

export default function TopologicalMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const clusters: Cluster[] = [];
    const maxConcurrentClusters = 15;
    
    const meshColorRGB = '59, 130, 246';

    const createNode = (baseX: number, baseY: number): Node => ({
      x: baseX + (Math.random() - 0.5) * 100,
      y: baseY + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.8,
    });

    const createCluster = (): Cluster => {
      const numNodes = Math.floor(Math.random() * 3) + 3;
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
        maxLife: Math.random() * 300 + 400,
        opacity: 0,
        state: 'fading-in',
      };
    };

    for (let i = 0; i < 3; i++) {
      clusters.push(createCluster());
    }

    const draw = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      if (clusters.length < maxConcurrentClusters && Math.random() < 0.015) {
        clusters.push(createCluster());
      }

      for (let i = clusters.length - 1; i >= 0; i--) {
        const cluster = clusters[i];

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
            clusters.splice(i, 1);
            continue;
          }
        }

        const baseOpacity = cluster.opacity * 0.4;

        for (let j = 0; j < cluster.nodes.length; j++) {
          const node = cluster.nodes[j];

          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${meshColorRGB}, ${baseOpacity})`;
          ctx.fill();

          for (let k = j + 1; k < cluster.nodes.length; k++) {
            const node2 = cluster.nodes[k];
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = `rgba(${meshColorRGB}, ${baseOpacity * 0.5})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
      }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}