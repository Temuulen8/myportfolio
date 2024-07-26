import Navbar from "@/components/header/nav-section";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-28 bg-white text-black">
      <h1 className="font-bold text-3xl">KOBE</h1>
      <Navbar />
    </header>
  );
};

export default Header;
