"use client";

import React from "react";
import DropdownMenu from "@/components/DropdownMenu";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const ROI_OPTIONS = [
  {
    value: "yes-completed",
    label: "Yes, the ROI document was completed & signed during the meeting",
  },
  {
    value: "no-not-completed",
    label: "No, the ROI document was not able to be completed & signed during this meeting",
  },
  {
    value: "no-not-wanted",
    label: "No, the individual did not want to complete and sign the ROI document",
  },
];

const ESASectionSix = ({
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
        Section 6 - Release of Information
      </h2>
      <form className="my-8">
        <LabelInputContainer className="mb-4">
          <Label>
            CHP staff was able to complete the Release of Information (ROI) document with the individual.
          </Label>
          <DropdownMenu
            title={
              ROI_OPTIONS.find(opt => opt.value === formData.roi_status)?.label ||
              "Select an option"
            }
          >
            {(close) =>
              ROI_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    formData.roi_status === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setFormData((prev: any) => ({
                      ...prev,
                      roi_status: option.value,
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

export default ESASectionSix;