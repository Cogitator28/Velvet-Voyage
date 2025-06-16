import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md"

export default function Navbar() {
    const HamburgerIcon = () => <MdMenu size="30px" color="black" />;
    return (
        <nav className="flex justify-between bg-[#000080] text-[#FFA500] py-4 px-6 lg:px-12 font-serif text-xl">
            <div className="flex">
                <Link to="/" className="text-2xl">Velvet Voyage</Link>
            </div>
            <div className="lg:flex hidden gap-8">
                <Link to="/about" className="">About</Link>
                <Link to="/" className="">Explore</Link>
            </div>
            <div className="lg:flex hidden gap-8">
                <Link to="/" className="bg-[#FFA500]/90 px-2 rounded-md text-[#000080] hover:scale-110 transition">Sign In</Link>
                <Link to="/" className="hidden">Sign Out</Link>
                <Link to="/" className="">Sign Up</Link>
            </div>
            <div className="flex lg:hidden bg-[#FFA500]/90 px-2 rounded-md text-white">
                <HamburgerIcon />
            </div>
        </nav>
    );
}
