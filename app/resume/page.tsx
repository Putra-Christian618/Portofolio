// app/resume/page.tsx

export default function ResumePage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-3xl">
      {/* Header & Download Action */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/40 pb-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
            {"resume"}
          </h1>
          <p className="font-mono text-sm text-accent">
            Christian Putra Dwiyan Setyo Pradana
          </p>
        </div>
        <a 
          href="/cv-christian.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 rounded bg-primary text-background font-mono text-xs font-medium hover:bg-accent transition-colors text-center"
        >
          download pdf version ↓
        </a>
      </div>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold font-mono text-primary tracking-tight">
          {"education"}
        </h2>
        <div className="p-5 rounded-lg bg-surface/40 border border-border space-y-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
            <h3 className="font-semibold text-primary">Bina Nusantara University (BINUS)</h3>
            <span className="font-mono text-xs text-accent">Indonesia</span>
          </div>
          <p className="text-sm text-secondary">
            Bachelor of Computer Science (Ongoing)
          </p>
          <p className="text-xs text-secondary/80 font-mono">
            Focus: Algorithms, Data Structures, Intelligent Systems, and Data Engineering.
          </p>
        </div>
      </section>

      {/* Selected Technical Experience & Projects */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold font-mono text-primary tracking-tight">
          {"core technical projects & research"}
        </h2>
        
        <div className="space-y-4">
          <div className="p-5 rounded-lg bg-surface/40 border border-border space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-primary">Phishing URL Detection: Classical vs Deep Learning</h3>
              <span className="font-mono text-xs text-secondary">Academic Research</span>
            </div>
            <p className="text-sm text-secondary leading-relaxed">
              Developed experimental pipelines comparing Random Forest and hybrid CNN-LSTM architectures using the LegitPhish dataset (101,219 URLs). Implemented SMOTE balancing, character-level tokenization, and feature importance analysis.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
              <span className="bg-background px-2 py-0.5 rounded text-secondary border border-border">Python</span>
              <span className="bg-background px-2 py-0.5 rounded text-secondary border border-border">Scikit-Learn</span>
              <span className="bg-background px-2 py-0.5 rounded text-secondary border border-border">TensorFlow</span>
            </div>
          </div>

          <div className="p-5 rounded-lg bg-surface/40 border border-border space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-primary">Olist Dataset Big Data Pipeline</h3>
              <span className="font-mono text-xs text-secondary">Data Engineering</span>
            </div>
            <p className="text-sm text-secondary leading-relaxed">
              Designed and executed a distributed data-processing pipeline for e-commerce data covering cleaning, transformations, and HDFS Parquet formatting.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
              <span className="bg-background px-2 py-0.5 rounded text-secondary border border-border">Apache PySpark</span>
              <span className="bg-background px-2 py-0.5 rounded text-secondary border border-border">Hadoop HDFS</span>
              <span className="bg-background px-2 py-0.5 rounded text-secondary border border-border">Parquet</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Summary */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold font-mono text-primary tracking-tight">
          {"technical skills"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-surface/40 border border-border space-y-1">
            <span className="font-mono text-xs text-accent uppercase">Machine Learning & Deep Learning</span>
            <p className="text-sm text-secondary">Python, Scikit-Learn, TensorFlow, PyTorch, Keras, YOLO, SMOTE</p>
          </div>
          <div className="p-4 rounded-lg bg-surface/40 border border-border space-y-1">
            <span className="font-mono text-xs text-accent uppercase">Data & Analytics</span>
            <p className="text-sm text-secondary">Apache PySpark, Hadoop HDFS, Pandas, NumPy, RFM Analysis</p>
          </div>
          <div className="p-4 rounded-lg bg-surface/40 border border-border space-y-1">
            <span className="font-mono text-xs text-accent uppercase">Programming Languages</span>
            <p className="text-sm text-secondary">Python, Java, C, SQL, TypeScript, JavaScript</p>
          </div>
          <div className="p-4 rounded-lg bg-surface/40 border border-border space-y-1">
            <span className="font-mono text-xs text-accent uppercase">Tools & Environment</span>
            <p className="text-sm text-secondary">Git, GitHub, VS Code, Jupyter, Google Colab, Cloudflare Pages</p>
          </div>
        </div>
      </section>
    </div>
  );
}