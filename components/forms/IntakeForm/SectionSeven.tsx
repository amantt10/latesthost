"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const SectionSeven = ({ step }: { step: string }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [primaryPhone, setPrimaryPhone] = useState("");
  const [email, setEmail] = useState("");
  const [primaryPhoneError, setPrimaryPhoneError] = useState("");
  const [altPhoneError, setAltPhoneError] = useState("");
  const [phone, setPhone] = useState("");
  const [altPhone, setAltPhone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        if (input.length > 3 && input.length <= 6) {
          input = input.replace(/(\d{3})(\d+)/, "$1-$2");
        } else if (input.length > 6) {
          input = input.replace(/(\d{3})(\d{3})(\d+)/, "$1-$2-$3");
        }
        setPhone(input);
      };

    const handlealtPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        if (input.length > 3 && input.length <= 6) {
          input = input.replace(/(\d{3})(\d+)/, "$1-$2");
        } else if (input.length > 6) {
          input = input.replace(/(\d{3})(\d{3})(\d+)/, "$1-$2-$3");
        }
        setAltPhone(input);
      };

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 7 - Emergency Contact
      </h2>
      <form className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="First name"
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Last name"
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="relationship">Relationship to CHP Participant</Label>
          <Input
            id="relationship"
            placeholder="Relationship"
            type="text"
            value={relationship}
            onChange={e => setRelationship(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
                              <Label htmlFor="phone">Emergency Contact's Phone Number</Label>
                              <Input
                                id="phone"
                                placeholder="662-555-5555"
                                type="text"
                                value={phone}
                                onChange={handlePhoneChange}
                              />
                    </LabelInputContainer>
        <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Emergency Contact's Alternative Phone Number</Label>
                <Input
                    id="phone"
                    placeholder="662-555-5555"
                    type="text"
                    value={altPhone}
                    onChange={handlealtPhoneChange}
                />
                    </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Emergency Contact's Email</Label>
          <Input
            id="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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

export default SectionSeven;