import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpeg";
import project8 from "../assets/projects/project-8.jpeg";

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
    title: "CompliTru AI - Agentic AI Platform",
    image: project1,
    description: `Engineered and deployed an agentic AI platform that automated complex regulatory checks and investigations, achieving 60% reduction in manual effort. Architected a central AI orchestration system to streamline multi-model operations, improving end-to-end task success rate by 35% and increasing reliability across business processes.`,
    technologies: ["AWS Bedrock", "LangChain", "Python", "Agentic AI", "Compliance"],
    link: "#"
  },
  {
    title: "High-Performance RAG Pipeline",
    image: project2,
    description: `Built a high-performance Retrieval-Augmented Generation (RAG) pipeline delivering up-to-date contextual grounding with 40% latency reduction and 30% accuracy boost in decision-support use cases. Integrated real-time retrieval mechanisms with LLM inference for optimized performance.`,
    technologies: ["RAG", "LangChain", "Vector DB", "Python", "LLMs"],
    link: "#"
  },
  {
    title: "AI Orchestration System",
    image: project3,
    description: `Architected a central AI orchestration system to streamline multi-model operations, improving end-to-end task success rate by 35% and increasing reliability across business processes. Implemented robust monitoring and error handling for production deployments.`,
    technologies: ["AWS", "Python", "Orchestration", "MLOps", "Monitoring"],
    link: "#"
  },
  {
    title: "Time-Series Forecasting Models",
    image: project4,
    description: `Developed advanced time-series models (SARIMAX, Prophet, GRU) for demand forecasting, improving accuracy by up to 20%. Implemented real-time ETL pipelines using Kinesis, Lambda, and Redshift for high-speed predictions. Built interactive BI dashboards using QuickSight and Tableau for stakeholder insights.`,
    technologies: ["Python", "SARIMAX", "Prophet", "GRU", "AWS Kinesis", "Tableau"],
    link: "#"
  },
  {
    title: "Document Parsing Platform (Docsaar)",
    image: project5,
    description: `Built and owned production-grade document parsing platform with ML-powered text extraction and preprocessing pipelines. Improved biomedical NER performance by 5% F1 gain per entity through feature engineering and domain-specific training. Achieved strong NLP performance across multiple tasks.`,
    technologies: ["Python", "NER", "NLP", "Information Extraction", "Flask"],
    link: "#"
  },
  {
    title: "Cloud Infrastructure ML Pipeline",
    image: project6,
    description: `Implemented end-to-end MLOps infrastructure using AWS SageMaker, CI/CD pipelines, and Docker containerization for automated validation, monitoring, and production deployment. Enabled rapid model iteration and reliable deployment cycles.`,
    technologies: ["AWS SageMaker", "Docker", "CI/CD", "Python", "MLOps"],
    link: "#"
  },
  {
    title: "LLM Fine-tuning with LoRA/RLHF",
    image: project7,
    description: `Fine-tuned GPT-4 and LLaMA models using LoRA and RLHF techniques for domain-specific query generation and compliance tasks. Improved controllability and response relevance in production environments while maintaining computational efficiency.`,
    technologies: ["LoRA", "RLHF", "GPT-4", "LLaMA", "Python", "Hugging Face"],
    link: "#"
  },
  {
    title: "Multimodal Emotion-Aware AI Agent",
    image: project8,
    description: `Designed and deployed emotion-aware multimodal agents utilizing text, audio, and visual signals to improve contextual understanding and user engagement. Integrated multiple modalities for comprehensive user interaction analysis and response generation.`,
    technologies: ["Multimodal AI", "Python", "Computer Vision", "Audio Processing", "LLMs"],
    link: "#"
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
