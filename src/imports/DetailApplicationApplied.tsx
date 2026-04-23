import svgPaths from "./svg-6jenzzscuq";
import imgCompanyLogo from "figma:asset/d901f01f9fca9f6a667c58463b10e90910ca10bd.png";

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
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col items-center left-1/2 w-[393px]" data-name="Wrapper">
      <Wrapper1 />
    </div>
  );
}

function FooterButton() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col h-[86px] items-start left-1/2 px-[16px] py-[12px] rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.1)] w-[393px]" data-name="Footer Button">
      <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#1b1b1b] text-[14px]">Job Details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Header Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Back Button">
        <div className="absolute inset-[17.59%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.5563">
            <path d={svgPaths.p195c6300} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-black">Application</p>
    </div>
  );
}

function CompanyName() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Company Name">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#818898] text-[12px] text-center">PT. Ceriacorp</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Verified Badge">
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
      <div className="relative rounded-[50px] shrink-0 size-[44px]" data-name="Company Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgCompanyLogo} />
      </div>
      <JobName />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Bookmark Icon">
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
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Work Type Icon">
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
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Location Icon">
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
        <p className="leading-[16px]">Applied Date | 17 Oct 2025</p>
      </div>
    </div>
  );
}

function Salary() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Salary">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#818898] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">$200 - $350/Month</p>
      </div>
    </div>
  );
}

function GeneralInformationJob() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="General Information Job">
      <GeneralJobInformation />
      <Experience />
      <Salary />
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

function ProgressBar() {
  return (
    <div className="bg-[#dfe1e7] content-stretch flex flex-col h-[10px] items-start relative rounded-[10px] shrink-0 w-full" data-name="Progress Bar">
      <div className="bg-[#f97f3a] h-[10px] rounded-[10px] shrink-0 w-full" data-name="Match Progress Bar" />
    </div>
  );
}

function MatchInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="Match Info">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f97f3a] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Match 100%</p>
      </div>
      <ProgressBar />
    </div>
  );
}

function Salary1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-end min-h-px min-w-px relative" data-name="Salary">
      <MatchInfo />
      <div className="flex flex-row items-end self-stretch">
        <div className="bg-[rgba(240,93,8,0.2)] content-stretch flex h-full items-center justify-center px-[10px] py-[4px] relative rounded-[20px] shrink-0 w-[116px]" data-name="Applied">
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f05d08] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[16px]">Apllied</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobDetails() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Job Details">
      <Salary1 />
    </div>
  );
}

function JobDetail() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Job Detail">
      <JobDetail1 />
      <JobDetails />
    </div>
  );
}

function CardListJobMatch() {
  return (
    <div className="bg-white h-[186px] relative rounded-[12px] shrink-0 w-full" data-name="Card List Job Match">
      <div aria-hidden="true" className="absolute border border-[#dfe1e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <JobDetail />
      </div>
    </div>
  );
}

function ApplicationStatusHeader() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Application Status Header">
      <div className="flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[14px] text-black">
        <p className="leading-[20px] whitespace-pre-wrap">Application Status Tracking</p>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f97f3a] text-[12px]">Details</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[11.785px]" data-name="Icon">
      <div className="absolute inset-[-7.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4508 13.4508">
          <g id="Icon">
            <path d={svgPaths.p26948d00} id="Vector" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66584" />
            <path d={svgPaths.p2d8d5d80} id="Vector_2" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66584" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white relative rounded-[21304400px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dfe1e7] border-[1.905px] border-solid inset-0 pointer-events-none rounded-[21304400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container3() {
  return <div className="bg-[#dfe1e7] flex-[1_0_0] min-h-px min-w-px w-[2px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[7.996px] h-full items-center relative shrink-0 w-[32px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px]">Applied</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#717182] text-[12px] w-[227px] whitespace-pre-wrap">We have successfully received your application. Please wait for the screening stage.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#717182] text-[12px]">2/10/2025, 14.56.59</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#f97f3a] text-[12px]">System</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <Text />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.998px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container5 />
      <Paragraph />
      <Container6 />
    </div>
  );
}

function ApplicationStatusCard() {
  return (
    <div className="relative shrink-0 w-full" data-name="Application Status Card">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <div className="flex flex-row items-center self-stretch">
          <Container1 />
        </div>
        <Container4 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dfe1e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative w-full">
        <ApplicationStatusCard />
      </div>
    </div>
  );
}

