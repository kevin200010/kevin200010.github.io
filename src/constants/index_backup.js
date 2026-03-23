import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpeg";
import project8 from "../assets/projects/project-8.jpeg";



export const HERO_CONTENT = `I am Kevin Patel, a dedicated Data Scientist completed my Masters in Data Science at Northeastern University, set to graduate in 2024. With a strong foundation in computer science, I bring practical experience in machine learning, AI, and predictive analytics. I am proficient in using advanced tools such as Python, R, SQL, PyTorch, and TensorFlow, which I leverage to drive strategic decision-making and foster innovation. My passion lies in uncovering data-driven insights that inform strategic decisions and lead to tangible outcomes. I am committed to developing solutions that are both technically robust and scalable, and I aspire to make meaningful contributions to a forward-thinking company in the data science field.`;
export const ABOUT_TEXT = `I am Kevin Patel, a driven Data Scientist currently pursuing my MS in Data Science at Northeastern University, set to graduate in 2024. With a strong foundation in computer science, I bring hands-on experience in machine learning, predictive analytics, and AI, specializing in time series analysis, predictive modeling, image segmentation, and unsupervised learning techniques such as cluster analysis. Proficient in Python, R, SQL, PyTorch, and TensorFlow, I also have deep knowledge of cloud platforms like AWS, GCP, and Azure, which I utilize for scalable data processing and model deployment. Throughout my career, I have empowered actionable insights through data by implementing demand forecasting, anomaly detection, optimizing data pipelines, and developing custom models, ensuring that solutions are both technically viable and scalable to drive meaningful, strategic outcomes.

Beyond my technical expertise, I am passionate about problem-solving activities like Sudoku and crosswords that enhance my logical reasoning. I stay active through sports and hiking, and I enjoy the competitive and team aspects of eSports. Additionally, I love to travel, which broadens my perspectives and fuels my creativity. I am excited to continue my career in data science by developing impactful solutions that not only advance the field but also create real value in the world. My goal is to contribute to a forward-thinking company where I can leverage my skills to drive innovation and achieve tangible results.`;

export const EXPERIENCES = [
  {
    year: "April 2025 - Present",
    role: "Data Scientist",
    company: "Aetna - CVS Health Company",
    description: "At Aetna Mental Wellbeing, I led a whitepaper initiative exploring the business and clinical impact of treating mental health conditions on co-occurring chronic diseases. By analyzing millions of records from BigQuery and combining over 70 clinical and behavioral metrics, I developed proprietary Therapy Impact Factors to quantify the downstream effect of therapy on cost reduction, severity, and health outcomes. Using robust statistical methods—including permutation tests, effect sizes, and SMDs. I demonstrated measurable improvements when mental health is addressed early. Visual insights were built using Plotly and Seaborn on Vertex AI to support executive level decision making. In parallel, I built a predictive model to identify members at risk of opioid abuse, integrating 250+ indicators across claims, demographics, and social factors, achieving an AUC of 0.80. Both projects support value-based care strategies and targeted interventions that reduce healthcare costs while improving outcomes.",
    technologies: ["Google Cloud Platform","BigQuery","Python"]
  },
  {
    year: "Jul 2024 - April 2025",
    role: "Machine Learning Engineer",
    company: "Anfluss Inc",
    description: `integrated a PineCone vector database to support Retrieval-Augmented Generation (RAG) over a 20GB dataset, streamlining diverse data ingestion formats through Azure OpenAI for embeddings and DeepSpeed for multi-GPU training. Additionally, I employed the Gemma LLM model for prompt responses, boosting data retrieval efficiency by 25%. This solution was benchmarked against leading Q&A bots, incorporating Microsoft Power Automate for tracking business metrics and delivering insights, which enhanced customer satisfaction and SaaS performance significantly.`,
    technologies: ["AzureOpenAI","Python","MongoDB","React"],
  },
  {
    year: "Sep 2024 - Present",
    role: "Teaching Assistance",
    company: "Northeastern University",
    description: `As a Teaching Assistant for the course DS 3000: Foundations of Data Science, I had the wonderful opportunity to collaborate with Professor Sophine Clachar. Together, we organized course materials and guided students in building a strong foundation in data science. We accomplished this through a series of weekly assignments and reading reflections, designed to help students understand the profound impact data science has on society and the crucial role of machine learning in accomplishing the core tasks of their respective projects. Witnessing students grasp these vital concepts and develop the skills necessary to drive innovation through data was an incredibly rewarding experience.`,
    technologies: ["Python"],
  },
  {
    year: "Jul 2023 - Dec 2023",
    role: "Data Science Intern",
    company: "Danfoss Power Solutions",
    description: `In collaboration with cross-functional teams, I developed an automated demand forecasting solution for Danfoss, utilizing SARIMA and XGBoost to enhance operational efficiency—a model now implemented across their multibillion-euro operations. This project involved aggregating macroeconomic indicators from the USA and Europe, merging them with time-series residuals to refine forecasting across 50+ regions, using Databricks and Synapse SQL. Additionally, I applied interpretability tools like LIME and SHAP to align marketing analyses with model insights, translating outcomes into PowerBI for improved data visibility and pricing strategy optimization.`,
    technologies: ["Python", "Synapse", "PowerBI", "DataBricks"],
  },
  {
    year: "Dec 2020 - Jul 2022",
    role: "Data Scientist",
    company: "India Meteorological Department",
    description: `In my previous role as a Data Scientist with the India Meteorological Department, I developed a streamlined system for real-time processing of lightning-related satellite data, using Kafka to transform 2TB of raw, unstructured data into structured Cartesian coordinates, all while leveraging Docker to enhance scalability. This setup accelerated data processing by 25%. Additionally, I engineered a custom unsupervised thunderstorm prediction model from scratch using DBSCAN clustering, which operated at 10-minute intervals and achieved a silhouette score of 0.48. Managing Agile sprints in Visual Studio Code ensured smooth deployment and iterative improvements, resulting in more efficient processing and effective project management.`,
    technologies: ["Python","Docker","Git","Kafka","Excel"],
  },
];

