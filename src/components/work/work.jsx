import Tag from "../tag";
import Workcard from "./workcard";
const Work = () => {
  return (
    <section className="mt-5">
      <div className="flex items-center justify-center flex-col gap-4">
        <Tag text="Work" />
        <p className="text-[20px] text-gray-600 ">
          Some of the noteworthy projects I have built:
        </p>
        <Workcard />
      </div>
    </section>
  );
};
export default Work;
