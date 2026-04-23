export default function FigmaMockup() {
  return (
    <main className="relative w-[1915px] h-[938px] bg-[#0F172B] overflow-hidden">
      <header className="absolute top-0 left-0 w-[1915px] h-[94px] bg-[#090B11]">
        <nav className="absolute top-[36px] left-[1806px] w-[51px] h-[22px]">
          <a
            href="#"
            className="font-['Inter'] font-normal text-[18px] leading-none text-[#FFB900]"
          >
            Home
          </a>
        </nav>
      </header>

      <img
        src="/fvatar-2.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-[694px] top-[159px] w-[527px] h-[474px]"
      />

      <h1 className="absolute left-[490px] top-[633px] w-[935px] h-[66px] text-center font-['Inter'] font-bold text-[42px] text-[#FFB900]">
        MCP workshop: Design to Code - Version 1
      </h1>
    </main>
  );
}
