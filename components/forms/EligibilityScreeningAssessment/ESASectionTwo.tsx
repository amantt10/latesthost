"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DropdownMenu from "@/components/DropdownMenu";
import { cn } from "@/lib/utils";

const SOURCE_OPTIONS = [
  { value: "self", label: "Self-referral" },
  { value: "family", label: "Family Member" },
  { value: "employer", label: "Employer" },
  { value: "community", label: "Community Organization (e.g. Disability Rights of MS, Accelerate MS, The ARC, etc.)" },
  { value: "healthcare", label: "Healthcare Provider (e.g. hospital, treatment facility, physician, etc.)" },
  { value: "social", label: "Social Service Agency (e.g. MS Dept. of Rehabilitation Services, MS Dept. of Human Services, MS Dept. of Mental Health, etc.)" },
  { value: "other", label: "Other (fill in the blank)" },
];

const PARTNER_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "na", label: "Not Applicable" },
];

const ESASectionTwo = ({
  step,
  formData,
  setFormData,
}: {
  step: string;
  formData: any;
  setFormData: (fn: (prev: any) => any) => void;
}) => {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 3 && input.length <= 6) {
      input = input.replace(/(\d{3})(\d+)/, "$1-$2");
    } else if (input.length > 6) {
      input = input.replace(/(\d{3})(\d{3})(\d+)/, "$1-$2-$3");
    }
    setFormData((prev: any) => ({
      ...prev,
      referrer_phone: input,
    }));
  };

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 2 - Referral Information - Contact Information for Person Making the Referral
      </h2>
      <form className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="referrer_first_name">First name</Label>
            <Input
              id="referrer_first_name"
              placeholder="First name"
              type="text"
              value={formData.referrer_first_name}
              onChange={e =>
                setFormData((prev: any) => ({
                  ...prev,
                  referrer_first_name: e.target.value,
                }))
              }
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="referrer_last_name">Last name</Label>
            <Input
              id="referrer_last_name"
              placeholder="Last name"
              type="text"
              value={formData.referrer_last_name}
              onChange={e =>
                setFormData((prev: any) => ({
                  ...prev,
                  referrer_last_name: e.target.value,
                }))
              }
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="referrer_phone">Daytime Phone Number (XXX-XXX-XXXX)</Label>
          <Input
            id="referrer_phone"
            placeholder="XXX-XXX-XXXX"
            type="text"
            value={formData.referrer_phone}
            onChange={handlePhoneChange}
            maxLength={12}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="referrer_email">Email Address</Label>
          <Input
            id="referrer_email"
            placeholder="Email Address"
            type="email"
            value={formData.referrer_email}
            onChange={e =>
              setFormData((prev: any) => ({
                ...prev,
                referrer_email: e.target.value,
              }))
            }
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="referral_source">Source of Referral</Label>
          <DropdownMenu title={
            SOURCE_OPTIONS.find(opt => opt.value === formData.referral_source)?.label || "Select source of referral"
          }>
            {(close) =>
              SOURCE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    formData.referral_source === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setFormData((prev: any) => ({
                      ...prev,
                      referral_source: option.value,
                    }));
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
          {formData.referral_source === "other" && (
            <Input
              className="mt-2"
              placeholder="Please specify"
              type="text"
              value={formData.referral_business_name}
              onChange={e =>
                setFormData((prev: any) => ({
                  ...prev,
                  referral_business_name: e.target.value,
                }))
              }
            />
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="referral_business_name">
            If applicable, please list name of business, community organization, healthcare provider, or social service agency the referrer represents.
          </Label>
          <Input
            id="referral_business_name"
            placeholder="Name of business/organization/provider/agency"
            type="text"
            value={formData.referral_business_name}
            onChange={e =>
              setFormData((prev: any) => ({
                ...prev,
                referral_business_name: e.target.value,
              }))
            }
          />
        </LabelInputContainer>
        {/* If you have a partner field, add it here as well */}
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

export default ESASectionTwo;