import { Project } from '../types';

export const projects: Project[] = [
  {
    title: "Phishing Detection: Classical vs Deep Learning",
    slug: "phishing-detection",
    categories: ["Machine Learning", "Deep Learning", "Cybersecurity", "Research"],
    context: "Academic Research",
    summary: "Studi komparatif mengevaluasi Random Forest dan hybrid CNN-LSTM untuk deteksi URL phishing menggunakan dataset LegitPhish.",
    description: "Evaluasi ekstensif mengevaluasi performa antara model machine learning klasik Random Forest dan arsitektur deep learning hybrid CNN-LSTM di bawah kondisi eksperimental yang identik menggunakan dataset LegitPhish.",
    role: ["Data Preprocessing", "Model Engineering", "Evaluation", "Research Writing"],
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "SMOTE", "Keras"],
    metrics: [
      { label: "Dataset Size", value: "101,219 URLs" },
      { label: "RF Accuracy", value: "99.98%" },
      { label: "CNN-LSTM Accuracy", value: "99.97%" },
      { label: "ROC-AUC", value: "1.00" }
    ],
    sections: [
      {
        title: "Overview",
        content: "Phishing attacks remain a critical cybersecurity threat, while traditional blocklist-based methods struggle against rapidly evolving malicious URLs[cite: 6]. This study presents a controlled comparative analysis between a traditional Machine Learning model (Random Forest) and a Deep Learning model (hybrid CNN-LSTM) under identical experimental conditions[cite: 6]."
      },
      {
        title: "The Problem",
        content: "Modern phishing campaigns deploy complex URLs featuring excessive subdomains, deep directory paths, and randomized strings designed to bypass simple filters[cite: 6]. Security systems require accurate automated classifiers, yet balancing detection performance, computational resource efficiency, and model interpretability remains a major challenge[cite: 6]."
      },
      {
        title: "Dataset & Preprocessing",
        content: "The research utilizes the public LegitPhish dataset from Mendeley Data containing 101,219 labeled URLs (63,678 phishing and 37,540 legitimate) with 16 structural and lexical features[cite: 6]. Data preprocessing involved cleaning missing values, applying MinMaxScaler for numerical lexical attributes, and utilizing the SMOTE technique exclusively on training splits (80:20 ratio) to address class imbalance[cite: 6]."
      },
      {
        title: "Two Approaches",
        content: "The Random Forest model leveraged 16 engineered lexical features optimized via GridSearchCV (n_estimators=100, max_depth=20, min_samples_split=2, criterion=entropy) with 5-fold cross-validation[cite: 6]. In parallel, the hybrid CNN-LSTM deep learning architecture implemented a dual-branch feature fusion mechanism: processing character-level tokenized raw URL sequences through an embedding layer, Conv1D, and LSTM layers, combined with scaled lexical features through a dense layer and concatenation mechanism[cite: 6]."
      },
      {
        title: "Results",
        content: "Both models achieved exceptional performance with an ROC-AUC of 1.00[cite: 6]. Random Forest slightly outperformed CNN-LSTM in overall accuracy (99.98% vs 99.97%) with only 4 total misclassifications (2 False Positives, 2 False Negatives)[cite: 6]. The hybrid CNN-LSTM achieved 99.97% accuracy, maintaining a very low False Positive Rate (FPR) of under 1% (0.99%)[cite: 6]."
      },
      {
        title: "Interpretability",
        content: "Feature importance analysis for Random Forest revealed a strong dependency on structural attributes, with path_length (feature 10) acting as the absolute dominant indicator for identifying malicious URLs, followed by domain_name_length and url_entropy[cite: 6]. While Random Forest offers high transparency, CNN-LSTM acts largely as a black-box system but excels in autonomously learning complex sequential patterns[cite: 6]."
      },
      {
        title: "Limitations",
        content: "The study acknowledges several limitations: evaluation was restricted to a single split of the LegitPhish dataset without external or temporal validation, no formal statistical significance tests (such as McNemar's test) were performed, and computational resource benchmarking (inference latency/memory) was not measured[cite: 6]."
      }
    ],
    featured: true
  },
  {
    title: "DermaScan: Skin Disease Classification",
    slug: "dermascan",
    categories: ["Deep Learning", "Computer Vision"],
    context: "Academic Project",
    summary: "Sistem klasifikasi penyakit kulit berbasis Convolutional Neural Network (CNN) untuk 10 kategori kondisi kulit.",
    description: "Pengembangan model visi komputer untuk memproses dan mengklasifikasikan gambar medis kulit, disiapkan untuk optimasi dan ekspor ke TensorFlow Lite.",
    role: ["Data Preprocessing", "CNN Development", "Model Optimization"],
    technologies: ["Python", "TensorFlow", "OpenCV", "TensorFlow Lite"],
    metrics: [
      { label: "Categories", value: "10 Classes" },
      { label: "Dataset", value: "~20,000 Images" }
    ],
    featured: true
  },
  {
    title: "EcoRouter: Logistics Cost & Route Optimization",
    slug: "ecorouter",
    categories: ["Machine Learning", "Applied ML"],
    context: "Independent / Engineering",
    summary: "Integrasi model deteksi objek YOLO dan matriks jarak OSRM untuk optimasi jalur logistik berbasis web.",
    description: "Aplikasi penunjang logistik yang mengombinasikan komputer vision untuk deteksi paket dan algoritma optimasi rute guna mereduksi biaya operasional.",
    role: ["System Architecture", "Model Integration", "Web Development"],
    technologies: ["Python", "YOLO", "OSRM", "Google OR-Tools"],
    featured: true
  },
  {
    title: "Olist Dataset Big Data Pipeline",
    slug: "olist-pipeline",
    categories: ["Big Data", "Data Engineering"],
    context: "Academic Project",
    summary: "Pipeline pemrosesan data terdistribusi menggunakan Hadoop HDFS dan PySpark untuk dataset e-commerce Olist.",
    description: "Eksekusi pembersihan data skala besar, rekayasa fitur, agregasi, dan ekspor keluaran format Parquet melalui klaster terdistribusi.",
    role: ["Data Transformation", "Distributed Processing", "Pipeline Design"],
    technologies: ["Apache Hadoop", "HDFS", "Apache PySpark", "Parquet"],
    featured: true
  },
  {
    title: "EuroMart Sales & RFM Business Analysis",
    slug: "euromart",
    categories: ["Data Analytics"],
    context: "Academic Project",
    summary: "Analisis data ritel historis EuroMart mencakup eksplorasi tren penjualan, diskon, dan segmentasi pelanggan RFM.",
    description: "Analisis data mendalam menggunakan teknik statistik dan visualisasi untuk menghasilkan wawasan bisnis serta rekomendasi strategis ritel.",
    role: ["Data Wrangling", "Exploratory Data Analysis", "Customer Segmentation"],
    technologies: ["Python", "Pandas", "Seaborn", "RFM Analysis"],
    featured: true
  }
];