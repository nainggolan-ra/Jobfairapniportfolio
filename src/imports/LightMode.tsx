import svgPaths from "./svg-ya8a5kxfvj";

function MobileSignal() {
  return (
    <div className="-translate-y-1/2 absolute h-[10px] right-[77px] top-[calc(50%+3.58px)] w-[18px]" data-name="Mobile Signal">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
        <g id="Mobile Signal">
          <path d={svgPaths.p2dd4b040} fill="var(--fill-0, #0D0D12)" id="Mobile Signal_2" />
        </g>
      </svg>
    </div>
  );
}

function Wifi() {
  return (
    <div className="-translate-y-1/2 absolute h-[10.965px] right-[56.73px] top-[calc(50%+2.57px)] w-[15.272px]" data-name="Wifi">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.9652">
        <g id="Wifi">
          <path d={svgPaths.p2c5af100} fill="var(--fill-0, #0D0D12)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Battery1() {
  return (
    <div className="-translate-y-1/2 absolute contents right-[24.02px] top-[calc(50%+2.59px)]" data-name="Battery">
      <div className="-translate-y-1/2 absolute h-[13px] right-[26px] top-[calc(50%+2.58px)] w-[25px]" data-name="Rectangle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
          <path d={svgPaths.p35a5ef80} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #0F172A)" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute h-[4px] right-[24.02px] top-[calc(50%+3.08px)] w-[1.328px]" data-name="Combined Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4">
          <path d={svgPaths.p32d253c0} fill="var(--fill-0, #0F172A)" id="Combined Shape" opacity="0.4" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute h-[8.33px] right-[28.5px] top-[calc(50%+2.58px)] w-[20.2px]" data-name="Rectangle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2 8.33">
          <path d={svgPaths.p37124280} fill="var(--fill-0, #0F172A)" id="Rectangle" />
        </svg>
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="-translate-y-1/2 absolute contents right-[24.02px] top-[calc(50%+2.58px)]" data-name="Battery">
      <Battery1 />
    </div>
  );
}

export default function LightMode() {
  return (
    <div className="relative size-full" data-name="Light Mode">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[24px] not-italic text-[#0d0d12] text-[16px] top-[calc(50%+2.08px)] whitespace-nowrap">
        <p className="leading-[16px]">9:41</p>
      </div>
      <MobileSignal />
      <Wifi />
      <Battery />
    </div>
  );
}