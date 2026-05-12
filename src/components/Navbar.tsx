import { Link } from "react-router-dom";

type NavbarProps = {
  textColorClass?: string;
};

export default function Navbar({ textColorClass = "text-[#FFB900]" }: NavbarProps) {
  return (
    <nav
      className="absolute top-0 left-0 right-0 h-[94px] w-full bg-[#090B11] flex items-center justify-end pr-[60px]"
      aria-label="Primary"
    >
      <ul className="flex items-center gap-[31px] list-none m-0 p-0">
        <li>
          <Link
            to="/"
            className={`${textColorClass} font-['Inter'] text-[18px] font-normal leading-none no-underline hover:underline`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`${textColorClass} font-['Inter'] text-[18px] font-normal leading-none no-underline hover:underline`}
          >
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
