import { CiShare1 } from "react-icons/ci";
import Tag from "../tag";

const Workcard = () => {
  return (
    <div className="w-[1152px] h-[480px] sm:flex sm:flex-row max-sm:h-[850px] drop-shadow-2xl justify-center content-center bg-white rounded-xl mb-12 dark:bg-[#1F2937] max-sm:w-[343px]">
      <div className="flex flex-1 bg-gray-50 dark:bg-[#374151]">
        <img className="  p-12" src="./image/Kobe.webp" alt="" />
      </div>
      <div className="flex flex-1 flex-col p-12 gap-y-6">
        <h1 className="font-semibold text-xl">Championship</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap gap-4">
          <Tag text={"React"} />
          <Tag text={"Next.js"} />
          <Tag text={"Typescript"} />
          <Tag text={"Nest.js"} />
          <Tag text={"PostgreSQL"} />
          <Tag text={"Tailwindcss"} />
          <Tag text={"Figma"} />
          <Tag text={"Cypress"} />
          <Tag text={"Storybook"} />
          <Tag text={"Git"} />
        </div>
        <CiShare1 className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Workcard;
