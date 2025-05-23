// RSSectionSeven.tsx
"use client";

import React from "react";
import DropdownMenu from "@/components/DropdownMenu";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface Props {
    formData: {
        client_of_mdrrs: string | null; // Updated to string
        staff_submit_referral_to_mdrrs: string | null; // Updated to string
        release_info_consent_mdrrs: string | null; // Updated to string
    };
    updateFormData: (name: string, value: any) => void;
    step: string;
}

const MDRS_CLIENT_OPTIONS = [
    { value: "true", label: "Yes" },
    { value: "false", label: "No" },
    { value: null, label: "Not Sure" },
];

const MDRS_REFERRAL_OPTIONS = [
    { value: "true", label: "Yes" },
    { value: "false", label: "No" },
];

const MDRS_PERMISSION_OPTIONS = [
    { value: "true", label: "Yes" },
    { value: "false", label: "No" },
];

const RSSectionSeven = ({ formData, updateFormData, step }: Props) => {
    const handleMDRSClientSelect = (value: string | null) => {
        updateFormData("client_of_mdrrs", value);
        // Optionally reset downstream answers
        if (value === "true") {
            updateFormData("staff_submit_referral_to_mdrrs", null);
            updateFormData("release_info_consent_mdrrs", null);
        }
    };

    const handleMDRSReferralSelect = (value: string) => {
        updateFormData("staff_submit_referral_to_mdrrs", value);
        // Optionally reset downstream answer
        if (value === "false") {
            updateFormData("release_info_consent_mdrrs", null);
        }
    };

    const handleMDRSPermissionSelect = (value: string) => {
        updateFormData("release_info_consent_mdrrs", value);
    };

    const getMDRSClientTitle = () => {
        const found = MDRS_CLIENT_OPTIONS.find((o) => o.value === formData.client_of_mdrrs);
        return found ? found.label : "Select an option";
    };

    const getMDRSReferralTitle = () => {
        const found = MDRS_REFERRAL_OPTIONS.find((o) => o.value === formData.staff_submit_referral_to_mdrrs);
        return found ? found.label : "Select an option";
    };

    const getMDRSPermissionTitle = () => {
        const found = MDRS_PERMISSION_OPTIONS.find((o) => o.value === formData.release_info_consent_mdrrs);
        return found ? found.label : "Select an option";
    };

    return (
        <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
            <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
                Section 7: Thank you for reviewing the eligibility criteria for the Career Horizons Project.
            </h2>
            <form className="my-8">
                <p className="mb-4">
                    Although you are <b>not eligible to receive services through the Career Horizons Project</b>, we wanted you to be aware that the Mississippi Department of Rehabilitation Services (MDRS) may be a helpful resource as they are a state agency that provides resources to help Mississippians with disabilities find new careers, live more independently, overcome obstacles, and face new challenges.
                </p>
                {/* 1st question */}
                <LabelInputContainer className="mb-4">
                    <Label className="text-black">Are you currently a client of MDRS?</Label>
                    <DropdownMenu title={getMDRSClientTitle()}>
                        {(close) =>
                            MDRS_CLIENT_OPTIONS.map((option) => (
                                <button
                                    key={option.value?.toString() || option.label}
                                    type="button"
                                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                                        formData.client_of_mdrrs === option.value ? "bg-gray-100 font-semibold" : ""
                                    }`}
                                    onClick={() => {
                                        handleMDRSClientSelect(option.value);
                                        close();
                                    }}
                                >
                                    {option.label}
                                </button>
                            ))
                        }
                    </DropdownMenu>
                </LabelInputContainer>
                {/* 2nd question */}
                {formData.client_of_mdrrs !== "true" && formData.client_of_mdrrs !== null && (
                    <LabelInputContainer className="mb-4">
                        <Label>Would you like a CHP staff member to submit a referral for you to MDRS?</Label>
                        <DropdownMenu title={getMDRSReferralTitle()}>
                            {(close) =>
                                MDRS_REFERRAL_OPTIONS.map((option) => (
                                    <button
                                        key={option.value.toString()}
                                        type="button"
                                        className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                                            formData.staff_submit_referral_to_mdrrs === option.value ? "bg-gray-100 font-semibold" : ""
                                        }`}
                                        onClick={() => {
                                            handleMDRSReferralSelect(option.value);
                                            close();
                                        }}
                                    >
                                        {option.label}
                                    </button>
                                ))
                            }
                        </DropdownMenu>
                    </LabelInputContainer>
                )}
                {/* 3rd question */}
                {formData.client_of_mdrrs !== "true" && formData.client_of_mdrrs !== null && formData.staff_submit_referral_to_mdrrs === "true" && (
                    <LabelInputContainer className="mb-4">
                        <Label>
                            You responded "yes" indicating that you would like a CHP staff member to refer you to MDRS. In order to submit a referral we will have to share your contact information with MDRS. Do you give CHP staff your permission to share your name and contact information (phone number and email address) with an MDRS representative?
                        </Label>
                        <DropdownMenu title={getMDRSPermissionTitle()}>
                            {(close) =>
                                MDRS_PERMISSION_OPTIONS.map((option) => (
                                    <button
                                        key={option.value.toString()}
                                        type="button"
                                        className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                                            formData.release_info_consent_mdrrs === option.value ? "bg-gray-100 font-semibold" : ""
                                        }`}
                                        onClick={() => {
                                            handleMDRSPermissionSelect(option.value);
                                            close();
                                        }}
                                    >
                                        {option.label}
                                    </button>
                                ))
                            }
                        </DropdownMenu>
                    </LabelInputContainer>
                )}
            </form>
        </div>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default RSSectionSeven;