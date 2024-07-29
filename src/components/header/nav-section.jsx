import { MdOutlineLightMode } from "react-icons/md";
import { PiLineVertical } from "react-icons/pi";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  console.log("theme", theme);
  return (
    <div className="flex gap-x-6 items-center">
      <ul className="flex gap-x-6">
        <li>About</li>
        <li>Work</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
      <PiLineVertical />
      <MdOutlineLightMode
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />

      <button>Download CV</button>
    </div>
  );
};

export default Navbar;
