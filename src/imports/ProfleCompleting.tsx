import svgPaths from "./svg-8j4xawmsjj";
import imgImg1 from "figma:asset/3908a065bf114887c2ccea250fed458c3aac95b8.png";
import imgEllipse1248 from "figma:asset/e26927c72d5cf6edcbebd5f1205c3cc66355a107.png";
import { imgImg } from "./svg-1n5r3";

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
          <path d={svgPaths.p35a5ef80} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #0D0D12)" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute h-[4px] right-[24.02px] top-[calc(50%+3.08px)] w-[1.328px]" data-name="Combined Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4">
          <path d={svgPaths.p32d253c0} fill="var(--fill-0, #0D0D12)" id="Combined Shape" opacity="0.4" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute h-[8.33px] right-[28.5px] top-[calc(50%+2.58px)] w-[20.2px]" data-name="Rectangle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2 8.33">
          <path d={svgPaths.p37124280} fill="var(--fill-0, #0D0D12)" id="Rectangle" />
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

function Group() {
  return (
    <div className="absolute inset-[10.87%_0_0_1.72%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5866 21.3913">
        <g id="Group">
          <path d={svgPaths.p2ad02800} fill="var(--fill-0, #D80027)" id="Vector" />
          <path d={svgPaths.p7288780} fill="var(--fill-0, #D80027)" id="Vector_2" />
          <path d={svgPaths.p12b80500} fill="var(--fill-0, #D80027)" id="Vector_3" />
          <path d={svgPaths.p18adb800} fill="var(--fill-0, #D80027)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function MultiLanguage() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Multi Language">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Flags">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1c665200} fill="var(--fill-0, #F0F0F0)" id="Vector" />
        </svg>
        <Group />
        <div className="absolute bottom-1/2 left-0 right-1/2 top-0" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p199b9d00} fill="var(--fill-0, #0052B4)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[12px]">EN</p>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px relative text-[#0d0d12] text-[16px] whitespace-pre-wrap">Profile</p>
          <MultiLanguage />
        </div>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="absolute contents inset-[0_0_60.84%_0]" data-name="banner">
      <div className="absolute inset-[0_0_60.84%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[361px_150px] rounded-tl-[12px] rounded-tr-[12px]" data-name="img" style={{ maskImage: `url('${imgImg}')` }}>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-tl-[12px] rounded-tr-[12px]" />
          <div className="absolute inset-0 overflow-hidden rounded-tl-[12px] rounded-tr-[12px]">
            <img alt="" className="absolute h-full left-[-2.37%] max-w-none top-0 w-[113.36%]" src={imgImg1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Post() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center leading-[0] min-h-px min-w-px not-italic relative whitespace-nowrap" data-name="post">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#818898] text-[12px]">
        <p className="leading-[1.6]">Application</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#111] text-[16px] tracking-[0.2px]">
        <p className="leading-[1.5]">114</p>
      </div>
    </div>
  );
}

function Friends() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center leading-[0] min-h-px min-w-px not-italic relative whitespace-nowrap" data-name="friends">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#818898] text-[12px]">
        <p className="leading-[1.6]">Saved</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#111] text-[16px] tracking-[0.2px]">
        <p className="leading-[1.5]">10</p>
      </div>
    </div>
  );
}

function Stat() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#eceff3] content-stretch flex gap-[16px] items-center justify-center left-0 px-[12px] py-[16px] right-0 rounded-[12px] top-[calc(50%+152px)]" data-name="stat">
      <Post />
      <div className="bg-[#e2e8f0] h-[42px] rounded-[5px] shrink-0 w-[1.5px]" data-name="Separator" />
      <Friends />
    </div>
  );
}

function ProfileImage() {
  return (
    <div className="absolute bg-[#f0fbff] content-stretch flex items-center left-[16px] p-[4px] rounded-[100px] top-[92px]" data-name="Profile Image">
      <div className="relative shrink-0 size-[96px]">
        <img alt="" className="absolute block max-w-none size-full" height="96" src={imgEllipse1248} width="96" />
      </div>
    </div>
  );
}

