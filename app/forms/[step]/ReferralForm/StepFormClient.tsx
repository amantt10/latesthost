"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import RFSectionOne from '@/components/forms/ReferralForm/RFSectionOne';
import RFSectionTwo from '@/components/forms/ReferralForm/RFSectionTwo';
import RFSectionThree from '@/components/forms/ReferralForm/RFSectionThree';
import RFSectionFour from '@/components/forms/ReferralForm/RFSectionFour';
import Mainnavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sectionMap: Record<string, (props: any) => React.ReactElement> = {
  '1': (props) => <RFSectionOne {...props} />,
  '2': (props) => <RFSectionTwo {...props} />,
  '3': (props) => <RFSectionThree {...props} />,
  '4': (props) => <RFSectionFour {...props} />,
};

const defaultFormData = {
  eligibility_criteria: "",
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  county: "",
  zip: "",
  referrer_first_name: "",
  referrer_last_name: "",
  referrer_phone: "",
  referrer_email: "",
  referral_source: "",
  referral_business_name: "",
  client_of_mdrrs: "",
  staff_submit_referral_to_mdrrs: "",
  release_info_consent_mdrrs: ""
};

export default function StepFormClient({ step }: { step: string }) {
  const router = useRouter();
  const [moveForwardAnswer, setMoveForwardAnswer] = useState<string | null>(null);

  // 1. Initialize formData from localStorage if available
  const [formData, setFormData] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("referralFormData");
      return saved ? JSON.parse(saved) : defaultFormData;
    }
    return defaultFormData;
  });

  // 2. Save formData to localStorage on every change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("referralFormData", JSON.stringify(formData));
    }
  }, [formData]);

  useEffect(() => {
    if (formData.eligibility_criteria) {
      setMoveForwardAnswer(formData.eligibility_criteria.toLowerCase());
    }
  }, [formData.eligibility_criteria]);

  const Section = sectionMap[step];

  const getNextStep = () => {
    if (step === "1") {
      if (moveForwardAnswer === "no") return "4";
      if (moveForwardAnswer === "yes") return "2";
      return null;
    }
    return (parseInt(step) + 1).toString();
  };

  const nextStep = getNextStep();
  const prevStep = (parseInt(step) - 1).toString();

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.removeItem("referralFormData");
        alert("Referral submitted successfully!");
      } else {
        alert(data.message || "Submission failed.");
      }
    } catch (err) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
    <Mainnavbar />
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      {Section ? (
        <Section
          step={step}
          formData={formData}
          setFormData={setFormData}
          onMoveForwardChange={setMoveForwardAnswer}
          moveForwardValue={moveForwardAnswer || ""}
        />
      ) : (
        <p className="text-red-500">Invalid form step: {step}</p>
      )}
      <div className="flex gap-4 items-center justify-center mx-auto max-w-xl">
        {parseInt(step) > 1 && (
          <button
            className="bg-[#5d1725] relative group/btn text-white w-full rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="button"
            onClick={() => router.push(`/forms/${prevStep}/ReferralForm`)}
          >
            &larr; Previous
            <BottomGradient />
          </button>
        )}
        {parseInt(step) < Object.keys(sectionMap).length ? (
          <button
            className="bg-[#5d1725] relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="button"
            disabled={step === "1" && !moveForwardAnswer}
            onClick={() => {
              if (nextStep) router.push(`/forms/${nextStep}/ReferralForm`);
            }}
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