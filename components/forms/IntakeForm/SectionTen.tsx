"use client";

import React, { useState } from "react";
import DropdownMenu from "@/components/DropdownMenu";

const EMPLOYMENT_OPTIONS = [
  { value: "self-employed", label: "Self-employed" },
  { value: "employed", label: "Employed" },
  { value: "not-employed", label: "Not employed" },
];

const SectionTen = ({ step }: { step: string }) => {
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [employmentStatusTitle, setEmploymentStatusTitle] = useState("Select employment status");

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Sectio 10 - Employment Status
      </h2>
      <form className="my-8">
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            What is your current employment status?
          </label>
          <DropdownMenu title={employmentStatusTitle}>
            {(close) => (
              <>
                {EMPLOYMENT_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      employmentStatus === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setEmploymentStatus(option.value);
                      setEmploymentStatusTitle(option.label);
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </>
            )}
          </DropdownMenu>
        </div>
      </form>
    </div>
  );
};

export default SectionTen;