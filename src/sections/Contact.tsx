import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from '@/components/SectionHeader';

export const ContactSection = () => {
  return (
    <div id="contact" className='py-16 pt-12 lg:py-24 lg:pt-20 lg:min-h-[50vh] md:min-h-[40vh]'>
      <div className="container gap-1 py-2">
        <SectionHeader
          eyebrow="سریع و مدرن"
          title="زیبا و ساده"
          description="از ایده تا تجربه‌ای جذاب"
        />
      </div>
      <div className='container py-10'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8  px-10 rounded-3xl text-center md:text-left lg:text relative overflow-hidden z-0'>
          <div className='absolute inset-0 opacity-5 -z-10' style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
          ></div>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
            <div>
              <h2 className='text-xl md:text-3xl'>
                بیا یه چیز شگفت انگیز خلق کنیم </h2>
              <p className='text-sm md:text-base mt-2'>
                برای پروژه بعدی آماده‌ام. فقط کافیه یه پیام بدی
              </p>
            </div>
            <div className=" lg:-translate-x-40">
              <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900'>
                <span className='font-semibold'>تماس با من</span>
                <ArrowUpRightIcon className='size-4' />
              </button>

            </div>
          </div>

        </div>
      </div><br /><br />

    </div >

  );
};
