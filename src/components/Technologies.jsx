import { RiReactjsLine } from "react-icons/ri";
import { DiPython, DiDocker } from "react-icons/di";
import { animate, motion } from "framer-motion";
import {
  SiJavascript,
  SiMongodb,
  SiGo,
  SiJenkins,
  SiMysql,
  SiPostgresql,
  SiTerraform,
  SiKubernetes,
  SiRedis,
  SiAnaconda,
  SiR,
  SiCplusplus,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiMlflow,
  SiMicrosoftazure,
  SiAmazonwebservices,
  SiTableau,
  SiPowerbi,
  SiStreamlit,
  SiDash,
  SiPlotly,
  SiFastapi
} from "react-icons/si";
import { FaNodeJs, FaAws, FaLinux } from "react-icons/fa"; // AWS icon from Font Awesome

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <RiReactjsLine className="text-7xl" style={{ color: "#61DBFB" }} />{" "}
          {/* React */}
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <DiPython className="text-7xl" style={{ color: "#3776AB" }} />{" "}
          {/* Python */}
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiJavascript className="text-7xl" style={{ color: "#F7DF1E" }} />{" "}
          {/* JavaScript */}
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiTensorflow className="text-7xl" style={{ color: "green" }} />{" "}
          {/* JavaScript */}
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiKeras className="text-7xl" style={{ color: "red" }} />{" "}
          {/* JavaScript */}
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiMlflow className="text-7xl" style={{ color: "blue" }} />{" "}
          {/* JavaScript */}
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiMicrosoftazure className="text-7xl" style={{ color: "blue" }} />{" "}
          {/* JavaScript */}
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiTableau className="text-7xl" style={{ color: "orange" }} />{" "}
          {/* JavaScript */}
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiPowerbi className="text-7xl" style={{ color: "green" }} />{" "}
          {/* JavaScript */}
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiStreamlit className="text-7xl" style={{ color: "red" }} />{" "}
          {/* JavaScript */}
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiDash className="text-7xl" style={{ color: "orange" }} />{" "}
          {/* JavaScript */}
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiPlotly className="text-7xl" style={{ color: "blue" }} />{" "}
          {/* JavaScript */}
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiFastapi className="text-7xl" style={{ color: "lightblue" }} />{" "}
          {/* JavaScript */}
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiCplusplus className="text-7xl" style={{ color: "#339933" }} />{" "}
          {/* Node.js */}
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiR className="text-7xl" style={{ color: "#00ADD8" }} /> {/* Go */}
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <DiDocker className="text-7xl" style={{ color: "#2496ED" }} />{" "}
          {/* Docker */}
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiMongodb className="text-7xl" style={{ color: "#47A248" }} />{" "}
          {/* MongoDB */}
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiAnaconda className="text-7xl" style={{ color: "green" }} />{" "}
          {/* Kubernetes */}
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiPytorch className="text-7xl" style={{ color: "#D24939" }} />{" "}
          {/* Jenkins */}
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
         
          <SiPostgresql className="text-7xl" style={{ color: "#336791" }} />{" "}
          {/* PostgreSQL */}
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiMysql className="text-7xl" style={{ color: "#00758F" }} />{" "}
          {/* MySQL */}
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
         
          <SiAmazonwebservices className="text-7xl" style={{ color: "#DC382D" }} />{" "}
          {/* Redis */}
        </motion.div>
        {/* <div className="rounded-2xl border-4 border-neutral-800">
          <TbBrandNextjs className="text-7xl" style={{ color: "#000000" }} />{" "}
        </div> */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <FaLinux className="text-7xl" style={{ color: "#FCC624" }} />{" "}
          {/* Linux */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
