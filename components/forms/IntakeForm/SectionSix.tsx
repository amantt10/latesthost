"use client"

import React, { useState } from "react";
import DropdownMenu from "@/components/DropdownMenu";

// Option arrays
const HOSPITALIZATION_OPTIONS = [
  { value: "hospitalization", label: "Hospitalization for one day or more" },
  { value: "surgery", label: "Surgery" },
  { value: "rehab", label: "Long term treatment or rehabilitation" },
];

const YES_NO_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const GLASSES_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "other", label: "Other (fill in the blank)" },
];

const STAMINA_OPTIONS = [
  { value: "excellent", label: "Excellent" },
  { value: "good", label: "Good" },
  { value: "fair", label: "Fair" },
  { value: "poor", label: "Poor" },
];

// Generic Single Select Dropdown
function SingleSelectDropdown({
  label,
  options,
  value,
  setValue,
  dropdownTitle,
  setDropdownTitle,
  placeholder = "Select an option",
  showOtherInput = false,
  otherValue = "",
  setOtherValue,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  setValue: (v: string) => void;
  dropdownTitle: string;
  setDropdownTitle: (t: string) => void;
  placeholder?: string;
  showOtherInput?: boolean;
  otherValue?: string;
  setOtherValue?: (v: string) => void;
}) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium text-gray-700">{label}</label>
      <DropdownMenu title={dropdownTitle || placeholder}>
        {(close) => (
          <>
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                  value === option.value ? "bg-gray-100 font-semibold" : ""
                }`}
                onClick={() => {
                  setValue(option.value);
                  setDropdownTitle(option.label);
                  close();
                }}
              >
                {option.label}
              </button>
            ))}
          </>
        )}
      </DropdownMenu>
      {showOtherInput && value === "other" && setOtherValue && (
        <input
          type="text"
          className="mt-2 border border-gray-300 rounded px-3 py-2 w-full"
          placeholder="Please specify"
          value={otherValue}
          onChange={e => setOtherValue(e.target.value)}
        />
      )}
    </div>
  );
}

// Generic Multi Select Dropdown
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
      updated = [...selections, value];
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

const SectionSix = ({ step }: { step: string }) => {
  // State hooks
  const [hospitalization, setHospitalization] = useState<string[]>([]);
  const [hospitalizationTitle, setHospitalizationTitle] = useState<React.ReactNode>("Select all that apply");

  const [physician, setPhysician] = useState<string>("");
  const [physicianTitle, setPhysicianTitle] = useState("Select an option");

  const [medications, setMedications] = useState<string>("");
  const [allergies, setAllergies] = useState<string>("");
  const [allergiesTitle, setAllergiesTitle] = useState("Select an option");
  const [vocationalCounselor, setVocationalCounselor] = useState<string>("");

  const [sleepHours, setSleepHours] = useState<string>("");
  const [glasses, setGlasses] = useState<string>("");
  const [glassesTitle, setGlassesTitle] = useState("Select an option");
  const [otherGlasses, setOtherGlasses] = useState<string>("");

  const [stamina, setStamina] = useState<string>("");
  const [staminaTitle, setStaminaTitle] = useState("Select an option");

  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  const [exercise, setExercise] = useState<string>("");
  const [exerciseTitle, setExerciseTitle] = useState("Select an option");

  const [tobacco, setTobacco] = useState<string>("");
  const [tobaccoTitle, setTobaccoTitle] = useState("Select an option");

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 6 - Health & Functioning
      </h2>
      <form className="my-8">
        <MultiSelectDropdown
          label="Has or will your disability accompanied by or resulting from Long COVID Syndrome require any of the following?"
          options={HOSPITALIZATION_OPTIONS}
          selections={hospitalization}
          setSelections={setHospitalization}
          dropdownTitle={hospitalizationTitle}
          setDropdownTitle={setHospitalizationTitle}
        />
        <SingleSelectDropdown
          label="Are you currently receiving services from a physician for Long COVID Syndrome?"
          options={YES_NO_OPTIONS}
          value={physician}
          setValue={setPhysician}
          dropdownTitle={physicianTitle}
          setDropdownTitle={setPhysicianTitle}
        />
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Please list the medications you take below. For each medication listed, please provide the following information: name, dosage, for condition, and side effects.
          </label>
          <textarea
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={medications}
            onChange={e => setMedications(e.target.value)}
            placeholder="N/A"
            rows={4}
          />
        </div>
        <SingleSelectDropdown
          label="Do you have allergies?"
          options={YES_NO_OPTIONS}
          value={allergies}
          setValue={setAllergies}
          dropdownTitle={allergiesTitle}
          setDropdownTitle={setAllergiesTitle}
        />
        {allergies === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Vocational Counselor: If "yes," please specify below.
            </label>
            <textarea
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={vocationalCounselor}
              onChange={e => setVocationalCounselor(e.target.value)}
              placeholder="N/A"
              rows={3}
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            How many hours of sleep do you get on average per night?
          </label>
          <input
            type="number"
            min={0}
            className="border border-gray-300 rounded px-3 py-2 w-32"
            value={sleepHours}
            onChange={e => setSleepHours(e.target.value.replace(/[^0-9]/g, ""))}
            placeholder="Hours"
          />
        </div>
        <SingleSelectDropdown
          label="Do you wear glasses or contacts?"
          options={GLASSES_OPTIONS}
          value={glasses}
          setValue={setGlasses}
          dropdownTitle={glassesTitle}
          setDropdownTitle={setGlassesTitle}
          showOtherInput
          otherValue={otherGlasses}
          setOtherValue={setOtherGlasses}
        />
        <SingleSelectDropdown
          label="How would you describe your physical stamina?"
          options={STAMINA_OPTIONS}
          value={stamina}
          setValue={setStamina}
          dropdownTitle={staminaTitle}
          setDropdownTitle={setStaminaTitle}
        />
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            What is your height?
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-40"
            value={height}
            onChange={e => setHeight(e.target.value)}
            placeholder="e.g. 5'8&quot; or 172 cm"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            What is your weight?
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-40"
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="e.g. 150 lbs or 68 kg"
          />
        </div>
        <SingleSelectDropdown
          label="Do you exercise?"
          options={YES_NO_OPTIONS}
          value={exercise}
          setValue={setExercise}
          dropdownTitle={exerciseTitle}
          setDropdownTitle={setExerciseTitle}
        />
        <SingleSelectDropdown
          label="Do you use tobacco or vape?"
          options={YES_NO_OPTIONS}
          value={tobacco}
          setValue={setTobacco}
          dropdownTitle={tobaccoTitle}
          setDropdownTitle={setTobaccoTitle}
        />
      </form>
    </div>
  );
};

export default SectionSix;