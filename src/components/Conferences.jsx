import { motion } from "framer-motion";

const CONFERENCES = [
  {
    year: "2024",
    title: "Liquid AI's Product Launch",
    description:
      "I had the privilege of witnessing the inaugural launch of Liquid Foundational Models at MIT, which represents a groundbreaking contribution to the field of leading generative AI.",
  },
  {
    year: "2024",
    title: "AI Accelerator Institute (Aiai), Boston",
    description:
      "Had the opportunity to attend the AI Accelerator Institute conference in Boston, which featured two dedicated tracks: the Generative AI Summit and the Computer Vision Summit, showcasing cutting-edge advancements and applications in these rapidly evolving fields.",
  },
  {
    year: "2024",
    title: "HDSI Data Initiative",
    description:
      "Participated in an enthusiastic 48-hour challenge in the AGRI Datathon, where my team was awarded the title of “Best Presentation and Visualization Award” for my team's exceptional contributions..",
  },
  {
    year: "2024",
    title: "Bits and Bio",
    description:
      "An engaging networking event where prominent pharmaceutical corporations showcased the multifaceted applications of artificial intelligence within their operational frameworks.",
  },
  {
    year: "2024",
    title: "ODSC (Open Data Science Conference)",
    description:
     "Got the opportunity to volunteer at a 3-day conference where the event brought together leading experts and professionals in data science, providing insights into the latest advancements in AI, machine learning, and big data technologies.",
  },
  {
    year: "2024",
    title: "AWS Women in Tech",
    description:
     "Had the privilege to attend the AWS Women in Tech event at my university, which focused on women empowerment, insights into career paths at Amazon, and learning from inspiring founders about their journeys and achievements.",
  },
  {
    year: "2024",
    title: "Imagination in Action",
    description:
      "Had the incredible opportunity to attend the 'Imagination in Action' conference, hosted by John Werner in Cambridge, where startups showcased groundbreaking AI applications, industry giants like Stephen Wolfram and Yann LeCun shared transformative insights, and engaging panel discussions explored the ethical and societal implications of AI, leaving me inspired by the possibilities of AI to shape the future of business and society.",
  },
  {
    year: "2023",
    title: "IBM WatsonX Meetup",
    description:
      "Had the opportunity to attend the 'IBM WatsonX Meetup,' which featured an insightful talk on generative AI, interactive networking sessions, and an exploration of the latest technologies being leveraged in the field, providing a valuable platform for learning and connection.",
  }
];

const Conferences = () => {
    return (
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Conferences
        </motion.h2>
        <div className="overflow-x-auto px-4 lg:px-20">
          <table className="table-auto w-full border-collapse border border-neutral-800 text-neutral-400">
            <thead>
              <tr className="bg-neutral-900 text-neutral-200">
                <th className="border border-neutral-700 px-6 py-3 text-left">Year</th>
                <th className="border border-neutral-700 px-6 py-3 text-left">Title</th>
                {/* <th className="border border-neutral-700 px-6 py-3 text-left">Location</th> */}
                <th className="border border-neutral-700 px-6 py-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {CONFERENCES.map((conference, index) => (
                <motion.tr
                  key={index}
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`hover:bg-neutral-800 ${
                    index % 2 === 0 ? "bg-neutral-900" : "bg-neutral-800"
                  }`}
                >
                  <td className="border border-neutral-700 px-6 py-4">{conference.year}</td>
                  <td className="border border-neutral-700 px-6 py-4">{conference.title}</td>
                  {/* <td className="border border-neutral-700 px-6 py-4">{conference.location}</td> */}
                  <td className="border border-neutral-700 px-6 py-4">{conference.description}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Conferences;