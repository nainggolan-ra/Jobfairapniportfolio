import svgPaths from "./svg-b19ftjqsjl";

function Item() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col gap-[6px] items-center relative shrink-0 w-[56px]" data-name="Item">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="search-eye-line">
        <div className="absolute inset-[8.33%_7.03%_7.03%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0849 27.0849">
            <path d={svgPaths.p3a9fd300} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#1b1b1b] text-[12px] text-center w-[min-content]">
        <p className="leading-[16px] whitespace-pre-wrap">Find Job</p>
      </div>
    </button>
  );
}

function Item1() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col gap-[6px] items-center relative shrink-0 w-[56px]" data-name="Item">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="building-4-line">
        <div className="absolute inset-[8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3333 26.6667">
            <path d={svgPaths.p826f930} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b1b1b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Company</p>
      </div>
    </button>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[56px]" data-name="Item">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="funds-box-fill">
        <div className="absolute inset-[12.51%_8.31%_12.49%_8.35%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 24">
            <path d={svgPaths.p1d6fae00} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f97f3a] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Insight</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col gap-[6px] items-center relative shrink-0 w-[56px]" data-name="Item">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="briefcase-4-line">
        <div className="absolute inset-[4.17%_8.33%_12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 26.6667">
            <path d={svgPaths.p32150780} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b1b1b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Application</p>
      </div>
    </button>
  );
}

function Item4() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col gap-[6px] items-center relative shrink-0 w-[56px]" data-name="Item">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="user-line">
        <div className="absolute inset-[4.17%_16.67%_8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 28">
            <path d={svgPaths.p14dd7e00} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#1b1b1b] text-[12px] text-center w-[min-content]">
        <p className="leading-[16px] whitespace-pre-wrap">Profil</p>
      </div>
    </button>
  );
}

export default function BottomMenu() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] items-center justify-center pb-[40px] pt-[16px] relative shadow-[4px_-4px_4px_0px_rgba(215,215,215,0.25)] size-full" data-name="Bottom Menu">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}