import svgPaths from "./svg-ff8bx8j1yc";
import imgRectangle161123919 from "figma:asset/d901f01f9fca9f6a667c58463b10e90910ca10bd.png";
import imgRectangle161123920 from "figma:asset/8d87f7ad3bea28d89db305d56aba66b88baf28be.png";
import imgRectangle161123921 from "figma:asset/ba6d6c854a1c04e31e5776ff40a1f161d3413f82.png";
import imgRectangle161123922 from "figma:asset/7c189371b89442e93f6e69cd191b8ead33cd4e67.png";
import imgEllipse1248 from "figma:asset/fde3399207ee9acc20bcfd029e85e198b88d20f7.png";

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

function Wrapper1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Wrapper">
      <div className="h-[36px] relative shrink-0 w-full" data-name="Dark Mode">
        <div className="-translate-x-1/2 absolute bg-[#0d0d12] bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Home Indicator" />
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="absolute bg-white bottom-[calc(8.33%+48.67px)] content-stretch flex flex-col items-center left-0 w-[393px]" data-name="Wrapper">
      <Wrapper1 />
    </div>
  );
}

function FilterOption() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Filter Option">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-black">For you</p>
    </div>
  );
}

function FilterOption1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Filter Option">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#818898] text-[14px]">{`Mining `}</p>
    </div>
  );
}

function FilterOption2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Filter Option">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#818898] text-[14px]">Location</p>
    </div>
  );
}

function FilterOption3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Filter Option">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#818898] text-[14px]">Experience</p>
    </div>
  );
}

function FilterOptions() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Filter Options">
      <FilterOption />
      <FilterOption1 />
      <FilterOption2 />
      <FilterOption3 />
    </div>
  );
}

function FilterContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Filter Container">
      <FilterOptions />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Filter Icon">
        <div className="absolute inset-[20.83%_20.13%]" data-name="Vector">
          <div className="absolute inset-[-6.43%_-6.28%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4484 13.1667">
              <path d={svgPaths.p2890a118} id="Vector" stroke="var(--stroke-0, #818898)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyName() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Company Name">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818898] text-[12px] text-center">PT. Ceriacorp</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="verified-badge-fill">
        <div className="absolute inset-[8.16%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.39 13.39">
            <path d={svgPaths.p1e1c9e80} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function JobName() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Job Name">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] min-w-full relative shrink-0 text-[#0d0d12] text-[16px] w-[min-content] whitespace-pre-wrap">Mining Operations</p>
      <CompanyName />
    </div>
  );
}

function CompanyDetail() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full" data-name="Company Detail">
      <div className="relative rounded-[50px] shrink-0 size-[44px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle161123919} />
      </div>
      <JobName />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="bookmark">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-4.17%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 19.5">
              <path d={svgPaths.p17780680} id="Vector" stroke="var(--stroke-0, #0D0D12)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkType() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Work Type">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="user-line">
        <div className="absolute inset-[4.17%_16.67%_8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 14">
            <path d={svgPaths.p237b8780} fill="var(--fill-0, #818898)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#818898] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Fulltime</p>
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Location">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="map-pin-line">
        <div className="absolute inset-[8.33%_12.5%_1.13%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.4853">
            <path d={svgPaths.p1e36f0c0} fill="var(--fill-0, #818898)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#818898] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Onsite | Jakarta, Indonesia</p>
      </div>
    </div>
  );
}

function GeneralJobInformation() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="General Job Information">
      <WorkType />
      <Location />
    </div>
  );
}

function Experience() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Experience">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#818898] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Junior (1-2 YoE)</p>
      </div>
    </div>
  );
}

function GeneralInformationJob() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="General Information Job">
      <GeneralJobInformation />
      <Experience />
    </div>
  );
}

function JobDetail1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Job Detail">
      <CompanyDetail />
      <GeneralInformationJob />
    </div>
  );
}

