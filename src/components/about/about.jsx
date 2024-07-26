import Tag from "@/components/tag";
import About_img from "@/components/about/about-img";
import About_text from "@/components/about/about-text";

const About = () => {
  return (
    <section className=" bg-slate-50 px-28 py-32">
      <Tag text = "About me" />
      <div className="flex justify-between items-center">
        <About_img />
        <About_text />
      </div>
    </section>
  );
};

export default About;
