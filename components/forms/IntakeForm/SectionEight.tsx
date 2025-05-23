"use client";

import React, { useState } from "react";
import DropdownMenu from "@/components/DropdownMenu";

const YES_NO_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const MENTAL_HEALTH_TYPE_OPTIONS = [
  { value: "pre-existing", label: "a pre-existing mental health condition" },
  { value: "new-due-to-covid", label: "another diagnosis with a new mental health condition due to Long COVID" },
];

const MENTAL_HEALTH_CONDITION_OPTIONS = [
  { value: "depression", label: "Depression" },
  { value: "anxiety", label: "Anxiety" },
  { value: "bipolar", label: "Bipolar Disorder" },
  { value: "trauma", label: "Trauma - and Stressor- Related Disorder" },
  { value: "schizophrenia", label: "Schizophrenia or other thought disorder" },
  { value: "personality", label: "Personality Disorder" },
  { value: "other", label: "Other (fill in the blank)" },
];

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

function MultiSelectDropdown({
  label,
  options,
  selections,
  setSelections,
  dropdownTitle,
  setDropdownTitle,
  showOtherInput = false,
  otherValue = "",
  setOtherValue,
}: {
  label: string;
  options: { value: string; label: string }[];
  selections: string[];
  setSelections: (v: string[]) => void;
  dropdownTitle: React.ReactNode;
  setDropdownTitle: (t: React.ReactNode) => void;
  showOtherInput?: boolean;
  otherValue?: string;
  setOtherValue?: (v: string) => void;
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
    // Reset other input if unchecked
    if (value === "other" && selections.includes("other") && setOtherValue) {
      setOtherValue("");
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
      {showOtherInput && selections.includes("other") && setOtherValue && (
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

const SectionEight = ({ step }: { step: string }) => {
  // Q67
  const [diagnosedMentalHealth, setDiagnosedMentalHealth] = useState("");
  const [diagnosedMentalHealthTitle, setDiagnosedMentalHealthTitle] = useState("Select an option");

  // Q68
  const [mentalHealthType, setMentalHealthType] = useState("");
  const [mentalHealthTypeTitle, setMentalHealthTypeTitle] = useState("Select an option");

  // Q69
  const [mentalHealthConditions, setMentalHealthConditions] = useState<string[]>([]);
  const [mentalHealthConditionsTitle, setMentalHealthConditionsTitle] = useState<React.ReactNode>("Select all that apply");
  const [otherMentalHealthCondition, setOtherMentalHealthCondition] = useState("");

  // Q70
  const [personalityDisorder, setPersonalityDisorder] = useState("");

  // Q71
  const [illegalDrugUse, setIllegalDrugUse] = useState("");
  const [illegalDrugUseTitle, setIllegalDrugUseTitle] = useState("Select an option");

  // Q72
  const [diagnosedDrugDisorder, setDiagnosedDrugDisorder] = useState("");
  const [diagnosedDrugDisorderTitle, setDiagnosedDrugDisorderTitle] = useState("Select an option");

  // Q73
  const [receivedDrugTreatment, setReceivedDrugTreatment] = useState("");
  const [receivedDrugTreatmentTitle, setReceivedDrugTreatmentTitle] = useState("Select an option");

  // Q74
  const [drugTreatmentDateRange, setDrugTreatmentDateRange] = useState("");

  // Q75
  const [drugTreatmentDescription, setDrugTreatmentDescription] = useState("");

  // Q76
  const [bingeAlcohol, setBingeAlcohol] = useState("");
  const [bingeAlcoholTitle, setBingeAlcoholTitle] = useState("Select an option");

  // Q77
  const [diagnosedAlcoholDisorder, setDiagnosedAlcoholDisorder] = useState("");
  const [diagnosedAlcoholDisorderTitle, setDiagnosedAlcoholDisorderTitle] = useState("Select an option");

  // Q78
  const [receivedAlcoholTreatment, setReceivedAlcoholTreatment] = useState("");
  const [receivedAlcoholTreatmentTitle, setReceivedAlcoholTreatmentTitle] = useState("Select an option");

  // Q79
  const [alcoholTreatmentDateRange, setAlcoholTreatmentDateRange] = useState("");

  // Q80
  const [alcoholTreatmentDescription, setAlcoholTreatmentDescription] = useState("");

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 8 - Mental Health & Substance Use
      </h2>
      <form className="my-8">
        {/* Q67 */}
        <SingleSelectDropdown
          label="Have you been diagnosed with a mental health condition?"
          options={YES_NO_OPTIONS}
          value={diagnosedMentalHealth}
          setValue={setDiagnosedMentalHealth}
          dropdownTitle={diagnosedMentalHealthTitle}
          setDropdownTitle={setDiagnosedMentalHealthTitle}
        />
        {/* If "No", skip to Q72 */}
        {diagnosedMentalHealth === "yes" && (
          <>
            {/* Q68 */}
            <SingleSelectDropdown
              label="Is your diagnosed mental health condition..."
              options={MENTAL_HEALTH_TYPE_OPTIONS}
              value={mentalHealthType}
              setValue={setMentalHealthType}
              dropdownTitle={mentalHealthTypeTitle}
              setDropdownTitle={setMentalHealthTypeTitle}
            />
            {/* Q69 */}
            <MultiSelectDropdown
              label="Please specify your diagnosed mental health condition:"
              options={MENTAL_HEALTH_CONDITION_OPTIONS}
              selections={mentalHealthConditions}
              setSelections={setMentalHealthConditions}
              dropdownTitle={mentalHealthConditionsTitle}
              setDropdownTitle={setMentalHealthConditionsTitle}
              showOtherInput
              otherValue={otherMentalHealthCondition}
              setOtherValue={setOtherMentalHealthCondition}
            />
            {/* Q70 */}
            {mentalHealthConditions.includes("personality") && (
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">
                  Vocational Counselor: If "Personality Disorder," ask - Which Personality Disorder do you have?
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  value={personalityDisorder}
                  onChange={e => setPersonalityDisorder(e.target.value)}
                  placeholder="N/A"
                />
              </div>
            )}
            {/* Q71 */}
            <SingleSelectDropdown
              label="During the past year, have you used illegal or non-prescription drug?"
              options={YES_NO_OPTIONS}
              value={illegalDrugUse}
              setValue={setIllegalDrugUse}
              dropdownTitle={illegalDrugUseTitle}
              setDropdownTitle={setIllegalDrugUseTitle}
            />
          </>
        )}

        {/* Q72 */}
        {(diagnosedMentalHealth === "no" || diagnosedMentalHealth === "yes") && (
          <>
            <SingleSelectDropdown
              label="Have you ever been diagnosed with a drug disorder?"
              options={YES_NO_OPTIONS}
              value={diagnosedDrugDisorder}
              setValue={setDiagnosedDrugDisorder}
              dropdownTitle={diagnosedDrugDisorderTitle}
              setDropdownTitle={setDiagnosedDrugDisorderTitle}
            />
            {/* If "No", skip to Q76 */}
            {diagnosedDrugDisorder === "yes" && (
              <>
                {/* Q73 */}
                <SingleSelectDropdown
                  label="Have you ever received treatment for your diagnosed drug use disorder?"
                  options={YES_NO_OPTIONS}
                  value={receivedDrugTreatment}
                  setValue={setReceivedDrugTreatment}
                  dropdownTitle={receivedDrugTreatmentTitle}
                  setDropdownTitle={setReceivedDrugTreatmentTitle}
                />
                {/* Q74 */}
                <div className="mb-4">
                  <label className="block mb-2 font-medium text-gray-700">
                    What was the date range of treatment for your diagnosed drug use disorder?
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    value={drugTreatmentDateRange}
                    onChange={e => setDrugTreatmentDateRange(e.target.value)}
                    placeholder="N/A"
                  />
                </div>
                {/* Q75 */}
                <div className="mb-4">
                  <label className="block mb-2 font-medium text-gray-700">
                    Please describe your treatment for your diagnosed drug use disorder.
                  </label>
                  <textarea
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    value={drugTreatmentDescription}
                    onChange={e => setDrugTreatmentDescription(e.target.value)}
                    placeholder="Long answer"
                    rows={4}
                  />
                </div>
              </>
            )}
          </>
        )}

        {/* Q76 */}
        <SingleSelectDropdown
          label="In the past year, have you had more than X (x=5 for men; x=4 for women) drinks of alcohol in a single day?"
          options={YES_NO_OPTIONS}
          value={bingeAlcohol}
          setValue={setBingeAlcohol}
          dropdownTitle={bingeAlcoholTitle}
          setDropdownTitle={setBingeAlcoholTitle}
        />

        {/* Q77 */}
        <SingleSelectDropdown
          label="Have you ever been diagnosed for an alcohol use disorder?"
          options={YES_NO_OPTIONS}
          value={diagnosedAlcoholDisorder}
          setValue={setDiagnosedAlcoholDisorder}
          dropdownTitle={diagnosedAlcoholDisorderTitle}
          setDropdownTitle={setDiagnosedAlcoholDisorderTitle}
        />

        {/* Q78 */}
        {diagnosedAlcoholDisorder === "yes" && (
          <>
            <SingleSelectDropdown
              label="Have you ever received treatment for your diagnosed alcohol use disorder?"
              options={YES_NO_OPTIONS}
              value={receivedAlcoholTreatment}
              setValue={setReceivedAlcoholTreatment}
              dropdownTitle={receivedAlcoholTreatmentTitle}
              setDropdownTitle={setReceivedAlcoholTreatmentTitle}
            />
            {/* Q79 */}
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                What was the date range of treatment for your diagnosed alcohol use disorder?
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={alcoholTreatmentDateRange}
                onChange={e => setAlcoholTreatmentDateRange(e.target.value)}
                placeholder="N/A"
              />
            </div>
            {/* Q80 */}
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Please describe your treatment for your diagnosed alcohol use disorder.
              </label>
              <textarea
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={alcoholTreatmentDescription}
                onChange={e => setAlcoholTreatmentDescription(e.target.value)}
                placeholder="Long answer"
                rows={4}
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default SectionEight;