"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { cn } from "@/lib/utils";
import DropdownMenu from "@/components/DropdownMenu";

const SOURCE_OPTIONS = [
  { value: "self", label: "Self-referral" },
  { value: "family", label: "Family Member" },
  { value: "employer", label: "Employer" },
  { value: "community", label: "Community Organization (e.g. Disability Rights of MS, Accelerate MS, The ARC, etc.)" },
  { value: "healthcare", label: "Healthcare Provider (e.g. hospital, treatment facility, physician, etc.)" },
  { value: "social", label: "Social Service Agency (e.g. MS Dept. of Rehabilitation Services, MS Dept. of Human Services, MS Dept. of Mental Health, etc.)" },
  { value: "other", label: "Other (fill in the blank)" },
];

const RFSectionThree = ({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: (data: any) => void;
}) => {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 3 && input.length <= 6) {
      input = input.replace(/(\d{3})(\d+)/, "$1-$2");
    } else if (input.length > 6) {
      input = input.replace(/(\d{3})(\d{3})(\d+)/, "$1-$2-$3");
    }
    setFormData({ ...formData, referrer_phone: input });
  };

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 3 - Person Making the Referral
      </h2>
      <form className="my-8" onSubmit={e => e.preventDefault()}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="referrer_firstname">First name</Label>
            <Input
              id="referrer_firstname"
              placeholder="First name"
              type="text"
              value={formData.referrer_first_name}
              onChange={e => setFormData({ ...formData, referrer_first_name: e.target.value })}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="referrer_lastname">Last name</Label>
            <Input
              id="referrer_lastname"
              placeholder="Last name"
              type="text"
              value={formData.referrer_last_name}
              onChange={e => setFormData({ ...formData, referrer_last_name: e.target.value })}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="referrer_phone">Daytime Phone Number</Label>
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
            type="email"
            placeholder="Enter your email address"
            value={formData.referrer_email}
            onChange={e => setFormData({ ...formData, referrer_email: e.target.value })}
          />
        </LabelInputContainer>
        {/* New fields start here */}
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
                    setFormData({
                      ...formData,
                      referral_source: option.value,
                    });
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
              value={formData.referral_source_other || ""}
              onChange={e => setFormData({ ...formData, referral_source_other: e.target.value })}
            />
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="referral_business_name">
            If applicable, please list the name of the business or agency you represent.
          </Label>
          <Input
            id="referral_business_name"
            placeholder="Business or agency name"
            type="text"
            value={formData.referral_business_name}
            onChange={e => setFormData({ ...formData, referral_business_name: e.target.value })}
          />
        </LabelInputContainer>
        {/* New fields end here */}
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

export default RFSectionThree;