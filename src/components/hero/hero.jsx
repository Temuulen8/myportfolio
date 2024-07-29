import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { CiTwitter } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex space-between justify-between px-96 py-32">
      <div className=" flex flex-col gap-y-8">
        <h1 className="font-bold text-6xl">Hi, I'm Kobe </h1>
        <p className="w-[600px]">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>
        <div>
          <div className="flex items-center">
            <IoLocationOutline />
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <div className="flex items-center">
            <GoDotFill />
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex">
          <CiTwitter />
          <VscGithubAlt />
          <FaFigma />
        </div>
      </div>
      <img
        className="w-72 h-80"
        src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_04/1494786/ss-160413-kobe-bryant-mn-02.JPG"
        alt=""
      />
    </section>
  );
};

export default Hero;
