"use client";

import React, { useState, useEffect } from "react";
import DropdownMenu from "@/components/DropdownMenu";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const YES_NO_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

type RFSectionOneProps = {
  step: string;
  onMoveForwardChange?: (value: string) => void;
  moveForwardValue?: string;
  formData: any;
  setFormData: (data: any) => void;
};

const RFSectionOne: React.FC<RFSectionOneProps> = ({
  step,
  onMoveForwardChange,
  moveForwardValue,
  formData,
  setFormData,
}) => {
  const [moveForward, setMoveForward] = useState(moveForwardValue || "");
  const [moveForwardTitle, setMoveForwardTitle] = useState(
    moveForwardValue
      ? YES_NO_OPTIONS.find((o) => o.value === moveForwardValue)?.label || "Select an option"
      : "Select an option"
  );

  useEffect(() => {
    if (moveForwardValue !== undefined && moveForwardValue !== moveForward) {
      setMoveForward(moveForwardValue);
      setMoveForwardTitle(
        YES_NO_OPTIONS.find((o) => o.value === moveForwardValue)?.label || "Select an option"
      );
    }
  }, [moveForwardValue]);

  const handleSelect = (value: string, label: string, close: () => void) => {
    setMoveForward(value);
    setMoveForwardTitle(label);
    if (onMoveForwardChange) onMoveForwardChange(value);
    setFormData({
      ...formData,
      eligibility_criteria: label, // Store as "Yes"/"No" for backend
    });
    close();
  };

  return (
    <div className="mt-10 max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 1 - Determining Career Horizons Project Eligibility
      </h2>
      <form className="my-8" onSubmit={e => e.preventDefault()}>
        <LabelInputContainer className="mb-4 text-black">
          <Label className="text-black">
            I have read the information provided above and would like to move forward with referring a person to the Career Horizons Project for competitive integrated employment (CIE) placement or retention services.
          </Label>
          <DropdownMenu title={moveForwardTitle}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    moveForward === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => handleSelect(option.value, option.label, close)}
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
}) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);

export default RFSectionOne;