function Salary() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[6px] items-center justify-end leading-[0] min-h-px min-w-px relative text-[12px]" data-name="Salary">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#f97f3a]">
        <p className="leading-[16px] whitespace-pre-wrap">Match 90%</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#818898] text-center whitespace-nowrap">
        <p className="leading-[16px]">$200 - $350/Month</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Salary />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[337px]">
      <Frame1 />
      <div className="bg-[#dfe1e7] content-stretch flex flex-col h-[10px] items-start relative rounded-[10px] shrink-0 w-[337px]" data-name=".progress-bar">
        <div className="bg-[#f97f3a] h-[10px] rounded-[10px] shrink-0 w-[300px]" />
      </div>
    </div>
  );
}

function JobDetail() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Job Detail">
      <JobDetail1 />
      <Frame5 />
    </div>
  );
}

function CompanyName1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Company Name">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818898] text-[12px] text-center">PT. Tambangdigital</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="verified-badge-fill">
        <div className="absolute inset-[8.16%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.39 13.39">
            <path d={svgPaths.p1e1c9e80} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function JobName1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Job Name">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] min-w-full relative shrink-0 text-[#0d0d12] text-[16px] w-[min-content] whitespace-pre-wrap">Operation Manager</p>
      <CompanyName1 />
    </div>
  );
}

function CompanyDetail1() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full" data-name="Company Detail">
      <div className="relative rounded-[50px] shrink-0 size-[44px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle161123920} />
      </div>
      <JobName1 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="bookmark">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-4.17%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 19.5">
              <path d={svgPaths.p17780680} id="Vector" stroke="var(--stroke-0, #0D0D12)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkType1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Work Type">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="user-line">
        <div className="absolute inset-[4.17%_16.67%_8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 14">
            <path d={svgPaths.p237b8780} fill="var(--fill-0, #818898)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#818898] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Fulltime</p>
      </div>
    </div>
  );
}

function Location1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Location">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="map-pin-line">
        <div className="absolute inset-[8.33%_12.5%_1.13%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.4853">
            <path d={svgPaths.p1e36f0c0} fill="var(--fill-0, #818898)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#818898] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Onsite | Jakarta, Indonesia</p>
      </div>
    </div>
  );
}

function GeneralJobInformation1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="General Job Information">
      <WorkType1 />
      <Location1 />
    </div>
  );
}

function Experience1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Experience">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#818898] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Junior (1-2 YoE)</p>
      </div>
    </div>
  );
}

function GeneralInformationJob1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="General Information Job">
      <GeneralJobInformation1 />
      <Experience1 />
    </div>
  );
}

function JobDetail3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Job Detail">
      <CompanyDetail1 />
      <GeneralInformationJob1 />
    </div>
  );
}

function Salary1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[6px] items-center justify-end leading-[0] min-h-px min-w-px relative text-[12px]" data-name="Salary">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#f97f3a]">
        <p className="leading-[16px] whitespace-pre-wrap">Match 90%</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#818898] text-center whitespace-nowrap">
        <p className="leading-[16px]">$200 - $350/Month</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Salary1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[337px]">
      <Frame2 />
      <div className="bg-[#dfe1e7] content-stretch flex flex-col h-[10px] items-start relative rounded-[10px] shrink-0 w-[337px]" data-name=".progress-bar">
        <div className="bg-[#f97f3a] h-[10px] rounded-[10px] shrink-0 w-[300px]" />
      </div>
    </div>
  );
}

function JobDetail2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Job Detail">
      <JobDetail3 />
      <Frame6 />
    </div>
  );
}

function CompanyName2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Company Name">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818898] text-[12px] text-center">PT. Miningindonesia</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="verified-badge-fill">
        <div className="absolute inset-[8.16%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.39 13.39">
            <path d={svgPaths.p1e1c9e80} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function JobName2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Job Name">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] min-w-full relative shrink-0 text-[#0d0d12] text-[16px] w-[min-content] whitespace-pre-wrap">Warehouse Suvervisor</p>
      <CompanyName2 />
    </div>
  );
}

