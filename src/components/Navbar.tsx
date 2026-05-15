import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-[94px] bg-[#090B11] flex items-center justify-end pr-[60px] gap-[31px] font-['Inter']">
      <Link
        to="/"
        className="text-[18px] font-normal text-[#FFB900] hover:underline"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-[18px] font-normal text-[#FFB900] hover:underline"
      >
        About us
      </Link>
    </nav>
  );
}

export default Navbar;