function SummarySection() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[16px] relative shrink-0 text-[12px] w-full whitespace-pre-wrap" data-name="Summary Section">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#0d0d12] w-full">Summary</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#666d80] w-full">Skilled mining engineer dedicated to designing efficient extraction processes and enhancing safety in mining operations.</p>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[16px] relative shrink-0 text-[12px] w-full whitespace-pre-wrap" data-name="Experience Section">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#0d0d12] w-full">Experience</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#666d80] w-full">5 Years Mining Engineering</p>
    </div>
  );
}

function EducationSection() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[16px] relative shrink-0 text-[12px] w-full whitespace-pre-wrap" data-name="Education Section">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#0d0d12] w-full">Education</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#666d80] w-full">S1 Mining Engineering - Institut Teknologi Bandung</p>
    </div>
  );
}

function TechnicalSkillsContainer() {
  return (
    <div className="content-center flex flex-wrap gap-[6px] items-center relative shrink-0 w-full" data-name="Technical Skills Container">
      <div className="bg-[#f6f8fa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666d80] text-[12px] text-center">{`Mine Planning & Design`}</p>
      </div>
      <div className="bg-[#f6f8fa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666d80] text-[12px] text-center">{`Drilling & Blasting Techniques`}</p>
      </div>
      <div className="bg-[#f6f8fa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666d80] text-[12px] text-center">Geotechnical Analysis</p>
      </div>
      <div className="bg-[#f6f8fa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666d80] text-[12px] text-center">Mining Software (Surpac, Vulcan, Micromine)</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Info">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#111] text-[12px] w-full whitespace-pre-wrap">Technical Skill</p>
      <TechnicalSkillsContainer />
    </div>
  );
}

function SoftSkillsContainer() {
  return (
    <div className="content-center flex flex-wrap gap-[6px] items-center relative shrink-0 w-full" data-name="Soft Skills Container">
      <div className="bg-[#f6f8fa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666d80] text-[12px] text-center">{`Leadership & Team Management`}</p>
      </div>
      <div className="bg-[#f6f8fa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666d80] text-[12px] text-center">Problem Solving</p>
      </div>
      <div className="bg-[#f6f8fa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666d80] text-[12px] text-center">Risk Assessment</p>
      </div>
      <div className="bg-[#f6f8fa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666d80] text-[12px] text-center">Communication</p>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Info">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#111] text-[12px] w-full whitespace-pre-wrap">Soft Skills</p>
      <SoftSkillsContainer />
    </div>
  );
}

function JobSearchPositionIndividual() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Job Search Position Individual">
      <Info />
      <Info1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <JobSearchPositionIndividual />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_20.83%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-8.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 13.5">
          <g id="Group">
            <path d={svgPaths.p1d194870} id="Vector" stroke="var(--stroke-0, #666D80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p23198300} id="Vector_2" stroke="var(--stroke-0, #666D80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M3.41667 4.75H4.08333" id="Vector_3" stroke="var(--stroke-0, #666D80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M3.41667 7.41667H7.41667" id="Vector_4" stroke="var(--stroke-0, #666D80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M3.41667 10.0833H7.41667" id="Vector_5" stroke="var(--stroke-0, #666D80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ResumeSection() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Resume Section">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-w-full relative shrink-0 text-[#0d0d12] text-[12px] w-[min-content] whitespace-pre-wrap">Resume/CV</p>
      <div className="content-stretch flex gap-[10px] h-[32px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 w-[116px]" data-name="Button">
        <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="file-text">
          <Group />
        </div>
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#666d80] text-[12px]">View CV</p>
      </div>
    </div>
  );
}

function ApplicationDetailsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Application Details Section">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Application Details</p>
      </div>
      <SummarySection />
      <ExperienceSection />
      <EducationSection />
      <Frame />
      <ResumeSection />
    </div>
  );
}

function ApplicationStatusContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Application Status Content">
      <Container />
      <ApplicationDetailsSection />
    </div>
  );
}

function ApplicationStatusSection() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Application Status Section">
      <ApplicationStatusHeader />
      <ApplicationStatusContent />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[68px] w-[361px]" data-name="Header">
      <HeaderContent />
      <CardListJobMatch />
      <ApplicationStatusSection />
    </div>
  );
}

export default function DetailApplicationApplied() {
  return (
    <div className="bg-white overflow-clip relative rounded-[24px] size-full" data-name="Detail Application Applied">
      <div className="absolute h-[50px] left-0 top-0 w-[393px]" data-name="Light Mode">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[24px] not-italic text-[#0d0d12] text-[16px] top-[calc(50%+2.08px)] whitespace-nowrap">
          <p className="leading-[16px]">9:41</p>
        </div>
        <MobileSignal />
        <Wifi />
        <Battery />
      </div>
      <Wrapper />
      <FooterButton />
      <Header />
    </div>
  );
}