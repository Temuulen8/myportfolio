import { MdOutlineEmail } from "react-icons/md";
import { TbBoxMultiple } from "react-icons/tb";
import { LuPhone } from "react-icons/lu";
// import Heroicon from "../herosectionf/heroicon";

const { default: Tag } = require("../tag");

const Contact = () => {
  return (
    <footer className="container m-auto flex flex-col justify-center items-center gap-4 p-16 dark:text-white max-sm:w-[343px]">
      <Tag text="Get in touch" />
      <p className=" w-[576px] text-xl text-center max-sm:w-[343px] ">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="flex gap-8  items-center text-4xl font-semibold max-sm:text-lg">
        <MdOutlineEmail />
        <p>b.temuulen2005@gmail.com</p>
        <TbBoxMultiple />
      </div>
      <div className="flex gap-8  items-center text-4xl font-semibold max-sm:text-lg">
        <LuPhone />
        <p>+976 88615033</p>
        <TbBoxMultiple />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <p>You may also find me on these platforms!</p>
        {/* <Heroicon /> */}
      </div>
    </footer>
  );
};

export default Contact;
