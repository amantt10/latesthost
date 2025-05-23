"use client"

import React from "react";
import DropdownMenu from "@/components/DropdownMenu";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const ELIGIBILITY_OPTIONS = [
  { value: "eligible", label: "Individual is eligible to participate" },
  { value: "not-eligible", label: "Individual is NOT eligible to participate" },
];

const REGION_OPTIONS = [
  { value: "region-1", label: "Region #1: Northern Region (Northwest and Northeast)" },
  { value: "region-2", label: "Region #2: Central-Northern Region" },
  { value: "region-3", label: "Region #3: Delta Region" },
  { value: "region-4", label: "Region #4: Central Region" },
  { value: "region-5", label: "Region #5: Southwest Region" },
  { value: "region-6", label: "Region #6: Coastal & Southern Region" },
];

const CASELOAD_OPTIONS = [
  { value: "caseload", label: "Caseload" },
  { value: "waitlist", label: "Waitlist" },
];

const ESASectionEight = ({
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
        Section 8 - CHP Eligibility
      </h2>
      <form className="my-8">
        <LabelInputContainer className="mb-4">
          <Label>Is the individual eligible to participate in the Career Horizons Project?</Label>
          <DropdownMenu
            title={
              ELIGIBILITY_OPTIONS.find(opt => opt.value === formData.eligibility)?.label ||
              "Select eligibility"
            }
          >
            {(close) =>
              ELIGIBILITY_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    formData.eligibility === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setFormData((prev: any) => ({
                      ...prev,
                      eligibility: option.value,
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
        <LabelInputContainer className="mb-4">
          <Label>
            Based on the individual's address of residence, which of the following CHP service regions are they located?
          </Label>
          <DropdownMenu
            title={
              REGION_OPTIONS.find(opt => opt.value === formData.region)?.label ||
              "Select region"
            }
          >
            {(close) =>
              REGION_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    formData.region === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setFormData((prev: any) => ({
                      ...prev,
                      region: option.value,
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
        <LabelInputContainer className="mb-4">
          <Label>
            The individual will be assigned to the following CHP Vocational Counselor's caseload based on their geographical location (please type navigator's first and last name):
          </Label>
          <Input
            type="text"
            placeholder="Navigator's first and last name"
            value={formData.counselor || ""}
            onChange={e =>
              setFormData((prev: any) => ({
                ...prev,
                counselor: e.target.value,
              }))
            }
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>
            Please indicate if the individual will be placed on the Vocational Counselor's caseload or waitlist:
          </Label>
          <DropdownMenu
            title={
              CASELOAD_OPTIONS.find(opt => opt.value === formData.caseload)?.label ||
              "Select caseload status"
            }
          >
            {(close) =>
              CASELOAD_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    formData.caseload === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setFormData((prev: any) => ({
                      ...prev,
                      caseload: option.value,
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

export default ESASectionEight;