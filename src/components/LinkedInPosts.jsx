import { motion } from "framer-motion";
import { FaLinkedin, FaThumbsUp, FaRegComment, FaShare } from "react-icons/fa";
import profilePic from "../assets/kevin.jpeg";

const POSTS = [
  {
    date: "January 3, 2026",
    content: `Excited to share my latest article on LLM Council — a system where multiple AI models collaborate, critique each other, and synthesize a unified answer instead of relying on one model's output.\n\nKey takeaways:\n• Independent responses eliminate single-model bias\n• Anonymized peer review improves reasoning quality\n• Consensus synthesis produces more reliable answers\n\nStop guessing which LLM is right — let them decide together. 🤖\n\nFull article in the comments below 👇`,
    tags: ["#LLM", "#MultiAgent", "#GenerativeAI", "#AI"],
    likes: 312,
    comments: 47,
    link: "https://medium.com/@kevin18patel/stop-guessing-which-llm-is-right-let-them-decide-together-6cb18d91e6c2",
  },
  {
    date: "December 5, 2025",
    content: `Just published a deep dive on Embeddings — the invisible engine powering LLMs, RAG, and Multi-Agent Systems.\n\nWhy embeddings matter:\n• Semantic search understands meaning, not just keywords\n• RAG pipelines depend on high-quality embeddings for accurate retrieval\n• Multi-agent routing uses embeddings to direct queries to the right agent\n\nIf you're building with GenAI and haven't mastered embeddings, you're missing the foundation. 📐\n\nLink in comments 👇`,
    tags: ["#Embeddings", "#RAG", "#GenAI", "#LLM"],
    likes: 278,
    comments: 39,
    link: "https://medium.com/@kevin18patel/embeddings-in-genai-the-invisible-engine-powering-llms-rag-and-multi-agent-systems-d9157ec94f26",
  },
  {
    date: "January 2024",
    content: `Thrilled to share that CompliTru AI — the agentic AI platform I engineered at Global Mobility Services — is now live in production! 🚀\n\nResults so far:\n✅ 60% reduction in manual regulatory review effort\n✅ 35% improvement in end-to-end task success rate\n✅ 40% latency reduction in RAG pipelines\n✅ 25% fewer hallucinations with HIPAA-compliant safeguards\n\nBuilding agentic AI that actually moves the needle in compliance automation has been one of the most rewarding challenges of my career.\n\nAlways happy to connect with others working on production AI systems! 🤝`,
    tags: ["#AgenticAI", "#MLOps", "#GenerativeAI", "#ComplianceAI"],
    likes: 521,
    comments: 68,
    link: "https://www.linkedin.com/in/connect-kevin-patel/",
  },
];

const LinkedInPosts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        LinkedIn{" "}
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
          Posts
        </span>
      </motion.h2>

      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        {POSTS.map((post, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden"
          >
            {/* Post header */}
            <div className="flex items-center gap-3 p-5 pb-0">
              <img
                src={profilePic}
                alt="Kevin Patel"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-neutral-700"
              />
              <div className="flex-1">
                <p className="font-semibold text-neutral-100">Kevin Patel</p>
                <p className="text-xs text-neutral-400">
                  ML &amp; AI Engineer · Michigan State University
                </p>
                <p className="text-xs text-neutral-500">{post.date}</p>
              </div>
              <a
                href="https://www.linkedin.com/in/connect-kevin-patel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-blue-500 px-3 py-1 text-xs font-medium text-blue-400 transition-colors hover:bg-blue-500 hover:text-white"
              >
                <FaLinkedin />
                Follow
              </a>
            </div>

            {/* Post content */}
            <div className="px-5 pt-4 pb-3">
              <p className="whitespace-pre-line text-sm leading-relaxed text-neutral-300">
                {post.content}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs text-blue-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Engagement stats */}
            <div className="mx-5 border-t border-neutral-800 py-2 text-xs text-neutral-500">
              <span>{post.likes.toLocaleString()} likes · {post.comments} comments</span>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-around border-t border-neutral-800 px-2 py-1">
              {[
                { icon: <FaThumbsUp />, label: "Like" },
                { icon: <FaRegComment />, label: "Comment" },
                { icon: <FaShare />, label: "Share" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-sm text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-purple-400"
                >
                  {icon}
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        ))}

        {/* View all on LinkedIn CTA */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center pt-4"
        >
          <a
            href="https://www.linkedin.com/in/connect-kevin-patel/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-900/30"
          >
            <FaLinkedin className="text-lg" />
            View Full Profile on LinkedIn
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LinkedInPosts;
