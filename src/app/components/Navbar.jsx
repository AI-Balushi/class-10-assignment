// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
      <div className="text-2xl">A<span className="text-pink-400">W</span></div>
      <div>
        <Link href={"#home"} className="mr-4 text-2xl hover:uppercase hover:text-rose-500">Home</Link>
        <Link href={"#cards"} className="mr-4 text-2xl hover:uppercase hover:text-rose-500">Cards</Link>
      </div>
    </header>
  );
};

export default Navbar;
