import amin from '@/assets/images/amin.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbits } from '@/components/HeroOrbits';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { SiReact, SiNextdotjs, SiTailwindcss, SiWoocommerce } from 'react-icons/si';
import { FaWordpress } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <div id="home" className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}>
        </div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>

        <HeroOrbits size={430} rotation={-106} shouldOrbit orbitDuration="30s" shouldSpin spinDuration='4s'>
          <SparkleIcon className='size-8 text-emerald-300/30' />
        </HeroOrbits>
        <HeroOrbits size={440} rotation={-10} shouldOrbit orbitDuration="32s" shouldSpin spinDuration='3s'>
          <SparkleIcon className='size-5 text-emerald-300/20' />
        </HeroOrbits>
        <HeroOrbits size={520} rotation={-130} shouldOrbit orbitDuration="34s" shouldSpin spinDuration='4s'>
          <div className="size-2 rounded-full text-emerald-300/10" />
        </HeroOrbits>
        <HeroOrbits
          size={530}
          rotation={89}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s">
          <SparkleIcon className='size-10 text-emerald-300/40' />
        </HeroOrbits>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbits size={550} rotation={-71} shouldOrbit orbitDuration="38s" shouldSpin spinDuration='6s'>
          <StarIcon className='size-12 text-emerald-300/80' />
        </HeroOrbits>
        <HeroOrbits size={590}
          rotation={9}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration='6s'>
          <StarIcon className='size-8 text-sky-300' />
        </HeroOrbits>
        <HeroOrbits size={650} rotation={-94} shouldOrbit orbitDuration="42s" shouldSpin spinDuration='4s'>
          <div className="size-2 rounded-full text-emerald-300/10" />
        </HeroOrbits>
        <HeroOrbits size={710} rotation={55} shouldOrbit orbitDuration="44s" shouldSpin spinDuration='5s'>
          <SparkleIcon className='size-11 text-sky-300/80' />
        </HeroOrbits>
        <HeroOrbits size={720} rotation={-7} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full text-emerald/5" />
        </HeroOrbits>
        <HeroOrbits size={800} rotation={197} shouldOrbit orbitDuration="48s" shouldSpin spinDuration='6s'>
          <StarIcon className='size-28 text-emerald-300' />
        </HeroOrbits>
      </div>
      <div className="container">
        <div className='flex flex-col items-center gap-0.3 '>
          <Image src={amin} className='size-[100px]' alt="امین" />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">

            <div className='text-sm font-xs'>آماده برای پروژه جدید</div>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>

            </div>
          </div>
        </div>
        <div className='max-w-lg mx-auto relative z-10'>
          <h1 className='text-3xl  mt-8 md:text-4xl lg:text-5xl whitespace-nowrap  text-center '>
            طراح و توسعه دهنده ی وب
          </h1>

          <p className='mt-8 text-center  text-white/60 md:text-lg leading-loose '>
            متخصص توسعه‌ی فرانت‌اند با تمرکز بر تجربه کاربری و تکنولوژی‌های مدرن
          </p>



        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-12 gap-4 relative z-10'>
          <button className='inline-flex items-center gap-2  border border-white/15 px-6 h-12 rounded-xl text-white transition duration-300 hover:bg-white/10 hover:border-white/30'>
            <span >کارهای من</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition duration-300 hover:bg-gray-100'>

            <span className='font-semibold'>تماس با من</span>
          </button>
        </div>
      </div>
    </div>
  );
};