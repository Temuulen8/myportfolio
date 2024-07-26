import { MdOutlineLightMode } from "react-icons/md";
import { PiLineVertical } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="flex gap-x-6 items-center">
      <ul className="flex gap-x-6">
        <li>About</li>
        <li>Work</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
      <PiLineVertical />
      <MdOutlineLightMode />
      <button>Download CV</button>
    </div>
  );
};

export default Navbar;
