"use client";

import React, { useState } from "react";

const FINANCIAL_STATUS_OPTIONS = [
  { value: "1", label: "Able to meet expenses" },
  { value: "2", label: "Some difficulty meeting" },
  { value: "3", label: "In need of financial assistance" },
];

const SATISFACTION_OPTIONS = [
  { value: "1", label: "Very dissatisfied" },
  { value: "2", label: "Dissatisfied" },
  { value: "3", label: "Neutral" },
  { value: "4", label: "Satisfied" },
  { value: "5", label: "Very satisfied" },
];

function HorizontalScale({
  question,
  options,
  value,
  setValue,
  name,
}: {
  question: string;
  options: { value: string; label: string }[];
  value: string;
  setValue: (v: string) => void;
  name: string;
}) {
  return (
    <div className="mb-6">
      <div className="mb-2 font-medium text-gray-700">{question}</div>
      <div className="flex flex-row items-center space-x-4">
        {options.map((opt) => (
          <label key={opt.value} className="flex flex-col items-center text-xs">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => setValue(opt.value)}
              className="mb-1"
            />
            <span className="w-20 text-center">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

const SectionThirteen = ({ step }: { step: string }) => {
  const [financialStatus, setFinancialStatus] = useState("");
  const [transportSatisfaction, setTransportSatisfaction] = useState("");
  const [housingSatisfaction, setHousingSatisfaction] = useState("");

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 13 - Financial, Transportation & Housing Satisfaction
      </h2>
      <form className="my-8">
        <HorizontalScale
          question="What is your current financial status?"
          options={FINANCIAL_STATUS_OPTIONS}
          value={financialStatus}
          setValue={setFinancialStatus}
          name="financialStatus"
        />
        <HorizontalScale
          question="How satisfied are you with your access to transportation needed for daily living?"
          options={SATISFACTION_OPTIONS}
          value={transportSatisfaction}
          setValue={setTransportSatisfaction}
          name="transportSatisfaction"
        />
        <HorizontalScale
          question="How satisfied are you that your current housing meets your accessibility needs?"
          options={SATISFACTION_OPTIONS}
          value={housingSatisfaction}
          setValue={setHousingSatisfaction}
          name="housingSatisfaction"
        />
      </form>
    </div>
  );
};

export default SectionThirteen;