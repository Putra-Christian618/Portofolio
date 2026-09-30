import { Project } from '../../types';

export const phishingDetectionProject: Project = {
  title: "Phishing URL Detection: Classical vs Deep Learning",
  slug: "phishing-detection",
  categories: ["Machine Learning", "Deep Learning", "Cybersecurity"],
  context: "Academic Research",
  summary: "Evaluasi komparatif antara model Random Forest dan arsitektur hybrid CNN-LSTM dalam mengklasifikasi URL phishing.",
  description: "Proyek riset ini bertujuan membandingkan efektivitas pendekatan machine learning klasik melawan deep learning dalam deteksi ancaman siber berbasis URL. Eksperimen berfokus pada ekstraksi fitur tingkat karakter (character-level tokenization) untuk mengidentifikasi pola URL berbahaya tanpa perlu mengekstraksi konten halaman web secara penuh.",
  role: ["Data Preprocessing", "Model Engineering", "Evaluation"],
  technologies: ["Python", "Scikit-Learn", "TensorFlow", "SMOTE"],
  metrics: [
    { label: "Dataset", value: "LegitPhish" },
    { label: "Balancing", value: "SMOTE" },
    { label: "Tokenization", value: "Character-level" }
  ],
  sections: [
    {
      title: "The Problem",
      content: "Serangan phishing semakin canggih dan mampu mengelabui filter berbasis signature tradisional. Deteksi langsung pada string URL menjadi esensial untuk memblokir ancaman lebih awal, namun hal ini membutuhkan model yang dapat memahami pola urutan karakter yang kompleks."
    },
    {
      title: "Dataset & Preprocessing",
      content: "Eksperimen ini menggunakan dataset LegitPhish. Tantangan utama dalam data ini adalah ketidakseimbangan kelas (imbalanced classes). Untuk mencegah model menjadi bias terhadap kelas mayoritas, distribusi data diseimbangkan kembali menggunakan teknik SMOTE (Synthetic Minority Over-sampling Technique) sebelum proses pelatihan dimulai."
    },
    {
      title: "Two Approaches",
      content: "Dua metode dievaluasi: (1) Random Forest, merepresentasikan ML klasik yang menawarkan performa solid dengan tingkat interpretabilitas tinggi melalui feature importance, dan (2) Arsitektur hybrid CNN-LSTM, di mana 1D-CNN bertugas mengekstrak fitur spasial lokal dari karakter URL, sementara LSTM mempelajari dependensi sekuensial jarak jauh dari struktur karakter tersebut."
    }
    
  ],
  featured: true
};