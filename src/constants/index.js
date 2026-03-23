import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am Kevin Patel, a Machine Learning and AI Engineer with 5+ years of experience building and deploying production-scale ML and Generative AI systems. Proven impact delivering 60% automation gains, 40% latency reductions, and 20%+ accuracy improvements. Strong expertise in AWS, MLOps, LLM fine-tuning (LoRA, RLHF), and end-to-end ML lifecycle ownership.`;

export const ABOUT_TEXT = `I am Kevin Patel, a Machine Learning and AI Engineer with 5+ years of hands-on experience in building and deploying production-scale ML and Generative AI systems. With a strong foundation in computer science and a Master's in Data Science from Michigan State University, I bring practical expertise in agentic AI platforms, RAG pipelines, LLM fine-tuning, and real-time inference services.

My technical arsenal includes proficiency in Python, SQL, R, Java, Scala, and JavaScript, with deep expertise in PyTorch, TensorFlow, scikit-learn, Hugging Face, LangChain, and LangGraph. I am well-versed in cloud platforms (AWS, Azure, GCP), MLOps best practices, and deployment technologies like Docker and FastAPI.

Throughout my career, I have delivered measurable impact: 60% automation gains through agentic AI, 40% latency reductions in RAG pipelines, 20%+ accuracy improvements in ML models, and $220K in prevented losses through optimized engineering parameters. I am passionate about solving complex problems at scale, from compliance automation to healthcare analytics, and I am committed to driving innovation through data-driven insights.

Beyond technical expertise, I am driven by continuous learning and staying at the forefront of AI/ML advancements. I aspire to contribute to a forward-thinking organization where I can leverage my skills to build impactful solutions that create real value in the world.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 – Present",
    role: "Machine Learning Engineer",
    company: "Global Mobility Services",
    description: `Engineered and deployed CompliTru AI, an agentic AI platform that automated complex regulatory checks and investigations, driving 60% reduction in manual effort. Architected a central AI orchestration system improving end-to-end task success rate by 35%. Built high-performance RAG pipelines reducing response latency by 40% and boosting accuracy by 30%. Implemented HIPAA compliance safeguards achieving 25% reduction in hallucinations. Developed real-time voice AI assistant using Amazon Nova Sonic, cutting manual effort by 60%. Deployed classical ML models (XGBoost, LightGBM) for fraud/risk scoring, reducing financial loss by 20%.`,
    technologies: ["AWS Bedrock", "Python", "LLMs", "RAG", "SageMaker", "Docker", "LangChain"]
  },
  {
    year: "Aug 2022 – Dec 2023",
    role: "Machine Learning Engineer / AI Engineer",
    company: "VERN.ai",
    description: `Built client profiling and segmentation using LLMs with naïve prompting, RAG, and knowledge-graph enhanced approaches. Designed evaluation frameworks comparing LLM profiling approaches across precision/recall and latency. Fine-tuned GPT-4 and LLaMA using LoRA and RLHF for domain-specific query generation. Used AWS SageMaker to fine-tune LLMs improving clinical query accuracy by 35% and reducing latency by 40%. Designed and deployed emotion-aware multimodal agents using text/audio/visual signals. Built real-time ingestion pipelines using Kinesis, Lambda, S3, increasing throughput by 35%.`,
    technologies: ["AWS SageMaker", "Python", "LoRA", "RLHF", "Kinesis", "LLMs", "LangChain"]
  },
  {
    year: "Dec 2023 – Apr 2024",
    role: "Machine Learning Engineer",
    company: "Siemens",
    description: `Built inverse-DNN and Mixture Gaussian Network models to predict Pareto-front features for multi-objective optimization problems. Optimized custom loss functions (IGT loss) for improved convergence and predictive accuracy. Reduced engineering design iteration cycles by 15% by enabling faster identification of optimal design parameters. Prevented $220K loss by improving success rates through feature engineering and loss-function customization.`,
    technologies: ["Python", "Deep Learning", "Optimization", "TensorFlow", "Custom Loss Functions"]
  },
  {
    year: "Aug 2023 – Jan 2024",
    role: "Data Scientist / Machine Learning Engineer (GenAI)",
    company: "Westlake Chemical",
    description: `Built end-to-end GenAI-driven customer segmentation system identifying potential customers across 675+ companies by combining LLMs, RAG pipelines, embeddings, and clustering. Improved cluster interpretability via structured company profiling and evaluation using Silhouette Score. Enabled scalable ingestion of unstructured enterprise data (150+ URLs per company) using Selenium-based scraping. Improved embedding cohesion by implementing RAG-based knowledge extraction using LangChain and FAISS.`,
    technologies: ["LLMs", "RAG", "FAISS", "LangChain", "Python", "Embeddings", "K-Means", "DBSCAN"]
  },
  {
    year: "May 2021 – June 2022",
    role: "Data Scientist / Machine Learning Engineer",
    company: "India Meteorological Department",
    description: `Improved weather and cloud segmentation accuracy by 51% by designing multi-level unsupervised clustering algorithm combining DBSCAN, K-Means, K-Medoids on satellite/radar imagery. Enhanced detection of irregular cloud structures through level-wise clustering and iterative merging. Improved cloud movement forecasting accuracy by 31% through spatiotemporal feature extraction. Built time-series and deep learning models (ARIMA, LSTM, GRU) improving short-term forecasting accuracy by 20%.`,
    technologies: ["Python", "DBSCAN", "K-Means", "LSTM", "GRU", "ARIMA", "Satellite Data"]
  },
  {
    year: "Jan 2020 – May 2021",
    role: "Machine Learning Engineer",
    company: "Pragnakalp Techlabs",
    description: `Built and owned production-grade document parsing platform (Docsaar) with ML-powered text extraction and inference pipelines. Improved biomedical NER performance by 5% F1 gain per entity through feature engineering and domain-specific training data. Achieved 78.4% Macro-F1 sentiment and 55% precision in topic modeling for life sciences content. Delivered multilingual conversational AI system integrating Dialogflow NLU with Flask backend supporting speech and text interfaces.`,
    technologies: ["Python", "NER", "NLP", "Dialogflow", "Flask", "TensorFlow", "Information Extraction"]
  },
];

