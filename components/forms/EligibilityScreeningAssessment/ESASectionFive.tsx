"use client";
import React from "react";
import DropdownMenu from "@/components/DropdownMenu";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const STATEMENT_OF_INTENT_OPTIONS = [
  {
    value: "yes-signed",
    label:
      "Yes, the Statement of Intent was reviewed with individual and the individual signed the document indicating they wanted to move forward with the CHP eligibility screening and assessment process to verify their eligibility to be enrolled in CHP",
  },
  {
    value: "yes-not-moving-forward",
    label:
      "Yes, the Statement of Intent was reviewed with individual and the individual indicated afterward that they did not want to move forward with the CHP eligibility screening and assessment process to verify their eligibility to be enrolled in CHP",
  },
];

const ESASectionFive = ({
  step,
  formData,
  setFormData,
}: {
  step: string;
  formData: any;
  setFormData: (fn: (prev: any) => any) => void;
}) => {
  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 5 - Statement of Informed Consent
      </h2>
      <form className="my-8">
        <LabelInputContainer className="mb-4">
          <Label>
            CHP staff was able to review the CHP Statement of Intent with the individual.
          </Label>
          <DropdownMenu
            title={
              STATEMENT_OF_INTENT_OPTIONS.find(opt => opt.value === formData.statement_of_intent)?.label ||
              "Select an option"
            }
          >
            {(close) =>
              STATEMENT_OF_INTENT_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    formData.statement_of_intent === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setFormData((prev: any) => ({
                      ...prev,
                      statement_of_intent: option.value,
                    }));
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </LabelInputContainer>
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

export default ESASectionFive;