"use client";

import React from "react";
import DropdownMenu from "@/components/DropdownMenu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const CONTACT_METHOD_OPTIONS = [
  { value: "phone", label: "Phone" },
  { value: "email", label: "Email" },
  { value: "other", label: "Other (fill in the blank)" },
];

const LEARNED_ABOUT_OPTIONS = [
  { value: "friend", label: "Friend" },
  { value: "family", label: "Family Member" },
  { value: "employer", label: "Employer" },
  { value: "community", label: "Community Organization (e.g. Disability Rights of MS, Accelerate MS, The ARC, etc.)" },
  { value: "healthcare", label: "Healthcare Provider (e.g. hospital, treatment facility, physician, etc.)" },
  { value: "social", label: "Social Service Agency (e.g. MS Dept. of Rehabilitation Services, MS Dept. of Human Services, MS Dept. of Mental Health, etc.)" },
  { value: "other", label: "Other (fill in the blank)" },
];

const ESASectionThree = ({
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
        Section 3 - Initial Contact
      </h2>
      <form className="my-8">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="contact-method">
            CHP staff contacted the person referred via the following contact method to schedule a phone call to conduct a CHP Eligibility and Assessment:
          </Label>
          <DropdownMenu title={
            CONTACT_METHOD_OPTIONS.find(opt => opt.value === formData.contact_method)?.label || "Select contact method"
          }>
            {(close) =>
              CONTACT_METHOD_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    formData.contact_method === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setFormData((prev: any) => ({
                      ...prev,
                      contact_method: option.value,
                    }));
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
          {formData.contact_method === "other" && (
            <Input
              className="mt-2"
              placeholder="Please specify"
              type="text"
              value={formData.contact_method_other}
              onChange={e =>
                setFormData((prev: any) => ({
                  ...prev,
                  contact_method_other: e.target.value,
                }))
              }
            />
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="contact_notes">
            Add notes as needed to provide history of contact attempts made by CHP staff to referred person to schedule a meeting to conduct the CHP Eligibility and Assessment. (Include date, time, contact method, and result of each contact attempt along with date/time for CHP Eligibility and Assessment meeting scheduled.)
          </Label>
          <textarea
            id="contact_notes"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={formData.contact_notes || ""}
            onChange={e =>
              setFormData((prev: any) => ({
                ...prev,
                contact_notes: e.target.value,
              }))
            }
            placeholder="Long answer"
            rows={4}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="learned-about">
            How did the referred individual learn about the Career Horizons Project? (If other [e.g. website, social media, flyer, presentation, etc.], please specify in text box provided below.)
          </Label>
          <DropdownMenu title={
            LEARNED_ABOUT_OPTIONS.find(opt => opt.value === formData.learned_about)?.label || "Select how they learned about CHP"
          }>
            {(close) =>
              LEARNED_ABOUT_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    formData.learned_about === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setFormData((prev: any) => ({
                      ...prev,
                      learned_about: option.value,
                    }));
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
          {formData.learned_about === "other" && (
            <Input
              className="mt-2"
              placeholder="Please specify"
              type="text"
              value={formData.learned_about_other}
              onChange={e =>
                setFormData((prev: any) => ({
                  ...prev,
                  learned_about_other: e.target.value,
                }))
              }
            />
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="learned_about_name">
            If applicable, please list name of the individual, business, organization, provider, or agency from which the referred individual learned about the Career Horizons Project.
          </Label>
          <Input
            id="learned_about_name"
            placeholder="Name of individual/business/organization/provider/agency"
            type="text"
            value={formData.learned_about_name || ""}
            onChange={e =>
              setFormData((prev: any) => ({
                ...prev,
                learned_about_name: e.target.value,
              }))
            }
          />
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

export default ESASectionThree;