// app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-3xl">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
          {"about me"}
        </h1>
        <p className="font-mono text-sm text-accent">
          Computer Science Student at BINUS University
        </p>
      </div>

      {/* Narrative Section */}
      <section className="space-y-4 text-secondary leading-relaxed text-base">
        <p className="text-primary text-lg">
          I am a Computer Science student interested in building data-driven and intelligent systems.
        </p>
        <p>
          My academic journey has allowed me to explore various facets of computer science, with a primary focus on machine learning, deep learning, data analytics, and big data processing. Rather than trying to master every domain superficially, I prefer diving deep into the engineering process: examining how raw data is gathered, cleaned, transformed, and leveraged to train models or generate actionable insights.
        </p>
        <p>
          Whether evaluating classification models for cybersecurity threats or managing distributed data pipelines, I enjoy working through the technical complexities and documenting the empirical trade-offs along the way.
        </p>
      </section>

      {/* Education & Background */}
      <section className="space-y-6 pt-6 border-t border-border/40">
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
          <p className="text-xs text-secondary/80 font-mono pt-1">
            Focus areas: Algorithms, Data Structures, Intelligent Systems, Database Architecture, and Distributed Processing.
          </p>
        </div>
      </section>

      {/* Technical Focus & Stack */}
      <section className="space-y-6 pt-6 border-t border-border/40">
        <h2 className="text-xl font-semibold font-mono text-primary tracking-tight">
          {"technical focus & stack"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-surface/40 border border-border space-y-2">
            <h3 className="font-mono text-xs text-accent uppercase">Machine Learning & Deep Learning</h3>
            <p className="text-sm text-secondary">
              Python, Scikit-Learn, TensorFlow, PyTorch, Keras, YOLO, SMOTE balancing, and model evaluation metrics.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface/40 border border-border space-y-2">
            <h3 className="font-mono text-xs text-accent uppercase">Data Engineering & Analytics</h3>
            <p className="text-sm text-secondary">
              Apache Hadoop, HDFS, Apache PySpark, Parquet, Pandas, NumPy, and exploratory data analysis.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface/40 border border-border space-y-2">
            <h3 className="font-mono text-xs text-accent uppercase">Programming Languages</h3>
            <p className="text-sm text-secondary">
              Python, Java, C, SQL, TypeScript, and JavaScript.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface/40 border border-border space-y-2">
            <h3 className="font-mono text-xs text-accent uppercase">Tools & Infrastructure</h3>
            <p className="text-sm text-secondary">
              Git, GitHub, VS Code, Jupyter Notebook, Google Colab, and Cloudflare Pages.
            </p>
          </div>
        </div>
      </section>

      {/* Connect / Closing */}
      <section className="space-y-4 pt-6 border-t border-border/40">
        <h2 className="text-xl font-semibold font-mono text-primary tracking-tight">
          {"get in touch"}
        </h2>
        <p className="text-sm text-secondary">
          If you would like to discuss research topics, engineering projects, or academic collaborations, feel free to reach out.
        </p>
        <div className="flex items-center gap-6 font-mono text-xs text-accent pt-2">
          <a href="mailto:christianputra229@gmail.com" className="hover:underline">email</a>
          <a href="https://github.com/Putra-Christian618" target="_blank" rel="noreferrer" className="hover:underline">github</a>
          <a href="https://www.linkedin.com/in/christian-putra-7b95b7335/" target="_blank" rel="noreferrer" className="hover:underline">linkedin</a>
          <a href="https://www.instagram.com/_christputr/" target="_blank" rel="noreferrer" className="hover:underline">instagram</a>
        </div>
      </section>
    </div>
  );
}