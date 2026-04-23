export default function FigmaMockup() {
  return (
    <main className="relative w-[1915px] h-[938px] bg-[#0F172B] overflow-hidden font-['Inter',sans-serif]">
      <img
        src="/figma/sidebar-top.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-[1915px] h-[94px]"
      />
      <nav className="absolute top-[36px] left-[1806px] w-[51px] h-[22px]">
        <a
          href="#"
          className="text-[18px] leading-none font-normal text-[#FFB900]"
        >
          Home
        </a>
      </nav>
      <img
        src="/figma/fvatar.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-[159px] left-[694px] w-[527px] h-[474px]"
      />
      <h1 className="absolute top-[633px] left-[490px] w-[935px] h-[66px] text-center text-[42px] font-bold leading-[66px] text-[#FFB900]">
        MCP workshop: Design to Code - Version 1
      </h1>
    </main>
  );
}