function CompanyDetail2() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full" data-name="Company Detail">
      <div className="relative rounded-[50px] shrink-0 size-[44px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle161123921} />
      </div>
      <JobName2 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="bookmark">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-4.17%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 19.5">
              <path d={svgPaths.p17780680} id="Vector" stroke="var(--stroke-0, #0D0D12)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkType2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Work Type">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="user-line">
        <div className="absolute inset-[4.17%_16.67%_8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 14">
            <path d={svgPaths.p237b8780} fill="var(--fill-0, #818898)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#818898] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Fulltime</p>
      </div>
    </div>
  );
}

function Location2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Location">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="map-pin-line">
        <div className="absolute inset-[8.33%_12.5%_1.13%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.4853">
            <path d={svgPaths.p1e36f0c0} fill="var(--fill-0, #818898)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#818898] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Onsite | Jakarta, Indonesia</p>
      </div>
    </div>
  );
}

function GeneralJobInformation2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="General Job Information">
      <WorkType2 />
      <Location2 />
    </div>
  );
}

function Experience2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Experience">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#818898] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Junior (1-2 YoE)</p>
      </div>
    </div>
  );
}

function GeneralInformationJob2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="General Information Job">
      <GeneralJobInformation2 />
      <Experience2 />
    </div>
  );
}

function JobDetail5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Job Detail">
      <CompanyDetail2 />
      <GeneralInformationJob2 />
    </div>
  );
}

function Salary2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[6px] items-center justify-end leading-[0] min-h-px min-w-px relative text-[12px]" data-name="Salary">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#f97f3a]">
        <p className="leading-[16px] whitespace-pre-wrap">Match 90%</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#818898] text-center whitespace-nowrap">
        <p className="leading-[16px]">$200 - $350/Month</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Salary2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[337px]">
      <Frame3 />
      <div className="bg-[#dfe1e7] content-stretch flex flex-col h-[10px] items-start relative rounded-[10px] shrink-0 w-[337px]" data-name=".progress-bar">
        <div className="bg-[#f97f3a] h-[10px] rounded-[10px] shrink-0 w-[300px]" />
      </div>
    </div>
  );
}

function JobDetail4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Job Detail">
      <JobDetail5 />
      <Frame7 />
    </div>
  );
}

function CompanyName3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Company Name">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818898] text-[12px] text-center">PT. Nikelindo</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="verified-badge-fill">
        <div className="absolute inset-[8.16%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.39 13.39">
            <path d={svgPaths.p1e1c9e80} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function JobName3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Job Name">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] min-w-full relative shrink-0 text-[#0d0d12] text-[16px] w-[min-content] whitespace-pre-wrap">Grade Control Technician</p>
      <CompanyName3 />
    </div>
  );
}

function CompanyDetail3() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full" data-name="Company Detail">
      <div className="relative rounded-[50px] shrink-0 size-[44px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle161123922} />
      </div>
      <JobName3 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="bookmark">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-4.17%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 19.5">
              <path d={svgPaths.p17780680} id="Vector" stroke="var(--stroke-0, #0D0D12)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkType3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Work Type">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="user-line">
        <div className="absolute inset-[4.17%_16.67%_8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 14">
            <path d={svgPaths.p237b8780} fill="var(--fill-0, #818898)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#818898] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Fulltime</p>
      </div>
    </div>
  );
}

function Location3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Location">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="map-pin-line">
        <div className="absolute inset-[8.33%_12.5%_1.13%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.4853">
            <path d={svgPaths.p1e36f0c0} fill="var(--fill-0, #818898)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#818898] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Onsite | Jakarta, Indonesia</p>
      </div>
    </div>
  );
}

function GeneralJobInformation3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="General Job Information">
      <WorkType3 />
      <Location3 />
    </div>
  );
}

function Experience3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Experience">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#818898] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Junior (1-2 YoE)</p>
      </div>
    </div>
  );
}

function GeneralInformationJob3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="General Information Job">
      <GeneralJobInformation3 />
      <Experience3 />
    </div>
  );
}

function JobDetail7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Job Detail">
      <CompanyDetail3 />
      <GeneralInformationJob3 />
    </div>
  );
}

