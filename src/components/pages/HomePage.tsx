import Navbar from "../Navbar";
import logo from "../../assets/logo.svg";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full bg-[#0F172B] overflow-hidden">
      <Navbar />
      <section className="pt-[159px] flex flex-col items-center w-full">
        <img
          src={logo}
          alt="MCP workshop logo"
          className="w-[527px] max-w-[90%] h-auto"
        />
        <h1 className="mt-[28px] text-[#FFB900] font-['Inter'] font-bold text-[42px] text-center leading-tight max-w-[935px] px-4">
          MCP workshop: Design to Code - Version 1
        </h1>
      </section>
    </main>
  );
}