function FullName() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Full Name">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.25] not-italic relative shrink-0 text-[#111] text-[22px]">John Doe</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Verified Badge">
        <div className="absolute inset-[8.16%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.085 20.085">
            <path d={svgPaths.p2e295e80} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[4px] items-start leading-[16px] relative shrink-0 text-[12px]" data-name="Contact Details">
      <p className="min-w-full relative shrink-0 text-[#666d80] w-[min-content] whitespace-pre-wrap">081234567890</p>
      <p className="min-w-full relative shrink-0 text-[#0d0d12] w-[min-content] whitespace-pre-wrap">Johndoe@gmail.com</p>
      <p className="relative shrink-0 text-[#0d0d12]">Indonesia. DKI Jakarta, Jakarta Pusat</p>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="Contact Info">
      <FullName />
      <ContactDetails />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[11.99%_11.99%_16.67%_16.67%]" data-name="Group">
      <div className="absolute inset-[-6.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9142 12.9142">
          <g id="Group">
            <path d={svgPaths.p22651d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p24559380} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M8.75 2.16421L10.75 4.16421" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[16px] top-[202px] w-[333px]" data-name="Profile">
      <ContactInfo />
      <div className="bg-[#f97f3a] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="edit">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function ProfileSocialMedia() {
  return (
    <div className="h-[383px] relative shrink-0 w-[361px]" data-name="Profile - Social Media">
      <div className="absolute bg-[#f6f8fa] inset-0 rounded-[12px]" data-name="background" />
      <Banner />
      <Stat />
      <ProfileImage />
      <div className="absolute bg-[#f97f3a] content-stretch flex gap-[8px] items-center justify-center left-[317px] p-[8px] rounded-[6px] top-[12px]" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="camera-line">
          <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12">
              <path d={svgPaths.p3c95b400} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" />
            </svg>
          </div>
        </div>
      </div>
      <Profile />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[23.49%_33.33%_23.48%_34.26%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.77818 12.7279">
            <path d={svgPaths.p4034e00} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#818898] text-[12px] whitespace-pre-wrap">Summary</p>
      <Container1 />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Info">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666d80] text-[12px] w-full whitespace-pre-wrap">Skilled mining engineer dedicated to designing efficient extraction processes and enhancing safety in mining operations.</p>
    </div>
  );
}

function JobSearchPositionIndividual() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position Individual">
      <Info />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <JobSearchPositionIndividual />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <Container2 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Frame />
    </div>
  );
}

function JobSearchPositionA() {
  return (
    <div className="bg-[#fbfcfe] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position A">
      <Header1 />
    </div>
  );
}

function WorkExperience() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[10px] items-start ml-0 mt-0 pb-[10px] relative row-1 w-[361px]" data-name="Work Experience">
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-b border-solid inset-0 pointer-events-none" />
      <Container />
      <JobSearchPositionA />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#818898] text-[12px] whitespace-pre-wrap">AI Career Navigator</p>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Info">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666d80] text-[12px] w-full whitespace-pre-wrap">Get personalized career guidance from AI based on your skills, experience, and interests.</p>
    </div>
  );
}

function JobSearchPositionIndividual1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position Individual">
      <Info1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <JobSearchPositionIndividual1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <Container4 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Frame2 />
    </div>
  );
}

function JobSearchPositionA1() {
  return (
    <div className="bg-[#fbfcfe] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position A">
      <Header2 />
    </div>
  );
}

function WorkExperience1() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[10px] items-start ml-0 mt-[112px] pb-[10px] relative row-1 w-[361px]" data-name="Work Experience">
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-b border-solid inset-0 pointer-events-none" />
      <Container3 />
      <JobSearchPositionA1 />
      <div className="bg-[#f97f3a] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="Ai">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p3d86df00} fill="var(--fill-0, #F0FBFF)" id="Polygon 1" />
              </svg>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[14px] text-center text-white">AI Career Navigator</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#818898] text-[12px] whitespace-pre-wrap">AI Resume Assistant</p>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Info">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666d80] text-[12px] w-full whitespace-pre-wrap">{`Introducing the AI Resume Assistant: Your go-to tool for crafting the perfect resume! `}</p>
    </div>
  );
}

function JobSearchPositionIndividual2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position Individual">
      <Info2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <JobSearchPositionIndividual2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <Container6 />
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Frame4 />
    </div>
  );
}

function JobSearchPositionA2() {
  return (
    <div className="bg-[#fbfcfe] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position A">
      <Header3 />
    </div>
  );
}

