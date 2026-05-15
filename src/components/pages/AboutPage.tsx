import Navbar from "../Navbar";

const bulletItems = [
  "Navigation bar frame - nav/top-bar or component/navbar: Signals it should be a <nav> element.",
  "Clickable nav links - link/Home, link/About: Signals <a> tags.",
  "Logo frame - img/logo or asset/logo: Signals <img> with alt text.",
  "SVG icons/logos - icon/logo-mark: Keeps it as inline SVG, not rasterized",
  "Page root frame - page/home: Signals full-bleed <main>, not a card",
  "Section containers - section/hero, section/features: Maps to <section>",
  "Text headings - h1/headline, h2/subhead: Maps to heading tags",
  "Background fills - Apply at root frame, not on wrapper groups: Prevents double-container wrapping",
];

function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-[#001B5D] flex flex-col font-['Inter']">
      <Navbar />
      <main className="flex-1 px-[67px] pt-[100px] pb-[60px] flex flex-col gap-[50px] text-[#FFB900]">
        <h1 className="text-[42px] font-bold leading-tight">
          MCP workshop: Design to Code - Version 1.2
        </h1>
        <h3 className="text-[42px] font-bold leading-tight text-justify">
          This workshop attempts to guide you through MCP&rsquo;s integration,
          plus a little bit of prompt refinement. At design level for the Figma
          interpretation labeling correctly the items within your canvas works
          like a charm e.g:
        </h3>
        <p className="text-[18px] font-normal leading-relaxed">
          <strong className="font-bold">
            Figma Naming Convention Recommendations
          </strong>
          <br />
          <br />
          These naming conventions in Figma will help the MCP surface
          structural intent instead of just coordinates (Layer type, Recommended
          naming pattern &amp; Effect):
        </p>
        <ul className="text-[18px] font-normal leading-relaxed list-disc pl-6 flex flex-col gap-1">
          {bulletItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default AboutPage;
