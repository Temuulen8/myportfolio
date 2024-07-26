import Tag from "@/components/tag";
import Logo from "./logo";
const Skills = () => {
  return (
    <section className="container m-auto py-24 mb-24">
      <div className="flex items-center justify-center flex-col gap-4">
        <Tag text="Skills" />
        <p className="text-[20px] text-gray-600 dark:text-white">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <Logo />
    </section>
  );
};
export default Skills;