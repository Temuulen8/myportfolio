import Navbar from "@/components/header/nav-section";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-96 mt-8 max-sm:p-4">
      <h1 className="font-bold text-3xl">KOBE</h1>
      <Navbar />
    </header>
  );
};

export default Header;
