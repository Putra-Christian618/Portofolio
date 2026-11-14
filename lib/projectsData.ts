import { Project } from '../types';

export const projects: Project[] = [
  {
    title: "Phishing URL Detection: Classical vs Deep Learning",
    slug: "phishing-detection",
    categories: ["Machine Learning", "Deep Learning", "Cybersecurity", "Research"],
    context: "Academic Research",
    summary: "A comparative study evaluating Random Forest and hybrid CNN-LSTM models for phishing URL detection using the LegitPhish dataset.",
    description: "An extensive evaluation comparing classical machine learning models based on lexical features with deep learning models utilizing raw character-level feature extraction.",
    role: ["First Author", "Lead Implementer", "Data Preprocessing", "Model Engineering"],
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "SMOTE"],
    metrics: [
      { label: "Dataset", value: "101,219 URLs" },
      { label: "RF Accuracy", value: "99.98%" },
      { label: "CNN-LSTM Accuracy", value: "99.97%" }
    ],
    sections: [
      {
        title: "The Problem",
        content: "Phishing attacks are becoming increasingly sophisticated, bypassing traditional signature-based filters. Direct detection on the URL string is essential to block threats early, but this requires models capable of understanding complex character sequence patterns."
      },
      {
        title: "Dataset & Preprocessing",
        content: "This experiment utilizes the LegitPhish dataset consisting of 101,219 URLs. During initial data exploration via df.info(), 1 missing value (NaN) was identified in the target label column. This anomalous row was dropped to ensure training integrity, resulting in a clean dataset of 101,218 URLs. To address class imbalance (63,678 legitimate vs 37,540 phishing), the data distribution was rebalanced using SMOTE (Synthetic Minority Over-sampling Technique) prior to model training."
      },
      {
        title: "Two Approaches",
        content: "Two methods were evaluated: (1) Random Forest, representing classical ML, which offers solid performance with high interpretability through feature importance (revealing path_length as a dominant feature), and (2) a hybrid CNN-LSTM architecture, where a 1D-CNN extracts local spatial features from URL characters while the LSTM learns long-range sequential dependencies."
      }
    ],
    featured: true
  },
  {
    title: "DermaScan: Skin Disease Classification",
    slug: "dermascan",
    categories: ["Deep Learning", "Computer Vision"],
    context: "Academic Project",
    summary: "A Convolutional Neural Network (CNN) based skin disease classification system for 10 categories of skin conditions.",
    description: "Development of a computer vision model to process and classify medical skin images, prepared for optimization and export to TensorFlow Lite.",
    role: ["Data Preprocessing", "CNN Development", "Model Optimization"],
    technologies: ["Python", "TensorFlow", "OpenCV", "TensorFlow Lite"],
    metrics: [
      { label: "Categories", value: "10 Classes" },
      { label: "Dataset", value: "~20,000 Images" }
    ],
    featured: true
  },
  {
    title: "Olist Dataset Big Data Pipeline",
    slug: "olist-pipeline",
    categories: ["Big Data", "Data Engineering"],
    context: "Academic Project",
    summary: "A distributed data processing pipeline using Hadoop HDFS and PySpark for the Olist e-commerce dataset.",
    description: "Execution of large-scale data cleaning, feature engineering, aggregation, and Parquet format output export via a distributed cluster.",
    role: ["Data Transformation", "Distributed Processing", "Pipeline Design"],
    technologies: ["Apache Hadoop", "HDFS", "Apache PySpark", "Parquet"],
    featured: true
  },
  {
    title: "EcoRouter: Logistics Cost & Route Optimization",
    slug: "ecorouter",
    categories: ["Machine Learning", "Applied ML"],
    context: "Independent / Engineering",
    summary: "Integration of YOLO object detection and OSRM distance matrices for web-based logistics route optimization.",
    description: "A logistics support application combining computer vision for package detection and route optimization algorithms to reduce operational costs.",
    role: ["System Architecture", "Model Integration", "Web Development"],
    technologies: ["Python", "YOLO", "OSRM", "Google OR-Tools"],
    featured: false
  },
  {
    title: "EuroMart Sales & RFM Business Analysis",
    slug: "euromart",
    categories: ["Data Analytics"],
    context: "Academic Project",
    summary: "Historical retail data analysis of EuroMart covering sales trends, discounts, and RFM customer segmentation.",
    description: "In-depth data analysis using statistical techniques and visualization to generate business insights and retail strategic recommendations.",
    role: ["Data Wrangling", "Exploratory Data Analysis", "Customer Segmentation"],
    technologies: ["Python", "Pandas", "Seaborn", "RFM Analysis"],
    featured: false
  }
];