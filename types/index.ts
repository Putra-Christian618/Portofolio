// types/index.ts

export interface Project {
  title: string;          //[cite: 1]
  slug: string;           //[cite: 1]
  categories: string[];     //[cite: 1] (misal: "Machine Learning", "Cybersecurity")
  context: string;        //[cite: 1] (misal: "College", "Research")
  summary: string;        //[cite: 1]
  description: string;    //[cite: 1]
  role: string[];         //[cite: 1] (misal: "Data Preprocessing", "Experimentation")
  technologies: string[]; //[cite: 1]
  metrics?: {             //[cite: 1] (Opsional: untuk menyimpan akurasi, ROC-AUC, dll)
    label: string;
    value: string;
  }[];
  images?: string[];      //[cite: 1]
  diagrams?: string[];    //[cite: 1]
  links?: {               //[cite: 1] (Opsional: link ke Paper atau GitHub)
    type: 'github' | 'paper' | 'live';
    url: string;
  }[];
  sections?: {            //[cite: 1] (Bagian dinamis untuk studi kasus mendalam)
    title: string;
    content: string; // Bisa berupa Markdown/teks
  }[];
  featured: boolean;      //[cite: 1]
}