function WorkExperience2() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[10px] items-start ml-0 mt-[250px] pb-[10px] relative row-1 w-[361px]" data-name="Work Experience">
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-b border-solid inset-0 pointer-events-none" />
      <Container5 />
      <JobSearchPositionA2 />
      <div className="bg-[#f97f3a] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="Ai">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p3d86df00} fill="var(--fill-0, #F0FBFF)" id="Polygon 1" />
              </svg>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[14px] text-center text-white">AI Resume Assistant</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <WorkExperience />
      <WorkExperience1 />
      <WorkExperience2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p100b7380} fill="var(--fill-0, #F97F3A)" fillRule="evenodd" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function CompanyLogosSmall() {
  return (
    <div className="bg-white relative rounded-[180px] shrink-0 size-[24px]" data-name="Company logos small">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Icon />
      </div>
      <div aria-hidden="true" className="absolute border-[0.188px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[180px]" />
    </div>
  );
}

function AddWorkExperienceContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Add Work Experience Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Add Work Experience Icon">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2d909600} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f97f3a] text-[12px]">Work Experience</p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Section Header">
      <CompanyLogosSmall />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#818898] text-[12px] whitespace-pre-wrap">Work Experience</p>
      <AddWorkExperienceContainer />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative self-stretch shrink-0 w-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 144">
        <g id="Frame">
          <path d={svgPaths.p31b60c00} fill="var(--stroke-0, #F97F3A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[11.99%_11.99%_16.67%_16.67%]" data-name="Group">
      <div className="absolute inset-[-4.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6213 18.6213">
          <g id="Group">
            <path d={svgPaths.p210f8180} id="Vector" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p2eb72000} id="Vector_2" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M12.75 2.87132L15.75 5.87132" id="Vector_3" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function EditJobPositionContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Edit Job Position Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Edit Job Position Icon">
        <Group2 />
      </div>
    </div>
  );
}

function JobPositionHeader() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Job Position Header">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#1b2128] text-[14px] whitespace-pre-wrap">PT Bumi Mineral Sejahtera</p>
      <EditJobPositionContainer />
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[6px] items-start leading-[16px] relative shrink-0 text-[12px] w-full" data-name="Info">
      <p className="relative shrink-0 text-[#111]">{`Senior Mining Engineer `}</p>
      <p className="relative shrink-0 text-[rgba(20,32,46,0.62)]">·</p>
      <p className="relative shrink-0 text-[#818898]">Jan 2020 – Jul 2024</p>
    </div>
  );
}

function JobSearchPositionIndividual3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Job Search Position Individual">
      <JobPositionHeader />
      <Info3 />
      <ul className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#818898] text-[12px] w-full whitespace-pre-wrap">
        <li className="mb-0 ms-[18px]">
          <span className="leading-[16px]">Led a team of 15 engineers in planning and supervising open-pit mining operations.</span>
        </li>
        <li className="mb-0 ms-[18px]">
          <span className="leading-[16px]">Implemented safety protocols reducing workplace incidents by 30%.</span>
        </li>
        <li className="ms-[18px]">
          <span className="leading-[16px]">Optimized drilling operations resulting in 12% cost efficiency.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <JobSearchPositionIndividual3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Frame6 />
    </div>
  );
}

function JobSearchPositionA3() {
  return (
    <div className="bg-[#fbfcfe] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position A">
      <Header4 />
    </div>
  );
}

function WorkExperience3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[10px] relative shrink-0 w-[361px]" data-name="Work Experience">
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-b border-solid inset-0 pointer-events-none" />
      <SectionHeader />
      <JobSearchPositionA3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p100b7380} fill="var(--fill-0, #F97F3A)" fillRule="evenodd" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function CompanyLogosSmall1() {
  return (
    <div className="bg-white relative rounded-[180px] shrink-0 size-[24px]" data-name="Company logos small">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Icon1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.188px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[180px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Add Button">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2d909600} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f97f3a] text-[12px]">Ceritification</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <CompanyLogosSmall1 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#818898] text-[12px] whitespace-pre-wrap">Certifications</p>
      <Container8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative self-stretch shrink-0 w-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 170">
        <g id="Frame">
          <path d={svgPaths.p21fe3100} fill="var(--stroke-0, #F97F3A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[11.99%_11.99%_16.67%_16.67%]" data-name="Group">
      <div className="absolute inset-[-4.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6213 18.6213">
          <g id="Group">
            <path d={svgPaths.p210f8180} id="Vector" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p2eb72000} id="Vector_2" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M12.75 2.87132L15.75 5.87132" id="Vector_3" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px relative text-[#111] text-[12px] whitespace-pre-wrap">Certified Mine Manager (CMM)</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Edit Job Position Icon">
        <Group3 />
      </div>
    </div>
  );
}

