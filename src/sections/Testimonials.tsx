import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from '@/assets/images/grain.jpg';
import { Card } from "@/components/Card";
import { Fragment } from "react";


const testimonials = [
  {
    name: "محسن رضایی",
    position: "مدیر محصول در شرکت نوآوران وب",
    text: "همکاری با شما یکی از بهترین تجربیات من در حوزه طراحی و توسعه وب بود. تسلط شما روی جزئیات و اجرای دقیق باعث شد پروژه‌مون با کیفیت بالا و سر وقت تحویل داده بشه.",
    avatar: memojiAvatar1,

  },
  {
    name: "سارا احمدی",
    position: "مدیر طراحی در استارتاپ گرین‌لیف",
    text: "همکاری با امین فوق‌العاده بود. تخصص او در توسعه فرانت‌اند باعث شد طراحی‌های ما به شکلی بی‌نقص اجرا شوند. وب‌سایتی که تحویل گرفتیم فراتر از انتظارات ما بود.",
    avatar: memojiAvatar2,
  },
  {
    name: "علی اروین",
    position: "توسعه‌دهنده ارشد فرانت‌اند در استودیو چهره",
    text: "دقت و خلاقیت در اجرای رابط کاربری چیزی بود که انتظارش رو داشتم و کاملاً برآورده شد. همکاری با شما تجربه‌ای حرفه‌ای و دلنشین بود.",
    avatar: memojiAvatar3,

  },
  {
    name: "سارا نادری",
    position: "مدیر محصول در گلوبال‌تک",
    text: "الکس واقعاً یک جادوگر فرانت‌اند است! محصول پیچیده ما را به رابط کاربری ساده و جذابی تبدیل کرد. بازخوردهای مثبت مشتریان‌مان از همین حالا شروع شده.",
    avatar: memojiAvatar4,

  },
  {
    name: "مهدی فرهمند",
    position: "مدیر فناوری اطلاعات در مگاکورپ",
    text: "کار الکس روی وب‌سایت ما فوق‌العاده بود. او یک توسعه‌دهنده‌ی بااستعداد و همچنین یک ارتباط‌گیر حرفه‌ای است. همکاری با او را به‌شدت توصیه می‌کنیم.",
    avatar: memojiAvatar5,

  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-12 lg:py-20">
      <div className="container ">
        <SectionHeader
          eyebrow="اعتماد شما"
          title="نظرات مشتریان"
          description="عملکرد من را از زبان مشتریانم بشنوید."
        />
        <div className="mt-16 lg:mt-24 md:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">

          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (


              <Fragment key={index}>
                {testimonials.map(testimonials => (
                  <Card key={testimonials.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-2 transition  duration-300">
                    <div className="flex gap-4 item-center ">
                      <div className="size-14 bg-gray-700 inline-flex item-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonials.avatar}
                          alt={testimonials.name}
                          className="max-h-full" />
                      </div>
                      <div>
                        <div>{testimonials.name}</div>
                        <div className="text-sm text-white/30">{testimonials.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonials.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};
