"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { cn } from "@/lib/utils";

const RFSectionTwo = ({
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
    setFormData({ ...formData, phone_number: input });
  };

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 2 - Person Being Referred
      </h2>
      <form className="my-8" onSubmit={e => e.preventDefault()}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="First name"
              type="text"
              value={formData.first_name}
              onChange={e => setFormData({ ...formData, first_name: e.target.value })}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Last name"
              type="text"
              value={formData.last_name}
              onChange={e => setFormData({ ...formData, last_name: e.target.value })}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Daytime Phone Number</Label>
          <Input
            id="phone"
            placeholder="XXX-XXX-XXXX"
            type="text"
            value={formData.phone_number}
            onChange={handlePhoneChange}
            maxLength={12}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="county">County of Residence in Mississippi</Label>
          <Input
            id="county"
            type="text"
            placeholder="Enter your county"
            value={formData.county}
            onChange={e => setFormData({ ...formData, county: e.target.value })}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="zip">Zip Code of Residence in Mississippi</Label>
          <Input
            id="zip"
            type="text"
            placeholder="Enter your zip code"
            value={formData.zip}
            onChange={e => setFormData({ ...formData, zip: e.target.value })}
            maxLength={10}
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

export default RFSectionTwo;