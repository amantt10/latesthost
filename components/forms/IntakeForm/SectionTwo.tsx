"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export function SectionTwo({ step }: { step: string }) {
  const [enrollmentDate, setEnrollmentDate] = useState("");
  const router = useRouter();
  const [phone, setPhone] = useState("");

const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // Only numbers
  
    let month = value.slice(0, 2);
    let day = value.slice(2, 4);
    let year = value.slice(4, 8);
  
    // Enforce month <= 12
    if (month.length === 2) {
      let m = parseInt(month, 10);
      if (m > 12) month = "12";
      if (m < 1) month = "01";
    }
  
    // Enforce day <= 31
    if (day.length === 2) {
      let d = parseInt(day, 10);
      if (d > 31) day = "31";
      if (d < 1) day = "01";
    }
  
    // Enforce year between 2020 and current year
    const currentYear = new Date().getFullYear();
    if (year.length === 4) {
      let y = parseInt(year, 10);
      if (y < 2020) year = "2020";
      if (y > currentYear) year = currentYear.toString();
    }
  
    let formatted = month;
    if (day.length) formatted += "/" + day;
    if (year.length) formatted += "/" + year;
  
    // If date is fully entered, check if it's in the future
    if (month.length === 2 && day.length === 2 && year.length === 4) {
      const enteredDate = new Date(`${year}-${month}-${day}`);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Ignore time
  
      if (enteredDate > today) {
        // Reset to today's date
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const dd = String(today.getDate()).padStart(2, "0");
        const yyyy = today.getFullYear();
        formatted = `${mm}/${dd}/${yyyy}`;
      }
    }
  
    setEnrollmentDate(formatted);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
      if (input.length > 3 && input.length <= 6) {
        input = input.replace(/(\d{3})(\d+)/, "$1-$2");
      } else if (input.length > 6) {
        input = input.replace(/(\d{3})(\d{3})(\d+)/, "$1-$2-$3");
      }
      setPhone(input);
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    router.push("/SectionTwo");
    console.log("Form submitted");
  };

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-3xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 2 - Participant Information
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" placeholder="Tyler" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" placeholder="Durden" type="text" />
                </LabelInputContainer>
            </div>
             <LabelInputContainer className="mb-4">
                    <Label htmlFor="DOB">Date of Birth</Label>
                        <Input
                            id="DOB"
                            placeholder="MM/DD/YYYY"
                            type="text"
                            inputMode="numeric"
                            value={enrollmentDate}
                            onChange={handleDateChange}
                            maxLength={10}
                            autoComplete="off"
                        />
                    </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Address" type="text" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="662-555-5555"
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
                      <Label htmlFor="phone">Alternative Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="662-555-5555"
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

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