function Info4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Info">
      <Container10 />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#818898] text-[12px] w-full whitespace-pre-wrap">Ministry of Energy and Mineral Resources, Indonesia (2022)</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[11.99%_11.99%_16.67%_16.67%]" data-name="Group">
      <div className="absolute inset-[-4.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6213 18.6213">
          <g id="Group">
            <path d={svgPaths.p210f8180} id="Vector" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p2eb72000} id="Vector_2" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M12.75 2.87132L15.75 5.87132" id="Vector_3" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px relative text-[#111] text-[12px] whitespace-pre-wrap">Occupational Health and Safety in Mining (OHSAS 18001)</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Edit Job Position Icon">
        <Group4 />
      </div>
    </div>
  );
}

function Info5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Info">
      <Container11 />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#818898] text-[12px]">Training Center Indonesia (2021)</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[11.99%_11.99%_16.67%_16.67%]" data-name="Group">
      <div className="absolute inset-[-4.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6213 18.6213">
          <g id="Group">
            <path d={svgPaths.p210f8180} id="Vector" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p2eb72000} id="Vector_2" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M12.75 2.87132L15.75 5.87132" id="Vector_3" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px relative text-[#111] text-[12px] whitespace-pre-wrap">{`Mine Ventilation & Safety Certificate`}</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Edit Job Position Icon">
        <Group5 />
      </div>
    </div>
  );
}

function Info6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Info">
      <Container12 />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#818898] text-[12px]">Global Mining Institute (2020)</p>
    </div>
  );
}

function JobSearchPositionIndividual4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Job Search Position Individual">
      <Info4 />
      <Info5 />
      <Info6 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <JobSearchPositionIndividual4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Frame11 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame10 />
      <Container9 />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Frame9 />
    </div>
  );
}

function JobSearchPositionA4() {
  return (
    <div className="bg-[#fbfcfe] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position A">
      <Header5 />
    </div>
  );
}

function WorkExperience4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[10px] relative shrink-0 w-[361px]" data-name="Work Experience">
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-b border-solid inset-0 pointer-events-none" />
      <Container7 />
      <JobSearchPositionA4 />
    </div>
  );
}

function CertificationContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Certification Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Add Icon">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2d909600} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f97f3a] text-[12px]">Education</p>
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#818898] text-[12px] whitespace-pre-wrap">Education</p>
      <CertificationContainer />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative self-stretch shrink-0 w-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 68">
        <g id="Frame">
          <path d={svgPaths.p1495cd00} fill="var(--stroke-0, #F97F3A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[11.99%_11.99%_16.67%_16.67%]" data-name="Group">
      <div className="absolute inset-[-4.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6213 18.6213">
          <g id="Group">
            <path d={svgPaths.p210f8180} id="Vector" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p2eb72000} id="Vector_2" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M12.75 2.87132L15.75 5.87132" id="Vector_3" stroke="var(--stroke-0, #F97F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function JobHeader() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Job Header">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#111] text-[12px]">Mining Engineering</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-[rgba(20,32,46,0.62)]">·</p>
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px relative text-[#818898] text-[12px] whitespace-pre-wrap">Jan 2014 – Jul 2018</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Edit Job Position Icon">
        <Group6 />
      </div>
    </div>
  );
}

function JobDetails() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[6px] items-start justify-center leading-[16px] relative shrink-0 text-[12px] w-full" data-name="Job Details">
      <p className="relative shrink-0 text-[#818898]">Institut Technology Bandung</p>
      <p className="relative shrink-0 text-[rgba(20,32,46,0.62)]">GPA (3,98)</p>
    </div>
  );
}

function Info7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Info">
      <JobHeader />
      <JobDetails />
    </div>
  );
}

function JobSearchPositionIndividual5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position Individual">
      <Info7 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <JobSearchPositionIndividual5 />
    </div>
  );
}

function JobInfoContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Job Info Container">
      <Frame14 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame13 />
      <JobInfoContainer />
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Frame12 />
    </div>
  );
}

function JobSearchPositionA5() {
  return (
    <div className="bg-[#fbfcfe] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position A">
      <Header7 />
    </div>
  );
}

