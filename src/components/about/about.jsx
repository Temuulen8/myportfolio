import Tag from "@/components/tag";
import About_img from "@/components/about/about-img";
import About_text from "@/components/about/about-text";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex mt-12"
      />

      <section className=" bg-slate-50 px-96 py-32 dark:bg dark:text-gray-900">
        <div className=" flex justify-center">
          <Tag text="About me" />
        </div>
        <div className="flex justify-between items-center">
          <About_img />
          <About_text />
        </div>
      </section>
    </>
  );
};

export default About;
