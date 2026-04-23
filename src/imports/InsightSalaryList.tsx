import svgPaths from "./svg-9etlbb4xx2";
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
    <div className="absolute content-stretch flex items-center left-[16px] top-[50px] w-[361px]" data-name="Header">
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

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#c1c7d0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="search-line">
            <div className="absolute inset-[8.33%_7.03%_7.03%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3137 20.3137">
                <path d={svgPaths.pa729a80} fill="var(--fill-0, #C1C7D0)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[26px] relative shrink-0 text-[#c1c7d0] text-[16px]">Search</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[23.999px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0056 22.002">
            <path d={svgPaths.p26add570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99988" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#33cfff] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] pt-[7.996px] px-[7.996px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[26px] relative shrink-0 text-[#116b97] text-[16px]">Know Your Worth</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Heading />
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="HomeScreen">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal items-start relative shrink-0 text-[#116b97] text-[14px] w-full whitespace-pre-wrap" data-name="Text">
      <p className="leading-[0] relative shrink-0 w-full">
        <span className="leading-[20px]">{`Access verified salary data from  `}</span>
        <span className="leading-[20px]">15,000+</span>
      </p>
      <p className="leading-[20px] relative shrink-0 w-full">professionals. Make informed career decisions with confidence.</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <Text />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#ecf7ff] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#33cfff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative w-full">
        <HomeScreen />
        <Paragraph />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-white">Submit Salary</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[24px]" data-name="add-fill">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p2d909600} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Text1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative">
        <Container5 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container4 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f97f3a] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Button">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative w-full">
          <Container3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f97f3a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] min-h-px min-w-px relative text-[16px] text-white whitespace-pre-wrap">Salary Trends</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[24px]" data-name="Insight">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
            <div className="absolute inset-[-11.11%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33261 7.33261">
                <g id="Vector">
                  <path d={svgPaths.p26451a40} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p26451a40} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33261" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
            <div className="absolute inset-[-10%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
                <path d="M21 1L12.5 9.5L7.5 4.5L1 11" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Text2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-full">
        <Container8 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[135px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f97f3a] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Button">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative w-full">
          <Container6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f97f3a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative rounded-[12px]">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[12px] shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_11_5191)" id="Icon">
          <path d={svgPaths.p35b9f280} id="Vector" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66577" />
          <path d={svgPaths.p1d7f0000} id="Vector_2" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66577" />
          <path d={svgPaths.p2b722f80} id="Vector_3" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66577" />
          <path d="M8.33333 5H11.6667" id="Vector_4" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66577" />
          <path d="M8.33325 8.33398H11.6666" id="Vector_5" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66577" />
          <path d="M8.33325 11.666H11.6666" id="Vector_6" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66577" />
          <path d="M8.33333 15H11.6667" id="Vector_7" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66577" />
        </g>
        <defs>
          <clipPath id="clip0_11_5191">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#f97f3a] text-[16px]">Compare Companies</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[7.996px] h-[23.999px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[19.989px] items-start relative shrink-0" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f97f3a] text-[14px]">Explore top-paying companies for any role</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[47.986px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.998px] h-full items-start relative">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[47.986px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <div className="relative shrink-0 size-[24px]" data-name="chevron-right">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-8.33%_-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
                <path d="M1 1L7 7L1 13" id="Vector" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#fff3ec] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f97f3a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start px-[16px] py-[20px] relative w-full">
        <Container9 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[26px] relative shrink-0 text-[#111] text-[16px]">{`Verified salaries `}</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f97f3a] text-[14px]">View All</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-right">
          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-7.5%_-15%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 11.5">
                <path d={svgPaths.p35ac1680} id="Vector" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-right">
          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-7.5%_-15%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 11.5">
                <path d={svgPaths.p35ac1680} id="Vector" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center relative w-full">
          <Heading1 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#101828] text-[14px]">Senior Mining Engineer</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.991px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9914 15.9914">
        <g clipPath="url(#clip0_11_5185)" id="Icon">
          <path d={svgPaths.p3b633a80} id="Vector" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33261" />
          <path d={svgPaths.p1b9b2d00} id="Vector_2" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33261" />
        </g>
        <defs>
          <clipPath id="clip0_11_5185">
            <rect fill="white" height="15.9914" width="15.9914" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[7.996px] h-[23.999px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[13.998px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9982 13.9982">
        <g clipPath="url(#clip0_11_5176)" id="Icon">
          <g id="Vector">
            <path d={svgPaths.p7771200} stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d={svgPaths.p7771200} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d={svgPaths.p7771200} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p1ef21880} stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d={svgPaths.p1ef21880} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d={svgPaths.p1ef21880} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p8c91e00} stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d={svgPaths.p8c91e00} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d={svgPaths.p8c91e00} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_4">
            <path d="M5.83252 3.5H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 3.5H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 3.5H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_5">
            <path d="M5.83252 5.83398H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 5.83398H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 5.83398H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_6">
            <path d="M5.83252 8.16602H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 8.16602H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 8.16602H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_7">
            <path d="M5.83252 10.498H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 10.498H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 10.498H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_11_5176">
            <rect fill="white" height="13.9982" width="13.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.989px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#111] text-[14px]">TechCorp</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[10px] h-[19.989px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Text4 />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#ecffee] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit]">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#278231] text-[12px]">Junior Level</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ecffee] border-[0.733px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Container17 />
        <Container18 />
        <Badge />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[26px] relative shrink-0 text-[#f97f3a] text-[16px] text-right">$200-$240</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818898] text-[12px] text-right">/Year</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818898] text-[12px] text-right">127 Submission</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative">
        <Container20 />
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function HomeScreen1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="HomeScreen">
      <Container16 />
      <Container19 />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#eceff3] h-[21.455px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit]">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#111] text-[12px]">5-7 years</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="h-[21.455px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#111] text-[12px]">San Francisco, CA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function HomeScreen2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="HomeScreen">
      <Badge1 />
      <Badge2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfe1e7] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative w-full">
          <HomeScreen1 />
          <HomeScreen2 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#101828] text-[14px]">Mining Operations</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.991px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9914 15.9914">
        <g clipPath="url(#clip0_11_5145)" id="Icon">
          <path d={svgPaths.p3e8ebc80} id="Vector" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33261" />
          <path d={svgPaths.p1b9b2d00} id="Vector_2" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33261" />
        </g>
        <defs>
          <clipPath id="clip0_11_5145">
            <rect fill="white" height="15.9914" width="15.9914" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[7.996px] h-[23.999px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[13.998px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9982 13.9982">
        <g clipPath="url(#clip0_11_5159)" id="Icon">
          <g id="Vector">
            <path d={svgPaths.p25471940} stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d={svgPaths.p25471940} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d={svgPaths.p25471940} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p1ef21880} stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d={svgPaths.p1ef21880} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d={svgPaths.p1ef21880} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p274fe300} stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d={svgPaths.p274fe300} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d={svgPaths.p274fe300} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_4">
            <path d="M5.83252 3.5H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 3.5H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 3.5H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_5">
            <path d="M5.83252 5.83203H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 5.83203H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 5.83203H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_6">
            <path d="M5.83252 8.16602H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 8.16602H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 8.16602H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_7">
            <path d="M5.83252 10.5H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 10.5H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 10.5H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_11_5159">
            <rect fill="white" height="13.9982" width="13.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.989px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#111] text-[14px]">InnovateLabs</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[10px] h-[19.989px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Text5 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#fff6e0] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#966422] text-[12px]">Mid Level</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Container25 />
        <Container26 />
        <Badge3 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[26px] relative shrink-0 text-[#f97f3a] text-[16px] text-right">$250-$300</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818898] text-[12px] text-right">/Year</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818898] text-[12px] text-right">89 Submission</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative">
        <Container28 />
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function HomeScreen3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="HomeScreen">
      <Container24 />
      <Container27 />
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#eceff3] h-[21.455px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit]">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#111] text-[12px]">4-6 years</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="h-[21.455px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#111] text-[12px]">New York, NY</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function HomeScreen4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="HomeScreen">
      <Badge4 />
      <Badge5 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfe1e7] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative w-full">
          <HomeScreen3 />
          <HomeScreen4 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#101828] text-[14px]">Mine Operations Manager</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[15.991px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9914 15.9914">
        <g clipPath="url(#clip0_11_5185)" id="Icon">
          <path d={svgPaths.p3b633a80} id="Vector" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33261" />
          <path d={svgPaths.p1b9b2d00} id="Vector_2" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33261" />
        </g>
        <defs>
          <clipPath id="clip0_11_5185">
            <rect fill="white" height="15.9914" width="15.9914" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[7.996px] h-[23.999px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[13.998px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9982 13.9982">
        <g clipPath="url(#clip0_11_5176)" id="Icon">
          <g id="Vector">
            <path d={svgPaths.p7771200} stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d={svgPaths.p7771200} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d={svgPaths.p7771200} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p1ef21880} stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d={svgPaths.p1ef21880} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d={svgPaths.p1ef21880} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p8c91e00} stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d={svgPaths.p8c91e00} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d={svgPaths.p8c91e00} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_4">
            <path d="M5.83252 3.5H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 3.5H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 3.5H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_5">
            <path d="M5.83252 5.83398H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 5.83398H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 5.83398H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_6">
            <path d="M5.83252 8.16602H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 8.16602H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 8.16602H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_7">
            <path d="M5.83252 10.498H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 10.498H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 10.498H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_11_5176">
            <rect fill="white" height="13.9982" width="13.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.989px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#111] text-[14px]">DesignHub</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[10px] h-[19.989px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon7 />
      <Text6 />
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[#fff6e0] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#966422] text-[12px]">Mid Level</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Container33 />
        <Container34 />
        <Badge6 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[26px] relative shrink-0 text-[#f97f3a] text-[16px] text-right">$550 -$600</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818898] text-[12px] text-right">/Year</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818898] text-[12px] text-right">64 Submission</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative">
        <Container36 />
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function HomeScreen5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="HomeScreen">
      <Container32 />
      <Container35 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[#eceff3] h-[21.455px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit]">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#111] text-[12px]">3-5 years</p>
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="h-[21.455px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#111] text-[12px]">Austin, TX</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function HomeScreen6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="HomeScreen">
      <Badge7 />
      <Badge8 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfe1e7] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative w-full">
          <HomeScreen5 />
          <HomeScreen6 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#101828] text-[14px]">{`Health & Safety Supervisor`}</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.991px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9914 15.9914">
        <g clipPath="url(#clip0_11_5145)" id="Icon">
          <path d={svgPaths.p3e8ebc80} id="Vector" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33261" />
          <path d={svgPaths.p1b9b2d00} id="Vector_2" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33261" />
        </g>
        <defs>
          <clipPath id="clip0_11_5145">
            <rect fill="white" height="15.9914" width="15.9914" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[7.996px] h-[23.999px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[13.998px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9982 13.9982">
        <g clipPath="url(#clip0_11_5159)" id="Icon">
          <g id="Vector">
            <path d={svgPaths.p25471940} stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d={svgPaths.p25471940} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d={svgPaths.p25471940} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p1ef21880} stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d={svgPaths.p1ef21880} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d={svgPaths.p1ef21880} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p274fe300} stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d={svgPaths.p274fe300} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d={svgPaths.p274fe300} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_4">
            <path d="M5.83252 3.5H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 3.5H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 3.5H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_5">
            <path d="M5.83252 5.83203H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 5.83203H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 5.83203H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_6">
            <path d="M5.83252 8.16602H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 8.16602H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 8.16602H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
          <g id="Vector_7">
            <path d="M5.83252 10.5H8.16585" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16651" />
            <path d="M5.83252 10.5H8.16585" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
            <path d="M5.83252 10.5H8.16585" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16651" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_11_5159">
            <rect fill="white" height="13.9982" width="13.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[19.989px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#111] text-[14px]">DesignHub</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[10px] h-[19.989px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon9 />
      <Text7 />
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-[#fadbe1] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#d73e3d] text-[12px]">Senior Level</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Container41 />
        <Container42 />
        <Badge9 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[26px] relative shrink-0 text-[#f97f3a] text-[16px] text-right">$500-$550</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818898] text-[12px] text-right">/Year</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818898] text-[12px] text-right">64 Submission</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative">
        <Container44 />
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function HomeScreen7() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="HomeScreen">
      <Container40 />
      <Container43 />
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-[#eceff3] h-[21.455px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit]">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#111] text-[12px]">4-6 years</p>
      </div>
    </div>
  );
}

function Badge11() {
  return (
    <div className="h-[21.455px] relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#111] text-[12px]">Seattle, WA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function HomeScreen8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="HomeScreen">
      <Badge10 />
      <Badge11 />
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfe1e7] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative w-full">
          <HomeScreen7 />
          <HomeScreen8 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container23 />
      <Container31 />
      <Container39 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[calc(16.67%+6.83px)] w-[361px]">
      <Container />
      <Frame1 />
      <Button2 />
      <Frame3 />
    </div>
  );
}

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

function PrimitiveButton() {
  return (
    <div className="bg-[#f97f3a] flex-[1_0_0] h-[29.004px] min-h-px min-w-px relative rounded-[14px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white">Overview</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="flex-[1_0_0] h-[29.004px] min-h-px min-w-px relative rounded-[14px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.733px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8.733px] py-[4.733px] relative size-full">
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px]">My Submissions</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="flex-[1_0_0] h-[29.004px] min-h-px min-w-px relative rounded-[14px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.733px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8.733px] py-[4.733px] relative size-full">
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px]">Compare</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="absolute bg-[#f6f8fa] content-stretch flex gap-[10px] items-center left-[16px] py-[3px] rounded-[14px] top-[calc(8.33%+65.92px)] w-[361px]" data-name="Primitive.div">
      <PrimitiveButton />
      <PrimitiveButton1 />
      <PrimitiveButton2 />
    </div>
  );
}

export default function InsightSalaryList() {
  return (
    <div className="bg-white overflow-clip relative rounded-[24px] size-full" data-name="Insight Salary List">
      <div className="absolute h-[50px] left-0 top-0 w-[393px]" data-name="Light Mode">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[24px] not-italic text-[#0d0d12] text-[16px] top-[calc(50%+2.08px)] whitespace-nowrap">
          <p className="leading-[16px]">9:41</p>
        </div>
        <MobileSignal />
        <Wifi />
        <Battery />
      </div>
      <Header />
      <div className="absolute content-stretch flex gap-[10px] items-center left-[16px] top-[calc(8.33%+7.92px)] w-[361px]" data-name="Search">
        <Frame />
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="filter-3-line">
          <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
              <path d={svgPaths.pd8d1e00} fill="var(--fill-0, #C1C7D0)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Frame4 />
      <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex gap-[20px] items-center justify-center left-1/2 pb-[40px] pt-[16px] shadow-[4px_-4px_4px_0px_rgba(215,215,215,0.25)] w-[393px]" data-name="Bottom Menu">
        <Item />
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
      </div>
      <PrimitiveDiv />
    </div>
  );
}