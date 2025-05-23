"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import DropdownMenu from "@/components/DropdownMenu";

export function SectionOne({ step }: { step: string }) {
  const [contactMethod, setContactMethod] = useState("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [other, setOther] = useState("");
  const [enrollmentDate, setEnrollmentDate] = useState("");
  const [dropdownTitle, setDropdownTitle] = useState("Phone Number");
  const router = useRouter();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, "");

    let month = value.slice(0, 2);
    let day = value.slice(2, 4);
    let year = value.slice(4, 8);

    if (month.length === 2) {
      let m = parseInt(month, 10);
      if (m > 12) month = "12";
      if (m < 1) month = "01";
    }

    if (day.length === 2) {
      let d = parseInt(day, 10);
      if (d > 31) day = "31";
      if (d < 1) day = "01";
    }

    const currentYear = new Date().getFullYear();
    if (year.length === 4) {
      let y = parseInt(year, 10);
      if (y < 2020) year = "2020";
      if (y > currentYear) year = currentYear.toString();
    }

    let formatted = month;
    if (day.length) formatted += "/" + day;
    if (year.length) formatted += "/" + year;

    if (month.length === 2 && day.length === 2 && year.length === 4) {
      const enteredDate = new Date(`${year}-${month}-${day}`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (enteredDate > today) {
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const dd = String(today.getDate()).padStart(2, "0");
        const yyyy = today.getFullYear();
        formatted = `${mm}/${dd}/${yyyy}`;
      }
    }

    setEnrollmentDate(formatted);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 3 && input.length <= 6) {
      input = input.replace(/(\d{3})(\d+)/, "$1-$2");
    } else if (input.length > 6) {
      input = input.replace(/(\d{3})(\d{3})(\d+)/, "$1-$2-$3");
    }
    setPhone(input);
  };

  const handleDropdownSelect = (method: string, label: string) => {
    setContactMethod(method);
    setDropdownTitle(label);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/SectionTwo");
    console.log("Form submitted");
  };

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-3xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 1 - Referral Contact Information
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="contact-method">Preferred Contact Method</Label>
          <DropdownMenu title={dropdownTitle}>
  {(close) => (
    <>
      <button
        type="button"
        className="text-left w-full px-4 py-2 hover:bg-gray-100"
        onClick={() => {
          handleDropdownSelect("phone", "Phone Number");
          close();
        }}
      >
        Phone Number
      </button>
      <button
        type="button"
        className="text-left w-full px-4 py-2 hover:bg-gray-100"
        onClick={() => {
          handleDropdownSelect("email", "Email Address");
          close();
        }}
      >
        Email Address
      </button>
      <button
        type="button"
        className="text-left w-full px-4 py-2 hover:bg-gray-100"
        onClick={() => {
          handleDropdownSelect("other", "Other");
          close();
        }}
      >
        Other
      </button>
    </>
  )}
</DropdownMenu>
        </LabelInputContainer>

        {contactMethod === "phone" && (
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
        )}

        {contactMethod === "email" && (
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>
        )}

        {contactMethod === "other" && (
          <LabelInputContainer className="mb-4">
            <Label htmlFor="other">Other (Fill in the blank)</Label>
            <Input
              id="other"
              placeholder="..."
              type="text"
              value={other}
              onChange={(e) => setOther(e.target.value)}
            />
          </LabelInputContainer>
        )}

        <LabelInputContainer className="mb-4">
          <Label htmlFor="enrollment-date">Date of Enrollment</Label>
          <Input
            id="enrollment-date"
            placeholder="MM/DD/YYYY"
            type="text"
            inputMode="numeric"
            value={enrollmentDate}
            onChange={handleDateChange}
            maxLength={10}
            autoComplete="off"
          />
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