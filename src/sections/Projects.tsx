import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "شرکت اَکمی",
    year: "2022",
    title: "رابط تیره برای پلتفرم ابری",
    results: [
      { title: "افزایش ۴۰ درصدی رضایت کاربران" },
      { title: "بهبود ۵۰ درصدی در سرعت سایت" },
      { title: "رشد ۳۵ درصدی بازدید از موبایل" },
    ],
    link: "",
    image: darkSaasLandingPage,
  },
  {
    company: "نوآوران",
    year: "2021",
    title: "صفحه فرود سبک و مدرن ",
    results: [
      { title: "افزایش ۲۰ درصدی فروش" },
      { title: "جذب ۳۵ درصدی مشتری بیشتر" },
      { title: "رشد ۱۵ درصدی در شناخت برند" },
    ],
    link: "",
    image: lightSaasLandingPage,
  },
  {
    company: "کوانتوم داینامیکس",
    year: "2023",
    title: "صفحه فرود استارتاپ هوش مصنوعی",
    results: [
      { title: "بهبود تجربه کاربری ۴۰ درصدی" },
      { title: "بهبود سرعت سایت ۵۰ درصدی" },
      { title: "افزایش ترافیک موبایل ۳۵ درصدی" },
    ],
    link: "",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="حرفه ای و دوستانه"
          title="پروژه‌های منتخب"
          description="از ایده تا تجربه‌ای جذاب" />

        <div className="flex md:mt-20 flex-col mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-teal-300 to-sky-300 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">{project.results.map((result) => (
                    <li className="flex gap-2 text-sm md:text-base text-white/60">
                      <CheckCircleIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}</ul>
                  <a href={project.link}>
                    <button className=
                      "bg-white text-gray-900 h-12 w-full md:w-auto px-6 rounded-xl inline-flex items-center justify-center gap-2 mt-8" >
                      <span>مشاهده</span>
                      <ArrowUpRightIcon className='size-3' />

                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title}
                    className="mt-8 -mb-4 mx-auto md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