function WorkExperience5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[10px] relative shrink-0 w-[361px]" data-name="Work Experience">
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-b border-solid inset-0 pointer-events-none" />
      <Header6 />
      <JobSearchPositionA5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[23.49%_33.33%_23.48%_34.26%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.77818 12.7279">
            <path d={svgPaths.p4034e00} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#818898] text-[12px] whitespace-pre-wrap">Career Preference</p>
      <Container14 />
    </div>
  );
}

function Info8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Info">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#818898] text-[12px] w-full whitespace-pre-wrap">Yes, I’am actively looking</p>
    </div>
  );
}

function JobSearchPositionIndividual6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position Individual">
      <Info8 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <JobSearchPositionIndividual6 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Frame16 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <Container15 />
    </div>
  );
}

function Header8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Frame15 />
    </div>
  );
}

function JobSearchPositionA6() {
  return (
    <div className="bg-[#fbfcfe] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position A">
      <Header8 />
    </div>
  );
}

function WorkExperience6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[10px] relative shrink-0 w-[361px]" data-name="Work Experience">
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-b border-solid inset-0 pointer-events-none" />
      <Container13 />
      <JobSearchPositionA6 />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[23.49%_33.33%_23.48%_34.26%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.77818 12.7279">
            <path d={svgPaths.p4034e00} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#818898] text-[12px] whitespace-pre-wrap">Expected Salary</p>
      <IconContainer />
    </div>
  );
}

function Info9() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[6px] items-start leading-[16px] relative shrink-0 text-[#818898] text-[12px] w-full whitespace-pre-wrap" data-name="Info">
      <p className="relative shrink-0 w-full">Expected Salary: $200 – Rp 350 / month</p>
      <p className="relative shrink-0 w-full">Negotiable : Yes</p>
    </div>
  );
}

function JobSearchPositionIndividual7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position Individual">
      <Info9 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <JobSearchPositionIndividual7 />
    </div>
  );
}

function DetailsContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Details Container">
      <Frame18 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <DetailsContainer />
    </div>
  );
}

function Header10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Frame17 />
    </div>
  );
}

function JobSearchPositionA7() {
  return (
    <div className="bg-[#fbfcfe] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position A">
      <Header10 />
    </div>
  );
}

function WorkExperience7() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[10px] relative shrink-0 w-[361px]" data-name="Work Experience">
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-b border-solid inset-0 pointer-events-none" />
      <Header9 />
      <JobSearchPositionA7 />
    </div>
  );
}

function AddSkillContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Add Skill Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Add Skill Icon">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2d909600} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f97f3a] text-[12px]">{`Skill & Expertise`}</p>
    </div>
  );
}

function Header11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#818898] text-[12px] whitespace-pre-wrap">{`Skill & Expertise`}</p>
      <AddSkillContainer />
    </div>
  );
}

function TechnicalSkillsContainer() {
  return (
    <div className="content-center flex flex-wrap gap-[6px] items-center relative shrink-0 w-full" data-name="Technical Skills Container">
      <div className="bg-[#eceff3] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px] text-center">{`Mine Planning & Design`}</p>
      </div>
      <div className="bg-[#eceff3] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px] text-center">{`Drilling & Blasting Techniques`}</p>
      </div>
      <div className="bg-[#eceff3] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px] text-center">Geotechnical Analysis</p>
      </div>
      <div className="bg-[#eceff3] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px] text-center">Mining Software (Surpac, Vulcan, Micromine)</p>
      </div>
    </div>
  );
}

function Info10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Info">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#111] text-[12px] w-full whitespace-pre-wrap">Technical Skill</p>
      <TechnicalSkillsContainer />
    </div>
  );
}

function SoftSkillsContainer() {
  return (
    <div className="content-center flex flex-wrap gap-[6px] items-center relative shrink-0 w-full" data-name="Soft Skills Container">
      <div className="bg-[#eceff3] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px] text-center">{`Leadership & Team Management`}</p>
      </div>
      <div className="bg-[#eceff3] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px] text-center">Problem Solving</p>
      </div>
      <div className="bg-[#eceff3] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px] text-center">Risk Assessment</p>
      </div>
      <div className="bg-[#eceff3] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px] text-center">Communication</p>
      </div>
    </div>
  );
}