export const PROJECTS = [
  {
    title: "CompliTru AI — Multi-Turn Agentic LLM System for Cloud Compliance & Security",
    image: project1,
    description: `Architected a multi-turn conversational governance platform where a LangGraph-orchestrated agent system answers compliance questions, runs cost analysis, triggers security scans, and supports guardrailed remediation from one interface. Built with 6 specialized AI agents, RAG knowledge base for SOC2/HIPAA/ISO/PCI documents in Amazon OpenSearch, guardrailed AWS SDK execution with prompt injection checks and human approval, and Langfuse observability across 7 benchmarked LLMs.`,
    technologies: ["LangChain", "LangGraph", "Python", "AWS ECS Fargate", "Amazon OpenSearch", "Langfuse", "Redis", "DynamoDB", "GPT-4o", "Claude", "Llama 3.1", "React", "CloudFront"],
    link: "https://github.com/kevin200010"
  },
  {
    title: "LLM Council — Multi-Model Collaborative Reasoning Platform",
    image: project2,
    description: `Built a local web application that operationalizes structured multi-model collaboration through a 3-stage pipeline: independent responses from multiple LLMs via OpenRouter, anonymized peer review where models critique and rank each other, and a chairman synthesis stage to produce a final answer. Supports 4 council modes (Default, Round Table, Hierarchy, Assembly Line) with SSE streaming and JSON persistence. Featured in Medium: "Stop Guessing Which LLM Is Right - Let Them Decide Together".`,
    technologies: ["FastAPI", "OpenRouter API", "React", "Vite", "async httpx", "Server-Sent Events", "GPT-4o", "Claude", "Gemini", "Grok", "Python 3.10+"],
    link: "https://github.com/kevin200010"
  },
  {
    title: "Potential Customer Segmentation Using LLM",
    image: project3,
    description: `Designed a structured company profiling and segmentation pipeline for Westlake Chemical to identify high-potential B2B clients from 675 company websites. A RAG-backed Q&A chain answered the same 14 structured questions per company using Selenium (5-level crawl, up to 150 URLs/company). Structured answers were embedded with OpenAI Embeddings, stored in FAISS, and clustered using KNN and DBSCAN. PCA visualizations delivered to stakeholders; Q&A approach achieved higher cluster quality vs. naive LLM summaries.`,
    technologies: ["LangChain", "GPT-3.5 Turbo", "FAISS", "OpenAI Embeddings", "Selenium", "KNN", "DBSCAN", "Scikit-learn", "PCA", "Python", "Pandas", "NumPy"],
    link: "https://github.com/kevin200010"
  },
  {
    title: "LLaMA 2 QLoRA Fine-Tuning",
    image: project4,
    description: `Implemented a complete QLoRA-based fine-tuning pipeline for LLaMA-2-7B at VERN AI, reducing memory requirements by ~4x while preserving instruction-following quality. Fine-tuned NousResearch/Llama-2-7b-chat-hf on 2,500 self-instruct samples using BitsAndBytes 4-bit quantization, PEFT LoRA adapters (rank 16, alpha 32), SFT-Trainer with fp16 mixed precision, and custom evaluation (BLEU, ROUGE, token-level F1). Featured in Medium: "Unveiling the Power of Language: Fine-Tuning a Large Language Model on an Instruction Dataset".`,
    technologies: ["LLaMA-2-7B", "QLoRA", "PEFT", "SFT-Trainer", "Hugging Face Transformers", "BitsAndBytes", "PyTorch", "BLEU", "ROUGE", "Weights & Biases", "CUDA", "Python"],
    link: "https://github.com/kevin200010"
  },
  {
    title: "Multi-objective Optimization Using Inverse DNN and Mixture Density Network",
    image: project5,
    description: `Designed a three-part deep learning system for Siemens to solve a high-dimensional engineering optimization problem: a forward DNN (90%+ accuracy) to classify Pareto-optimal solutions in a 10D design space, an inverse DNN with custom IGD loss for reverse mapping from desired outputs to feasible design parameters, and a Mixture Density Network to model the full probability distribution of valid inputs capturing multimodal distributions. Prevented $220K in projected engineering losses. Validated on ZDT-1 benchmark.`,
    technologies: ["PyTorch", "NumPy", "SciPy", "Mixture Density Networks", "Scikit-learn", "Matplotlib", "Seaborn", "ZDT-1 benchmark", "Pareto optimization", "Python", "Jupyter"],
    link: "https://github.com/kevin200010"
  },
];

export const MORE_PROJECTS_BUTTON = {
  text: "More Projects on GitHub",
  link: "https://github.com/kevin200010",
};

export const CONTACT = {
  phoneNo: "+1 (517) 505-9591",
  email: "kevin18patel@gmail.com",
  link: "https://linkedin.com/in/connect-kevin-patel",
};
