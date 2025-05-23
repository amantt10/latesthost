// StepFormClient.tsx
"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";
import type { JSX } from "react";
import RSSectionOne from '@/components/forms/ReferralSurvey/RSSectionOne';
import RSSectionTwo from '@/components/forms/ReferralSurvey/RSSectionTwo';
import RSSectionThree from '@/components/forms/ReferralSurvey/RSSectionThree';
import RSSectionFour from '@/components/forms/ReferralSurvey/RSSectionFour';
import RSSectionFive from '@/components/forms/ReferralSurvey/RSSectionFive';
import RSSectionSix from '@/components/forms/ReferralSurvey/RSSectionSix';
import RSSectionSeven from '@/components/forms/ReferralSurvey/RSSectionSeven';
import Mainnavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ReferralSurveyFormData {
    long_covid_syndrome: string | null;
    is_ms_resident: string | null;
    is_age_16_to_70: string | null;
    not_involving_other_off: string | null;
    client_of_mdrrs: string | null;
    staff_submit_referral_to_mdrrs: string | null;
    release_info_consent_mdrrs: string | null;
    desire_to_continue_work: string | null;
    wants_to_work_if_unemployed: string | null;
    first_name: string | null;
    last_name: string | null;
    phone_number: string | null;
    email: string | null;
    county: string | null;
    zip: string | null;
    employedInterest: string | null;
    unemployedInterest: string | null;
}

const defaultFormData: ReferralSurveyFormData = {
    long_covid_syndrome: null,
    is_ms_resident: null,
    is_age_16_to_70: null,
    not_involving_other_off: null,
    client_of_mdrrs: null,
    staff_submit_referral_to_mdrrs: null,
    release_info_consent_mdrrs: null,
    desire_to_continue_work: null,
    wants_to_work_if_unemployed: null,
    first_name: null,
    last_name: null,
    phone_number: null,
    email: null,
    county: null,
    zip: null,
    employedInterest: null,
    unemployedInterest: null,
};

const sectionMap: Record<string, (props: any) => JSX.Element> = {
    '1': (props) => <RSSectionOne {...props} />,
    '2': (props) => <RSSectionTwo {...props} />,
    '3': (props) => <RSSectionThree {...props} />,
    '4': (props) => <RSSectionFour {...props} />,
    '5': (props) => <RSSectionFive {...props} />,
    '6': (props) => <RSSectionSix {...props} />,
    '7': (props) => <RSSectionSeven {...props} />,
};

export default function StepFormClient() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState<string>('1');
    const [formData, setFormData] = useState<ReferralSurveyFormData>(defaultFormData);

    useEffect(() => {
        const saved = localStorage.getItem("referralSurveyFormData");
        if (saved) {
            setFormData(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("referralSurveyFormData", JSON.stringify(formData));
    }, [formData]);

    const updateFormData = useCallback((name: keyof ReferralSurveyFormData, value: any) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, []);

    const Section = sectionMap[currentStep];

    // CHANGES HERE: Section 6 logic
    const getNextStep = useCallback(() => {
        let next = null;
        if (currentStep === "2") {
            if (formData.long_covid_syndrome === "no") next = "7";
            if (formData.long_covid_syndrome === "yes") next = "3";
        } else if (currentStep === "3") {
            if (formData.is_ms_resident === "no") next = "7";
            if (formData.is_ms_resident === "yes") next = "4";
        } else if (currentStep === "4") {
            if (formData.is_age_16_to_70 === "no") next = "7";
            if (formData.is_age_16_to_70 === "yes") next = "5";
        } else if (currentStep === "5") {
            if (formData.employedInterest === "yes") next = "6";
            if (formData.employedInterest === "no") next = "7";
            if (formData.employedInterest === "not-employed") {
                if (formData.unemployedInterest === "yes") next = "6";
                if (formData.unemployedInterest === "no") next = "7";
            }
        } else if (currentStep === "6") {
            // If answer is "yes", end the form (submit)
            if (formData.not_involving_other_off === "yes") next = null;
            // If answer is "no", go to section 7
            if (formData.not_involving_other_off === "no") next = "7";
        } else {
            next = (parseInt(currentStep) + 1).toString();
        }
        return next;
    }, [currentStep, formData]);

    const nextStep = getNextStep();
    const prevStep = (parseInt(currentStep) - 1).toString();

    const isNextButtonDisabled = useCallback(() => {
        if (currentStep === "2") return !formData.long_covid_syndrome;
        if (currentStep === "3") return !formData.is_ms_resident;
        if (currentStep === "4") return !formData.is_age_16_to_70;
        if (currentStep === "5") return !(formData.employedInterest === 'yes' || formData.employedInterest === 'no' || formData.employedInterest === 'not-employed' || (formData.employedInterest === 'not-employed' && formData.unemployedInterest));
        if (currentStep === "6") return !formData.not_involving_other_off;
        return false;
    }, [currentStep, formData]);

    const handleNext = () => {
        // If section 6 and answer is "yes", submit instead of going to next step
        if (currentStep === "6" && formData.not_involving_other_off === "yes") {
            handleSubmit();
            return;
        }
        if (nextStep) {
            setCurrentStep(nextStep);
        }
    };

    const handlePrevious = () => {
        setCurrentStep(prevStep);
    };

    const handleSubmit = useCallback(async () => {
        try {
            const res = await fetch("/api/referral", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
                localStorage.removeItem("referralSurveyFormData");
                alert("Self-referral submitted successfully!");
                router.push('/success');
            } else {
                alert(data.message || "Server error");
            }
        } catch (err) {
            alert("An error occurred. Please try again.");
        }
    }, [formData, router]);

    return (
        <>
        <Mainnavbar />
        <div className="min-h-screen p-6 max-w-2xl mx-auto">
            {Section ? (
                <Section step={currentStep} formData={formData} updateFormData={updateFormData} />
            ) : (
                <p className="text-red-500">Invalid form step: {currentStep}</p>
            )}
            <div className="flex gap-4 items-center justify-center mx-auto max-w-xl">
                {parseInt(currentStep) > 1 && (
                    <button
                        className="bg-[#5d1725] relative group/btn text-white w-full rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="button"
                        onClick={handlePrevious}
                    >
                        &larr; Previous
                        <BottomGradient />
                    </button>
                )}
                {/* Section 6: If answer is "yes", show Submit instead of Next */}
                {currentStep === "6" && formData.not_involving_other_off === "yes" ? (
                    <button
                        className="bg-[#5d1725] relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="button"
                        disabled={isNextButtonDisabled()}
                        onClick={handleSubmit}
                    >
                        Submit
                        <BottomGradient />
                    </button>
                ) : currentStep === "7" ? (
                    <button
                        className="bg-[#5d1725] relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Submit
                        <BottomGradient />
                    </button>
                ) : parseInt(currentStep) < Object.keys(sectionMap).length ? (
                    <button
                        className="bg-[#5d1725] relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="button"
                        disabled={isNextButtonDisabled()}
                        onClick={handleNext}
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
                        Submit
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