function Salary3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[6px] items-center justify-end leading-[0] min-h-px min-w-px relative text-[12px]" data-name="Salary">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#f97f3a]">
        <p className="leading-[16px] whitespace-pre-wrap">Match 80%</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#818898] text-center whitespace-nowrap">
        <p className="leading-[16px]">$200 - $350/Month</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Salary3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[337px]">
      <Frame4 />
      <div className="bg-[#dfe1e7] content-stretch flex flex-col h-[10px] items-start relative rounded-[10px] shrink-0 w-[337px]" data-name=".progress-bar">
        <div className="bg-[#f97f3a] h-[10px] rounded-[10px] shrink-0 w-[258px]" />
      </div>
    </div>
  );
}

function JobDetail6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Job Detail">
      <JobDetail7 />
      <Frame8 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[calc(8.33%+48.67px)] w-[361px]" data-name="Content">
      <div className="h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Search">
        <div aria-hidden="true" className="absolute border border-[#c1c7d0] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[16px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="Search">
              <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-5.63%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8333 14.8333">
                    <path d={svgPaths.p7dde200} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[70.83%_12.5%_12.5%_70.83%]" data-name="Vector">
                <div className="absolute inset-[-22.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333">
                    <path d="M4.08333 4.08333L0.75 0.75" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#64748b] text-[14px]">Search...</p>
          </div>
        </div>
      </div>
      <FilterContainer />
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0d0d12] text-[16px] w-full whitespace-pre-wrap">Available Job</p>
      <div className="bg-white relative rounded-[12px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card List Job">
        <div className="content-stretch flex items-start p-[12px] relative w-full">
          <JobDetail />
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card List Job">
        <div className="content-stretch flex items-start p-[12px] relative w-full">
          <JobDetail2 />
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card List Job">
        <div className="content-stretch flex items-start p-[12px] relative w-full">
          <JobDetail4 />
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card List Job">
        <div className="content-stretch flex items-start p-[12px] relative w-full">
          <JobDetail6 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative rounded-[40px] shrink-0">
      <div className="relative rounded-[40px] shrink-0 size-[32px]" data-name="search-eye-line">
        <div className="absolute inset-[8.33%_7.03%_7.03%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0849 27.0849">
            <path d={svgPaths.p3a9fd300} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[56px]" data-name="Item">
      <Frame />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#f97f3a] text-[12px] text-center w-[min-content]">
        <p className="leading-[16px] whitespace-pre-wrap">Find Job</p>
      </div>
    </div>
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
    <button className="content-stretch cursor-pointer flex flex-col gap-[6px] items-center relative shrink-0 w-[56px]" data-name="Item">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Insight">
        <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33261 9.33261">
              <path d={svgPaths.p12d83540} id="Vector" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33261" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-7.5%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6667 15.3333">
              <path d={svgPaths.p1f688d00} id="Vector" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b1b1b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Insight</p>
      </div>
    </button>
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

function PhotoProfile() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Photo Profile">
      <div className="relative shrink-0 size-[40px]">
        <img alt="" className="absolute block max-w-none size-full" height="40" src={imgEllipse1248} width="40" />
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Profile">
      <PhotoProfile />
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] text-black">{` Hi john Doe ✋ `}</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-center left-[16px] top-[62px] w-[361px]" data-name="Header">
      <Profile />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Notification Icon">
        <div className="absolute inset-[8.33%_8.33%_2.08%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21.5">
            <path d={svgPaths.p20da2980} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function FindOneJob() {
  return (
    <div className="bg-white overflow-clip relative rounded-[24px] size-full" data-name="Find One Job">
      <div className="absolute h-[50px] left-0 top-0 w-[393px]" data-name="Light Mode">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[24px] not-italic text-[#0d0d12] text-[16px] top-[calc(50%+2.08px)] whitespace-nowrap">
          <p className="leading-[16px]">9:41</p>
        </div>
        <MobileSignal />
        <Wifi />
        <Battery />
      </div>
      <Wrapper />
      <Content />
      <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex gap-[20px] items-center justify-center left-1/2 pb-[40px] pt-[16px] shadow-[4px_-4px_4px_0px_rgba(215,215,215,0.25)] w-[393px]" data-name="Bottom Menu">
        <Item />
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
      </div>
      <Header />
    </div>
  );
}