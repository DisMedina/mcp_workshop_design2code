import figmaLogo from "../assets/figma-logo.svg";

function FigmaMockup() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-[#0F172B] font-[Inter,sans-serif]">
      <nav className="w-full h-[94px] flex items-center justify-end px-[58px] bg-[#090B11]">
        <a
          href="#"
          className="text-[18px] font-normal leading-tight text-[#FFB900]"
        >
          Home
        </a>
      </nav>

      <section className="flex-1 flex flex-col items-center justify-center gap-8 px-4 pb-12">
        <img
          src={figmaLogo}
          alt="MCP workshop logo"
          className="w-[527px] max-w-full h-auto"
        />
        <h1 className="max-w-[935px] text-center text-[42px] font-bold text-[#FFB900]">
          MCP workshop: Design to Code - Version 1
        </h1>
      </section>
    </main>
  );
}

export default FigmaMockup;
