"use client";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import type { JSX } from "react";
import SectionThree from '@/components/forms/IntakeForm/SectionThree';
import SectionFour from '@/components/forms/IntakeForm/SectionFour';
import SectionFive from '@/components/forms/IntakeForm/SectionFive';
import SectionSix from '@/components/forms/IntakeForm/SectionSix';
import SectionSeven from '@/components/forms/IntakeForm/SectionSeven';
import SectionEight from '@/components/forms/IntakeForm/SectionEight';
import SectionNine from '@/components/forms/IntakeForm/SectionNine';
import SectionTen from '@/components/forms/IntakeForm/SectionTen';
import SectionEleven from '@/components/forms/IntakeForm/SectionEleven';
import SectionTwelve from '@/components/forms/IntakeForm/SectionTwelve';
import SectionThirteen from '@/components/forms/IntakeForm/SectionThirteen';
import SectionFourteen from '@/components/forms/IntakeForm/SectionFourteen';
import { SectionOne } from "@/components/forms/IntakeForm/SectionOne";
import { SectionTwo } from "@/components/forms/IntakeForm/SectionTwo";
import Mainnavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sectionMap: Record<string, (props: { step: string; goToStep: (step: string) => void }) => JSX.Element> = {
  '1': (props) => <SectionOne {...props} />,
  '2': (props) => <SectionTwo {...props} />,
  '3': (props) => <SectionThree {...props} />,
  '4': (props) => <SectionFour {...props} />,
  '5': (props) => <SectionFive {...props} />,
  '6': (props) => <SectionSix {...props} />,
  '7': (props) => <SectionSeven {...props} />,
  '8': (props) => <SectionEight {...props} />,
  '9': (props) => <SectionNine {...props} />,
  '10': (props) => <SectionTen {...props} />,
  '11': (props) => <SectionEleven {...props} />,
  '12': (props) => <SectionTwelve {...props} />,
  '13': (props) => <SectionThirteen {...props} />,
  '14': (props) => <SectionFourteen {...props} />,
};

export default function StepFormClient({ step }: { step: string }) {
  const router = useRouter();

  const goToStep = useCallback((targetStep: string) => {
    router.push(`/forms/${targetStep}/IntakeForm`);
  }, [router]);

  const Section = sectionMap[step];

  const nextStep = (parseInt(step) + 1).toString();
  const prevStep = (parseInt(step) - 1).toString();

  return (
    <>
    <Mainnavbar />
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      {Section ? <Section step={step} goToStep={goToStep} /> : <p className="text-red-500">Invalid form step: {step}</p>}
      <div className="flex gap-4 items-center justify-center mx-auto max-w-xl">
        {parseInt(step) > 1 && (
          <button
            className="bg-[#5d1725] relative group/btn text-white w-full rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="button"
            onClick={() => goToStep(prevStep)}
          >
            &larr; Previous
          </button>
        )}
        {parseInt(step) < Object.keys(sectionMap).length ? (
          <button
            className="bg-[#5d1725] relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="button"
            onClick={() => goToStep(nextStep)}
          >
            {parseInt(nextStep) === Object.keys(sectionMap).length ? "Finish" : "Next"} &rarr;
          </button>
        ) : (
          <button
            className="bg-[#5d1725] relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="button"
            onClick={() => {
              alert("Form completed!");
            }}
          >
            Finish
          </button>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
}