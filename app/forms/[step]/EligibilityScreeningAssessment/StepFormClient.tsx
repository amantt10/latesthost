"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useState, useEffect } from "react";
import type { JSX } from "react";
import ESASectionOne from '@/components/forms/EligibilityScreeningAssessment/ESASectionOne';
import ESASectionTwo from '@/components/forms/EligibilityScreeningAssessment/ESASectionTwo';
import ESASectionThree from '@/components/forms/EligibilityScreeningAssessment/ESASectionThree';
import ESASectionFour from '@/components/forms/EligibilityScreeningAssessment/ESASectionFour';
import ESASectionFive from '@/components/forms/EligibilityScreeningAssessment/ESASectionFive';
import ESASectionSix from '@/components/forms/EligibilityScreeningAssessment/ESASectionSix';
import ESASectionSeven from '@/components/forms/EligibilityScreeningAssessment/ESASectionSeven';
import ESASectionEight from '@/components/forms/EligibilityScreeningAssessment/ESASectionEight';
import ESASectionNine from '@/components/forms/EligibilityScreeningAssessment/ESASectionNine';
import Footer from "@/components/Footer";
import Mainnavbar from "@/components/Navbar";

// All fields from all ESA sections, matching backend
const defaultFormData = {
  // Section 1
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  county: "",
  zip: "",
  // Section 2
  referrer_first_name: "",
  referrer_last_name: "",
  referrer_phone: "",
  referrer_email: "",
  referral_source: "",
  referral_business_name: "",
  // Section 3
  contact_method: "",
  contact_method_other: "",
  learned_about: "",
  learned_about_other: "",
  // Section 4
  long_covid_syndrome: "",
  is_ms_resident: "",
  is_age_16_to_70: "",
  not_involving_other_off: "",
  // Section 5
  client_of_mdrrs: "",
  staff_submit_referral_to_mdrrs: "",
  release_info_consent_mdrrs: "",
  desire_to_continue_work: "",
  wants_to_work_if_unemployed: "",
  // Section 6+
  // Add any additional fields as needed
  statement_of_intent: "",
  // Section 7
  roi_status: "",
  // Section 8
  doc_status: "",
  doc_status_other: "",
  // Section 9
  eligibility_criteria: "",
  region: "",
  caseload: "",
  mdrs_client: "",
  mdrs_referral: "",
  mdrs_permission: "",
};

const sectionMap: Record<
  string,
  (props: {
    step: string;
    goToStep: (step: string) => void;
    formData: typeof defaultFormData;
    setFormData: React.Dispatch<React.SetStateAction<typeof defaultFormData>>;
  }) => JSX.Element
> = {
  '1': (props) => <ESASectionOne {...props} />,
  '2': (props) => <ESASectionTwo {...props} />,
  '3': (props) => <ESASectionThree {...props} />,
  '4': (props) => <ESASectionFour {...props} />,
  '5': (props) => <ESASectionFive {...props} />,
  '6': (props) => <ESASectionSix {...props} />,
  '7': (props) => <ESASectionSeven {...props} />,
  '8': (props) => <ESASectionEight {...props} />,
  '9': (props) => <ESASectionNine {...props} />,
};

export default function StepFormClient({ step }: { step: string }) {
  const router = useRouter();

  // Load/save form data from localStorage
  const [formData, setFormData] = useState<typeof defaultFormData>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("eligibilityFormData");
      return saved ? JSON.parse(saved) : defaultFormData;
    }
    return defaultFormData;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("eligibilityFormData", JSON.stringify(formData));
    }
  }, [formData]);

  const goToStep = useCallback((targetStep: string) => {
    router.push(`/forms/${targetStep}/EligibilityScreeningAssessment`);
  }, [router]);

  const Section = sectionMap[step];
  const nextStep = (parseInt(step) + 1).toString();
  const prevStep = (parseInt(step) - 1).toString();

  // Submit handler for the last step
  const handleSubmit = async () => {
    try {
      // Optionally, clean up or transform data here if needed
      const res = await fetch("/api/eligibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.removeItem("eligibilityFormData");
        alert("Eligibility form submitted successfully!");
        router.push("/forms/thank-you");
      } else {
        alert(data.message || "Submission failed.");
      }
    } catch (err) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
    <Mainnavbar/>
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      {Section ? (
        <Section
          step={step}
          goToStep={goToStep}
          formData={formData}
          setFormData={setFormData}
        />
      ) : (
        <p className="text-red-500">Invalid form step: {step}</p>
      )}
      <div className="flex gap-4 items-center justify-center mx-auto max-w-xl">
        {parseInt(step) > 1 && (
          <button
            className="bg-[#5d1725] relative group/btn text-white w-full rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="button"
            onClick={() => goToStep(prevStep)}
          >
            &larr; Previous
            <BottomGradient />
          </button>
        )}
        {parseInt(step) < Object.keys(sectionMap).length ? (
          <button
            className="bg-[#5d1725] relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="button"
            onClick={() => goToStep(nextStep)}
          >
            Next &rarr;
            <BottomGradient />
          </button>
        ) : (
          <button
            className="bg-[#5d1725] relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="button"
            onClick={handleSubmit}
          >
            Finish
            <BottomGradient />
          </button>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
}

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);