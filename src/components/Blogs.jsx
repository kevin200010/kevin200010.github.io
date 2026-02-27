import { motion } from "framer-motion";

const BLOGS = [
  {
    title: "Stop Guessing Which LLM Is Right — Let Them Decide Together",
    description:
      "Introduces LLM Council, a local web application enabling multiple language models to collaborate on questions through independent responses, anonymized peer review, and unified synthesis. The system reduces bias and improves answer quality by encouraging models to evaluate each other's reasoning rather than relying on single-model responses.",
    image: "https://cdn-images-1.medium.com/max/1024/1*oQ9AIU4fnGdIU8fwrkubdg.png",
    tags: ["LLM", "Multi-Agent", "AI"],
    date: "Jan 3, 2026",
    link: "https://medium.com/@kevin18patel/stop-guessing-which-llm-is-right-let-them-decide-together-6cb18d91e6c2",
  },
  {
    title: "Embeddings in GenAI: The Invisible Engine Powering LLMs, RAG, and Multi-Agent Systems",
    description:
      "Comprehensive guide to embeddings as numerical vector representations that power semantic search, retrieval-augmented generation, and multi-agent routing. Covers model selection, optimization techniques, and practical implementations for reducing computational costs while improving AI system accuracy.",
    image: "https://cdn-images-1.medium.com/max/1024/0*m_IbK2Cj96aaRTGW.png",
    tags: ["Embeddings", "RAG", "GenAI"],
    date: "Dec 5, 2025",
    link: "https://medium.com/@kevin18patel/embeddings-in-genai-the-invisible-engine-powering-llms-rag-and-multi-agent-systems-d9157ec94f26",
  },
  {
    title: "Diffusion Models and DreamBooth: Fine-Tuning Stable Diffusion with PyTorch",
    description:
      "Technical walkthrough of diffusion models and the DreamBooth personalization technique. Demonstrates how to fine-tune Stable Diffusion using just 3–5 reference images to generate customized outputs, with step-by-step PyTorch implementation and optimization tips.",
    image: "https://cdn-images-1.medium.com/max/1024/1*pPXcGETV-UM8syTEdVm--g.png",
    tags: ["Diffusion Models", "PyTorch", "Stable Diffusion"],
    date: "Aug 15, 2025",
    link: "https://medium.com/@kevin18patel/diffusion-models-and-dreambooth-fine-tuning-stable-diffusion-with-pytorch-52665c9fcae5",
  },
  {
    title: "Unveiling the Power of Language: Fine-Tuning a Large Language Model on an Instruction Dataset",
    description:
      "Practical guide to fine-tuning Llama-2-7b using the self_instruct dataset with QLoRA parameter optimization. Details data preparation, training loops, and generation logic while analyzing loss curves and performance metrics from the training process.",
    image: "https://cdn-images-1.medium.com/max/1024/0*u-SGXvX4kOFzi7JN.png",
    tags: ["Fine-Tuning", "LLM", "QLoRA"],
    date: "Apr 4, 2024",
    link: "https://medium.com/@kevin18patel/unveiling-the-power-of-language-fine-tuning-a-large-language-model-on-an-instruction-dataset-e955aa55e0fd",
  },
  {
    title: "Intro to Hypothesis Testing",
    description:
      "Foundational overview of hypothesis testing methodology covering null and alternative hypotheses, significance levels, and test selection — z-test, t-test, ANOVA, and chi-square. Includes decision-making frameworks for statistical inference with real-world population data.",
    image: "https://cdn-images-1.medium.com/max/750/1*CX4fV-Z94I9BU5C3yvrEQg.png",
    tags: ["Statistics", "Data Science", "Hypothesis Testing"],
    date: "Sep 25, 2023",
    link: "https://medium.com/@kevin18patel/intro-to-hypothesis-testing-dfab3f8e4c5c",
  },
];

const Blogs = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        My{" "}
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
          Blogs
        </span>
      </motion.h2>

      <div className="flex flex-col gap-6">
        {BLOGS.map((blog, index) => {
          const imageRight = index % 2 !== 0;
          return (
            <motion.a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`group flex w-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition-all duration-300 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-900/20 lg:flex-row ${imageRight ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden lg:w-2/5">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-900/40" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-8 lg:p-10">
                <div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-purple-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold leading-snug text-neutral-100 transition-colors group-hover:text-purple-300 lg:text-3xl">
                    {blog.title}
                  </h3>

                  <p className="text-base leading-relaxed text-neutral-400">
                    {blog.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm text-neutral-500">{blog.date}</span>
                  <span className="flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-400 transition-all duration-300 group-hover:border-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300">
                    Read on Medium
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
