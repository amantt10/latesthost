"use client";

import React from "react";
import DropdownMenu from "@/components/DropdownMenu";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface Props {
  formData: {
    long_covid_syndrome: string | null;
  };
  updateFormData: (name: string, value: any) => void;
  step: string;
}

const YES_NO_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const RSSectionTwo = ({ formData, updateFormData, step }: Props) => {
  const handleSelect = (value: string) => {
    updateFormData("long_covid_syndrome", value);
  };

  const getDropdownTitle = () => {
    const found = YES_NO_OPTIONS.find((o) => o.value === formData.long_covid_syndrome);
    return found ? found.label : "Select an option";
  };

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 2 - Long COVID Syndrome Disability Status
      </h2>
      <form className="my-8">
        <LabelInputContainer className="mb-4">
          <Label className="text-black">
            Do you have a disability accompanied by or resulting from Long COVID Syndrome?
          </Label>
          <DropdownMenu title={getDropdownTitle()}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    formData.long_covid_syndrome === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    handleSelect(option.value);
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

export default RSSectionTwo;