export const PROJECTS = [
  {
    title: "Pharmacy Database management system",
    image: project1,
    description:
      "Optimized inventory operations with a relational database, leading to a 50% improvement in data retrieval efficiency. Developed, tested, debugged, and documented over 1,000 complex PL/SQL queries and database objects, ensuring alignment with business requirements and achieving an 85% satisfaction rate in data collection.",
    technologies: ["MYSQL Workbench","Flask","Python"],
    link: "https://github.com/kevin200010/Breaking_DBMS",
  },
  {
    title: "News Research Tool",
    image: project2,
    description:
      "Spearheaded the development of a Streamlit application with knowledge-based graph (KBG) capabilities, enhancing the ETL pipeline and reducing processing time by 50%. Users can efficiently extract information from three relevant articles. Integrated a question-answering agent using HuggingFace Transformers (BERT), LangChain, and FAISS to provide accurate responses to user queries based on processed news articles.",
    technologies: ["Streamlit", "Python", "HuggingFace", "LangChain", "FAISS", "ETL Pipeline"],
    link: "https://github.com/kevin200010/News_Research_Tool",
  },
  {
    title: "Industrial Financial Health Analysis",
    image: project4,
    description:
      "Orchestrated an interactive customer behavior dashboard in Tableau that visualized key financial KPIs, including EBITDA, PEG, and ROE, to analyze spending patterns across over 300 industries, enhancing insights into industry trends. Conducted comprehensive data analysis and cleaning, utilizing SQL-based transformations with MongoDB and calculated field operations to derive meaningful business insights from 5-year financial data.",
    technologies: ["Tableau","Azure Data Studio","KPIs"],
    link: "https://github.com/kevin200010/Financial-Analysis-Tableau",
  },
  // {
  //   title: "Vehicle Re-Identification Problem",
  //   image: project5,
  //   description:
  //     "Engineered a vehicle re-identification system with 98% accuracy, integrating SIFT, ResNet, Kalman Filtering, and OSNet for feature extraction. Enhanced with ANPR using PaddleOCR for contextual data, improving fleet re-identification in video surveillance. Optimized enterprise operations, supporting fleet management, customer acquisition analytics, and reducing security monitoring response times by 40%.",
  //   technologies: ["SIFT", "ResNet", "Kalman Filter", "OSNet", "PaddleOCR", "ANPR"],
  //   link: "https://github.com/kevin200010/vehicle-reidentification",
  // },
  {
    title: "Image Segmentation Problem using custom U-Net and with Dash Application",
    image: project6,
    description:
      "I developed a custom U-Net model for 3D MRI segmentation of internal organs, specifically tumor delineation. Comparative analysis with advanced architectures (VGG19, Inception V4, EfficientNet B0) improved cancer treatment planning efficiency by 25%. I also enhanced a Dash application with interactive tools for dynamic MRI scan exploration, image captioning, and segmentation accuracy improvement, enhancing workflow efficiency.",
    technologies: ["Python","Tensorflows","Keras","U-Net", "Dash", "Plotly", "Machine Learning"],
    link: "https://github.com/kevin200010/Image-Segmentation-for-Gastrointestinal-Tract-Cancer",
  },
  

];

export const MORE_PROJECTS_BUTTON = {
  text: "More Projects on GitHub",
  link: "https://github.com/kevin200010",
};

export const CONTACT = {
  phoneNo: "+1 5175059591 ",
  email: "kevin18patel@gmail.com",
  link: "https://github.com/kevin200010",
};


