import Navbar from "../Navbar";

const conventions: Array<{ layer: string; pattern: string; effect: string }> = [
  {
    layer: "Navigation bar frame",
    pattern: "nav/top-bar or component/navbar",
    effect: "Signals it should be a <nav> element.",
  },
  {
    layer: "Clickable nav links",
    pattern: "link/Home, link/About",
    effect: "Signals <a> tags.",
  },
  {
    layer: "Logo frame",
    pattern: "img/logo or asset/logo",
    effect: "Signals <img> with alt text.",
  },
  {
    layer: "SVG icons/logos",
    pattern: "icon/logo-mark",
    effect: "Keeps it as inline SVG, not rasterized",
  },
  {
    layer: "Page root frame",
    pattern: "page/home",
    effect: "Signals full-bleed <main>, not a card",
  },
  {
    layer: "Section containers",
    pattern: "section/hero, section/features",
    effect: "Maps to <section>",
  },
  {
    layer: "Text headings",
    pattern: "h1/headline, h2/subhead",
    effect: "Maps to heading tags",
  },
  {
    layer: "Background fills",
    pattern: "Apply at root frame, not on wrapper groups",
    effect: "Prevents double-container wrapping",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#001B5D] overflow-hidden">
      <Navbar />
      <section className="pt-[196px] pl-[67px] pr-[67px] pb-16 text-[#FFB900] font-['Inter']">
        <h1 className="font-bold text-[42px] leading-tight max-w-[923px]">
          MCP workshop: Design to Code - Version 1.2
        </h1>

        <h3 className="mt-[52px] font-bold text-[42px] leading-tight text-justify max-w-[1788px]">
          This workshop attempts to guide you through MCP&rsquo;s integration,
          plus a little bit of prompt refinement. At design level for the Figma
          interpretation labeling correctly the items within your canvas works
          like a charm e.g:
        </h3>

        <p className="mt-[52px] font-normal text-[18px] leading-relaxed max-w-[1797px]">
          <strong className="font-bold">
            Figma Naming Convention Recommendations
          </strong>
          <br />
          <br />
          These naming conventions in Figma will help the MCP surface
          structural intent instead of just coordinates (Layer type, Recommended
          naming pattern &amp; Effect):
        </p>

        <ul className="mt-[24px] list-disc pl-6 space-y-1 font-normal text-[18px] leading-relaxed max-w-[870px]">
          {conventions.map((c) => (
            <li key={c.layer}>
              {c.layer} - {c.pattern}: {c.effect}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
