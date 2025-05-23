"use client"

import React, { useState } from "react";
import DropdownMenu from "@/components/DropdownMenu";

const OTHER_DISABILITIES_OPTIONS = [
  { value: "01", label: "Blindness" },
  { value: "02", label: "Other Visual Impairment" },
  { value: "03", label: "Deafness, Primary Communication Visual" },
  { value: "04", label: "Deafness, Primary Communication Auditory" },
  { value: "05", label: "Hearing Loss, Primary Communication Visual" },
  { value: "06", label: "Hearing Loss, Primary Communication Auditory" },
  { value: "07", label: "Other Hearing Impairments (tinnitus, Meniere's Disease, hyperacusis, etc.)" },
  { value: "08", label: "Deaf-Blindness" },
  { value: "09", label: "Communicative Impairments (expressive/receptive)" },
  { value: "10", label: "Mobility Orthopedic/Neurological Impairments" },
  { value: "11", label: "Manipulation/Dexterity" },
  { value: "12", label: "Both mobility and Manipulation/Dexterity Orthopedic/Neurological Impairments" },
  { value: "13", label: "Other Orthopedic Impairments (e.g., limited range of motion)" },
  { value: "14", label: "Respiratory Impairments" },
  { value: "15", label: "General Physical Debilitation (fatigue, weakness, pain, etc.)" },
  { value: "16", label: "Other Physical Impairments (not listed above)" },
  { value: "17", label: "Cognitive Impairments (impairments involving learning, thinking, processing information and concentration)" },
  { value: "18", label: "Psychosocial Impairments (interpersonal and behavioral impairments, difficulty coping)" },
  { value: "19", label: "Other Mental Impairments" },
  { value: "none", label: "None" },
];

function MultiSelectDropdown({
  label,
  options,
  selections,
  setSelections,
  dropdownTitle,
  setDropdownTitle,
}: {
  label: string;
  options: { value: string; label: string }[];
  selections: string[];
  setSelections: (v: string[]) => void;
  dropdownTitle: React.ReactNode;
  setDropdownTitle: (t: React.ReactNode) => void;
}) {
  const handleToggle = (value: string) => {
    let updated: string[];
    if (selections.includes(value)) {
      updated = selections.filter((v) => v !== value);
    } else {
      // If "None" is selected, clear all others
      if (value === "none") {
        updated = ["none"];
      } else {
        updated = selections.filter((v) => v !== "none").concat(value);
      }
    }
    setSelections(updated);

    // Update dropdown title
    if (updated.length === 0) {
      setDropdownTitle("Select all that apply");
    } else {
      setDropdownTitle(
        <span className="flex flex-wrap gap-2">
          {updated.map((val) => {
            const label = options.find((opt) => opt.value === val)?.label || val;
            return (
              <span
                key={val}
                className="inline-block border border-gray-300 rounded px-2 py-0.5 text-xs bg-gray-50"
              >
                {label}
              </span>
            );
          })}
        </span>
      );
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium text-gray-700">{label}</label>
      <DropdownMenu title={dropdownTitle}>
        {(close) => (
          <div>
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`flex items-center w-full px-4 py-2 hover:bg-gray-100 ${
                  selections.includes(option.value) ? "bg-gray-100 font-semibold" : ""
                }`}
                onClick={() => handleToggle(option.value)}
              >
                <input
                  type="checkbox"
                  checked={selections.includes(option.value)}
                  readOnly
                  className="mr-2"
                  tabIndex={-1}
                />
                {option.label}
              </button>
            ))}
          </div>
        )}
      </DropdownMenu>
    </div>
  );
}

const SectionFive = ({ step }: { step: string }) => {
  const [onsetDate, setOnsetDate] = useState("");
  const [otherDisabilities, setOtherDisabilities] = useState<string[]>([]);
  const [otherDisabilitiesTitle, setOtherDisabilitiesTitle] = useState<React.ReactNode>("Select all that apply");

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 5 - Date of Onset & Other Disabilities
      </h2>
      <form className="my-8">
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            What was the date of onset of your acquired disability resulting from Long COVID Syndrome?
          </label>
          <textarea
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={onsetDate}
            onChange={e => setOnsetDate(e.target.value)}
            placeholder="Enter date or description"
            rows={3}
          />
        </div>
        <MultiSelectDropdown
          label="In addition to Long COVID, what other disabilities do you have? (Select all that apply)"
          options={OTHER_DISABILITIES_OPTIONS}
          selections={otherDisabilities}
          setSelections={setOtherDisabilities}
          dropdownTitle={otherDisabilitiesTitle}
          setDropdownTitle={setOtherDisabilitiesTitle}
        />
      </form>
    </div>
  );
};

export default SectionFive;