"use client";

import React from "react";
import DropdownMenu from "@/components/DropdownMenu";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const YES_NO_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const DOC_STATUS_OPTIONS = [
  { value: "digital-copy", label: "Individual sent a digital copy of disability diagnosis to CHP staff." },
  { value: "roi-healthcare", label: "Individual completed CHP's ROI to receive assistance from CHP staff in retrieving a copy of disability diagnosis from Healthcare Service Provider." },
  { value: "roi-mdrs", label: "Individual completed CHP's ROI to receive assistance from CHP staff in retrieving a copy of disability diagnosis from Mississippi Department of Rehabilitation Services." },
  { value: "will-submit", label: "Individual has agreed to retrieve and submit a copy of disability diagnosis to CHP staff ASAP." },
];

const ESASectionSeven = ({
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
        Section 7 - CHP Eligibility Verification
      </h2>
      <form className="my-8">
        {/* 34 */}
        <LabelInputContainer className="mb-4">
          <Label>
            Individual provided medical or related documentation of disability accompanied by or resulting from Long COVID Syndrome. By selecting yes to this question, a CHP staff member is agreeing they have viewed this medical information.
          </Label>
          <DropdownMenu
            title={
              YES_NO_OPTIONS.find(opt => opt.value === formData.doc_provided)?.label ||
              "Select an option"
            }
          >
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    formData.doc_provided === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setFormData((prev: any) => ({
                      ...prev,
                      doc_provided: option.value,
                      // Reset dependent fields if changed
                      ...(option.value === "yes"
                        ? { doc_status: "", address: "", birthdate: "" }
                        : { address: "", birthdate: "" }),
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
        {/* 35 */}
        {formData.doc_provided === "no" && (
          <LabelInputContainer className="mb-4">
            <Label>
              Status of receiving medical or related documentation of a disability accompanied by or resulting from Long COVID Syndrome.
            </Label>
            <DropdownMenu
              title={
                DOC_STATUS_OPTIONS.find(opt => opt.value === formData.doc_status)?.label ||
                "Select an option"
              }
            >
              {(close) =>
                DOC_STATUS_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      formData.doc_status === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setFormData((prev: any) => ({
                        ...prev,
                        doc_status: option.value,
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
        )}
        {/* 36 */}
        {formData.doc_provided === "yes" && (
          <LabelInputContainer className="mb-4">
            <Label>
              Enter the individual's home address (# and Street Name; City, State, Zip Code) below to verify Mississippi residency.
            </Label>
            <Input
              type="text"
              placeholder="123 Main St; Jackson, MS 39201"
              value={formData.address || ""}
              onChange={e =>
                setFormData((prev: any) => ({
                  ...prev,
                  address: e.target.value,
                }))
              }
            />
          </LabelInputContainer>
        )}
        {/* 37 */}
        {formData.doc_provided === "yes" && (
          <LabelInputContainer className="mb-4">
            <Label>
              Enter the individual's birthdate below for verification of age (CHP serves individuals between the ages of 16-70).
            </Label>
            <Input
              type="text"
              placeholder="MM/DD/YYYY"
              value={formData.birthdate || ""}
              onChange={e =>
                setFormData((prev: any) => ({
                  ...prev,
                  birthdate: e.target.value,
                }))
              }
              maxLength={10}
            />
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

export default ESASectionSeven;