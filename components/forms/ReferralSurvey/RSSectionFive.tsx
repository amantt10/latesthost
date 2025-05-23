// RSSectionFive.tsx
"use client";

import React from "react";
import DropdownMenu from "@/components/DropdownMenu";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface Props {
  formData: {
    employedInterest: string | null;
    unemployedInterest: string | null;
  };
  updateFormData: (name: string, value: any) => void;
  step: string;
}

const EMPLOYED_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "not-employed", label: "I'm currently not employed" },
];

const UNEMPLOYED_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const RSSectionFive = ({ formData, updateFormData, step }: Props) => {
  const getEmployedInterestTitle = () => {
    const found = EMPLOYED_OPTIONS.find((o) => o.value === formData.employedInterest);
    return found ? found.label : "Select an option";
  };

  const getUnemployedInterestTitle = () => {
    const found = UNEMPLOYED_OPTIONS.find((o) => o.value === formData.unemployedInterest);
    return found ? found.label : "Select an option";
  };

  const handleEmployedInterestSelect = (value: string) => {
    updateFormData("employedInterest", value);
    // Reset unemployed interest if switching away from "not-employed"
    if (value !== "not-employed") {
      updateFormData("unemployedInterest", null);
    }
  };

  const handleUnemployedInterestSelect = (value: string) => {
    updateFormData("unemployedInterest", value);
  };

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 5 - Employment Status
      </h2>
      <form className="my-8">
        <LabelInputContainer className="mb-4">
          <Label className="text-black">
            If you are currently employed, are you interested in continuing to work?
          </Label>
          <DropdownMenu title={getEmployedInterestTitle()}>
            {(close) =>
              EMPLOYED_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    formData.employedInterest === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    handleEmployedInterestSelect(option.value);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </LabelInputContainer>
        {formData.employedInterest === "not-employed" && (
          <LabelInputContainer className="mb-4">
            <Label>
              If you are currently unemployed, are you interested in working?
            </Label>
            <DropdownMenu title={getUnemployedInterestTitle()}>
              {(close) =>
                UNEMPLOYED_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      formData.unemployedInterest === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      handleUnemployedInterestSelect(option.value);
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

export default RSSectionFive;