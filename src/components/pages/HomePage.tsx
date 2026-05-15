import Navbar from "../Navbar";

function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[#0F172B] flex flex-col font-['Inter']">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center gap-[30px] px-6 pb-12">
        <img
          src="/logo.svg"
          alt="MCP workshop logo"
          className="w-[527px] max-w-full h-auto"
        />
        <h1 className="text-[42px] font-bold text-[#FFB900] text-center leading-tight max-w-[935px]">
          MCP workshop: Design to Code - Version 1
        </h1>
      </main>
    </div>
  );
}

export default HomePage;
