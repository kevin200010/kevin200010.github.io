import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact Me
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href="#"
          className="border-b"
        >
          <div className="text-neutral-200">
            <p className="font-semibold"> Email: 
            <a
              href="mailto:khushineema5@gmail.com"
              className="text-purple-400 hover:underline"
            >
              {"\t" + CONTACT.email}
            </a>
            </p>
          </div>
        </motion.a>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 "
        >
          <div className="text-neutral-200">
            <p className="font-semibold">Phone:
            <a
              href="tel:+12016878959"
              className="text-purple-400 hover:underline"
            >
              {"  "+CONTACT.phoneNo}
            </a>
            </p>
          </div>
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