function Info11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Info">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#111] text-[12px] w-full whitespace-pre-wrap">Soft Skills</p>
      <SoftSkillsContainer />
    </div>
  );
}

function JobSearchPositionIndividual8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Job Search Position Individual">
      <Info10 />
      <Info11 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <JobSearchPositionIndividual8 />
    </div>
  );
}

function SkillSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Skill Section">
      <Frame20 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <SkillSection />
    </div>
  );
}

function Header12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Frame19 />
    </div>
  );
}

function JobSearchPositionA8() {
  return (
    <div className="bg-[#fbfcfe] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position A">
      <Header12 />
    </div>
  );
}

function WorkExperience8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[10px] relative shrink-0 w-[361px]" data-name="Work Experience">
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-b border-solid inset-0 pointer-events-none" />
      <Header11 />
      <JobSearchPositionA8 />
    </div>
  );
}

function AddPositionContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Add Position Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Add Icon">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2d909600} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f97f3a] text-[12px]">Position</p>
    </div>
  );
}

function Header13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#818898] text-[12px] whitespace-pre-wrap">Position Preference</p>
      <AddPositionContainer />
    </div>
  );
}

function PositionTagsContainer() {
  return (
    <div className="content-center flex flex-wrap gap-[6px] items-center relative shrink-0 w-full" data-name="Position Tags Container">
      <div className="bg-[#eceff3] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px] text-center">Senior Mining Engineer</p>
      </div>
      <div className="bg-[#eceff3] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px] text-center">Mine Operations Manager</p>
      </div>
      <div className="bg-[#eceff3] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px] text-center">{`Health & Safety Supervisor`}</p>
      </div>
    </div>
  );
}

function Info12() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Info">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#111] text-[12px] w-full whitespace-pre-wrap">Preferred Positions</p>
      <PositionTagsContainer />
    </div>
  );
}

function JobSearchPositionIndividual9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position Individual">
      <Info12 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <JobSearchPositionIndividual9 />
    </div>
  );
}

function PositionContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Position Container">
      <Frame22 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <PositionContainer />
    </div>
  );
}

function Header14() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Frame21 />
    </div>
  );
}

function JobSearchPositionA9() {
  return (
    <div className="bg-[#fbfcfe] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position A">
      <Header14 />
    </div>
  );
}

function WorkExperience9() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[10px] relative shrink-0 w-[361px]" data-name="Work Experience">
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-b border-solid inset-0 pointer-events-none" />
      <Header13 />
      <JobSearchPositionA9 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[23.49%_33.33%_23.48%_34.26%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.77818 12.7279">
            <path d={svgPaths.p4034e00} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#818898] text-[12px] whitespace-pre-wrap">Work Type Preference</p>
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-center flex flex-wrap gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#eceff3] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px] text-center">Onsite</p>
      </div>
      <div className="bg-[#eceff3] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px] text-center">Remote</p>
      </div>
      <div className="bg-[#eceff3] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0d0d12] text-[12px] text-center">Hybrid</p>
      </div>
    </div>
  );
}

function Info13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Info">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#111] text-[12px] w-full whitespace-pre-wrap">Preferred Work Type</p>
      <Container19 />
    </div>
  );
}

function JobSearchPositionIndividual10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position Individual">
      <Info13 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <JobSearchPositionIndividual10 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Frame24 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <Container18 />
    </div>
  );
}

function Header15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Frame23 />
    </div>
  );
}

function JobSearchPositionA10() {
  return (
    <div className="bg-[#fbfcfe] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position A">
      <Header15 />
    </div>
  );
}

function WorkExperience10() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[10px] relative shrink-0 w-[361px]" data-name="Work Experience">
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-b border-solid inset-0 pointer-events-none" />
      <Container16 />
      <JobSearchPositionA10 />
    </div>
  );
}

function UploadButtonContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Upload Button Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Upload Icon">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2d909600} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f97f3a] text-[12px]">Upload</p>
    </div>
  );
}

function CvHeader() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="CV Header">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#818898] text-[12px] whitespace-pre-wrap">Resume</p>
      <UploadButtonContainer />
    </div>
  );
}

function JobInfoDetails() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Job Info Details">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#818898] text-[12px]">CV</p>
    </div>
  );
}

