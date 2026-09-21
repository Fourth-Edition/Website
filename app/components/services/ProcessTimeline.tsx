"use client";

import { geistMono } from "../../fonts";
import type { ProcessStep } from "../../data/services";
import { useLanguage } from "../../context/LanguageContext";

const arSteps: ProcessStep[] = [
  {
    step: "01",
    title: "التحديد والنطاق (Scope)",
    description:
      "جلسة عمل تفاعلية لتحديد مشكلتك، القيود، وما الذي يعني النجاح بالنسبة لمشروعك. تخرج منها بنطاق مكتوب بوضوح وليس مجرد عروض مبيعات.",
  },
  {
    step: "02",
    title: "التصميم الهندسي (Design)",
    description:
      "تخطيط المسارات والمخططات السلكية، ثم الشاشات عالية الدقة. نراجع التصميم مباشرة في المتصفح وعلى أجهزة حقيقية.",
  },
  {
    step: "03",
    title: "التطوير والبناء (Build)",
    description:
      "دورات تطوير كل أسبوعين مع رابط تجريبي مباشر من اليوم الأول. تشاهد التقدم المستمر دون انقطاع.",
  },
  {
    step: "04",
    title: "الإطلاق والنشر (Ship)",
    description:
      "النشر والمراقبة وتسليم مكتمل يمكن لفريقك العمل عليه مباشرة مع وثائق تقنية شاملة.",
  },
  {
    step: "05",
    title: "التطوير المستمر (Iterate)",
    description:
      "بعد الإطلاق نتابع الأرقام والبيانات معك لنحسن ونطور ما تظهره نتائج الاستخدام الحقيقي.",
  },
];

export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const { isAr } = useLanguage();
  const displaySteps = isAr ? arSteps : steps;

  return (
    <ol
      className={`relative flex flex-col gap-10 ${
        isAr
          ? "border-r border-brand-slate/30 pr-8"
          : "border-l border-brand-slate/30 pl-8"
      }`}
    >
      {displaySteps.map((step) => (
        <li key={step.step} className="relative flex flex-col gap-2">
          <span
            className={`absolute ${
              isAr ? "-right-[2.05rem]" : "-left-[2.05rem]"
            } top-3 h-2 w-2 rounded-full bg-brand-light ring-4 ring-white/70`}
            aria-hidden
          />
          <div className="flex items-baseline gap-4">
            <span
              className={`${geistMono.className} text-brand-navy text-base font-semibold tracking-widest`}
            >
              {step.step}
            </span>
            <h3 className={`${isAr ? "font-bold text-xl" : "font-sans text-xl"} text-brand-black tracking-tight`}>
              {step.title}
            </h3>
          </div>
          <p className="font-sans text-brand-ink/80 text-base leading-relaxed max-w-2xl text-pretty">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
