import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { slideUp } from "./animation";

const Contact = () => {
  return (
    <section className="flex flex-col w-full min-h-screen justify-center gap-y-10 px-5 lg:px-10 overflow-hidden my-52 selection:text-primaryLight selection:bg-primary">
      <div className="flex flex-col justify-center">
        <div className="overflow-hidden">
          <motion.p
            variants={slideUp}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-primary text-2xl md:text-4xl lg:text-6xl"
          >
            HELLO,
          </motion.p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