function JobInfoHeader() {
  return (
    <div className="content-center flex flex-wrap gap-y-[6px] items-center relative shrink-0 w-full" data-name="Job Info Header">
      <div className="bg-[#fee5d8] content-stretch flex items-center p-[10px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#f97f3a] text-[12px] text-center">Current CV - John Doe - Optimized.pdf</p>
      </div>
    </div>
  );
}

function JobInfoDetails1() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[6px] items-start leading-[16px] relative shrink-0 text-[#818898] text-[12px] w-full" data-name="Job Info Details">
      <p className="relative shrink-0">Uploaded: 12 Aug 2025</p>
      <p className="relative shrink-0">Size: 1.8 MB</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <JobInfoDetails />
      <JobInfoHeader />
      <JobInfoDetails1 />
    </div>
  );
}

function JobInfoDetails2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Job Info Details">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#818898] text-[12px]">Cover Letter</p>
    </div>
  );
}

function JobInfoHeader1() {
  return (
    <div className="content-center flex flex-wrap gap-y-[6px] items-center relative shrink-0 w-full" data-name="Job Info Header">
      <div className="bg-[#fee5d8] content-stretch flex items-center p-[10px] relative rounded-[16px] shrink-0" data-name="Badge">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#f97f3a] text-[12px] text-center">Cover Letter_John Doe_PT Bumi Mineral Sejahter.pdf</p>
      </div>
    </div>
  );
}

function JobInfoDetails3() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[6px] items-start leading-[16px] relative shrink-0 text-[#818898] text-[12px] w-full" data-name="Job Info Details">
      <p className="relative shrink-0">Uploaded: 12 Aug 2025</p>
      <p className="relative shrink-0">Size: 1.8 MB</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <JobInfoDetails2 />
      <JobInfoHeader1 />
      <JobInfoDetails3 />
    </div>
  );
}

function Info14() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Info">
      <Frame29 />
      <Frame28 />
    </div>
  );
}

function JobSearchPositionIndividual11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Job Search Position Individual">
      <Info14 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <JobSearchPositionIndividual11 />
    </div>
  );
}

function JobInfoContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Job Info Container">
      <Frame26 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <JobInfoContainer1 />
    </div>
  );
}

function Header16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Frame25 />
    </div>
  );
}

function JobSearchPositionA11() {
  return (
    <div className="bg-[#f6f8fa] relative rounded-[12px] shrink-0 w-full" data-name="Job Search Position A">
      <div className="content-stretch flex flex-col items-start p-[10px] relative w-full">
        <Header16 />
      </div>
    </div>
  );
}

function WorkExperience11() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[10px] relative shrink-0 w-[361px]" data-name="Work Experience">
      <CvHeader />
      <JobSearchPositionA11 />
    </div>
  );
}

function ProfileJobPreference() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Profile & Job Preference">
      <Group7 />
      <WorkExperience3 />
      <WorkExperience4 />
      <WorkExperience5 />
      <WorkExperience6 />
      <WorkExperience7 />
      <WorkExperience8 />
      <WorkExperience9 />
      <WorkExperience10 />
      <WorkExperience11 />
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

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[40px] shrink-0">
      <div className="relative rounded-[40px] shrink-0 size-[32px]" data-name="user-fill">
        <div className="absolute inset-[4.17%_16.67%_8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 28">
            <path d={svgPaths.p7d5ba00} fill="var(--fill-0, #F97F3A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[56px]" data-name="Item">
      <Frame27 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#f97f3a] text-[12px] text-center w-[min-content]">
        <p className="leading-[16px] whitespace-pre-wrap">Profil</p>
      </div>
    </div>
  );
}

export default function ProfleCompleting() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[14px] items-center overflow-clip relative rounded-[24px] size-full" data-name="Profle Completing">
      <div className="h-[50px] relative shrink-0 w-full" data-name="Light Mode">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[24px] not-italic text-[#0d0d12] text-[16px] top-[calc(50%+2.08px)] whitespace-nowrap">
          <p className="leading-[16px]">9:41</p>
        </div>
        <MobileSignal />
        <Wifi />
        <Battery />
      </div>
      <Header />
      <ProfileSocialMedia />
      <ProfileJobPreference />
      <div className="bg-white content-stretch flex gap-[20px] items-center justify-center pb-[40px] pt-[16px] relative shadow-[4px_-4px_4px_0px_rgba(215,215,215,0.25)] shrink-0 w-full" data-name="Bottom Menu">
        <Item />
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
      </div>
    </div>
  );
}