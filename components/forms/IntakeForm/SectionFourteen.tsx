"use client";

import React, { useState } from "react";
import DropdownMenu from "@/components/DropdownMenu";

const YES_NO_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const YES_NO_NOT_SURE_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "not-sure", label: "Not sure" },
];

const MULTI_120 = [
  { value: "wage", label: "pay $7.25 or more per hour?" },
  { value: "diploma", label: "require more than a high school diploma?" },
  { value: "travel", label: "take more than 30 minutes to travel to?" },
];

const PHYSICAL_DEMAND_OPTIONS = [
  { value: "sedentary", label: "Sedentary - 2 to 5 lbs. with a maximum of 10 lbs." },
  { value: "light", label: "Light - 10 lbs. with a maximum of 20 lbs." },
  { value: "medium", label: "Medium - 50 lbs. with a maximum of 100 lbs." },
  { value: "heavy", label: "Heavy - 50lbs. with a maximum of 100 lbs." },
  { value: "very-heavy", label: "Very Heavy - 50lbs. or more with a maximum of 100 lbs. or more" },
];

const MULTI_122 = [
  { value: "fatigue", label: "Chronic fatigue / post-exertional malaise (PEM)" },
  { value: "cognitive", label: "Cognitive dysfunction ('brain fog')" },
  { value: "respiratory", label: "Shortness of breath / respiratory issues" },
  { value: "cardio", label: "Chest pain / cardiovascular symptoms" },
  { value: "headache", label: "Headaches / migraines" },
  { value: "neuro", label: "Neurological symptoms (e.g., dizziness, neuropathy)" },
  { value: "mental", label: "Depression, anxiety, PTSD-like symptoms" },
  { value: "sleep", label: "Sleep disturbances / insomnia" },
  { value: "muscle", label: "Muscle and joint pain" },
  { value: "gi", label: "Gastrointestinal issues" },
  { value: "autonomic", label: "Autonomic dysfunction (e.g., POTS)" },
  { value: "other", label: "Other (fill in the blank)" },
];

const MULTI_135 = [
  { value: "wheelchair", label: "Wheelchair or scooter" },
  { value: "cane", label: "Cane or walker" },
  { value: "workstation", label: "Heigh-adjustable workstations" },
  { value: "seating", label: "Specialized seating or cushioning" },
  { value: "other", label: "Other (fill in the blank)" },
];

const MULTI_137 = [
  { value: "screenreader", label: "Screen reader or text-to-speech software" },
  { value: "magnification", label: "Magnification software or handheld magnifiers" },
  { value: "contrast", label: "High-contrast or large print materials" },
  { value: "braille", label: "Braille display or notetaker" },
  { value: "other", label: "Other (fill in the blank)" },
];

const MULTI_139 = [
  { value: "hearingaid", label: "Hearing aids or cochlear implants" },
  { value: "captioning", label: "Captioning or speech-to-text tools" },
  { value: "amplified", label: "Amplified telephone or communication device" },
  { value: "other", label: "Other (fill in the blank)" },
];

const MULTI_141 = [
  { value: "speechtotext", label: "Speech-to-text software" },
  { value: "aac", label: "Augmentative or alternative communication (AAC) device" },
  { value: "other", label: "Other (fill in the blank)" },
];

const MULTI_143 = [
  { value: "altkeyboard", label: "Alternative keyboard or mouse" },
  { value: "speechrec", label: "Speech recognition software" },
  { value: "eyetracking", label: "Eye-tracking or head-tracking device" },
  { value: "other", label: "Other (fill in the blank)" },
];

const MDRS_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "not-sure", label: "Not sure" },
];

const CIE_OPTIONS = [
  { value: "placement", label: "Placement Services for CIE" },
  { value: "retention", label: "Retention Services for CIE" },
];

// Generic MultiSelect
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

const SectionFourteen = ({ step }: { step: string }) => {
  // Work history
  const [workHistory, setWorkHistory] = useState("");
  // 120
  const [jobRecentMulti, setJobRecentMulti] = useState<string[]>([]);
  const [jobRecentMultiTitle, setJobRecentMultiTitle] = useState<React.ReactNode>("Select all that apply");
  // 121
  const [physicalDemand, setPhysicalDemand] = useState("");
  const [physicalDemandTitle, setPhysicalDemandTitle] = useState("Select an option");
  // 122
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [symptomsTitle, setSymptomsTitle] = useState<React.ReactNode>("Select all that apply");
  const [symptomsOther, setSymptomsOther] = useState("");
  // 123/124
  const [usingAccommodations, setUsingAccommodations] = useState("");
  const [usingAccommodationsTitle, setUsingAccommodationsTitle] = useState("Select an option");
  const [accommodationsDetails, setAccommodationsDetails] = useState("");
  // 125
  const [riskFactors, setRiskFactors] = useState("");
  // 126
  const [educationHistory, setEducationHistory] = useState("");
  // 127-130
  const [computerAccess, setComputerAccess] = useState("");
  const [computerAccessTitle, setComputerAccessTitle] = useState("Select an option");
  const [internetAccess, setInternetAccess] = useState("");
  const [internetAccessTitle, setInternetAccessTitle] = useState("Select an option");
  const [emailRegular, setEmailRegular] = useState("");
  const [emailRegularTitle, setEmailRegularTitle] = useState("Select an option");
  const [applyOnline, setApplyOnline] = useState("");
  const [applyOnlineTitle, setApplyOnlineTitle] = useState("Select an option");
  // 131-132
  const [assistiveTech, setAssistiveTech] = useState("");
  const [assistiveTechTitle, setAssistiveTechTitle] = useState("Select an option");
  const [assistiveTechDetails, setAssistiveTechDetails] = useState("");
  // 133
  const [assistiveEval, setAssistiveEval] = useState("");
  const [assistiveEvalTitle, setAssistiveEvalTitle] = useState("Select an option");
  // 134
  const [mobilityDifficulty, setMobilityDifficulty] = useState("");
  const [mobilityDifficultyTitle, setMobilityDifficultyTitle] = useState("Select an option");
  // 135
  const [mobilitySupport, setMobilitySupport] = useState<string[]>([]);
  const [mobilitySupportTitle, setMobilitySupportTitle] = useState<React.ReactNode>("Select all that apply");
  const [mobilitySupportOther, setMobilitySupportOther] = useState("");
  // 136
  const [visionDifficulty, setVisionDifficulty] = useState("");
  const [visionDifficultyTitle, setVisionDifficultyTitle] = useState("Select an option");
  // 137
  const [visionSupport, setVisionSupport] = useState<string[]>([]);
  const [visionSupportTitle, setVisionSupportTitle] = useState<React.ReactNode>("Select all that apply");
  const [visionSupportOther, setVisionSupportOther] = useState("");
  // 138
  const [hearingDifficulty, setHearingDifficulty] = useState("");
  const [hearingDifficultyTitle, setHearingDifficultyTitle] = useState("Select an option");
  // 139
  const [hearingSupport, setHearingSupport] = useState<string[]>([]);
  const [hearingSupportTitle, setHearingSupportTitle] = useState<React.ReactNode>("Select all that apply");
  const [hearingSupportOther, setHearingSupportOther] = useState("");
  // 140
  const [verbalDifficulty, setVerbalDifficulty] = useState("");
  const [verbalDifficultyTitle, setVerbalDifficultyTitle] = useState("Select an option");
  // 141
  const [commSupport, setCommSupport] = useState<string[]>([]);
  const [commSupportTitle, setCommSupportTitle] = useState<React.ReactNode>("Select all that apply");
  const [commSupportOther, setCommSupportOther] = useState("");
  // 142
  const [computerDifficulty, setComputerDifficulty] = useState("");
  const [computerDifficultyTitle, setComputerDifficultyTitle] = useState("Select an option");
  // 143
  const [computerSupport, setComputerSupport] = useState<string[]>([]);
  const [computerSupportTitle, setComputerSupportTitle] = useState<React.ReactNode>("Select all that apply");
  const [computerSupportOther, setComputerSupportOther] = useState("");
  // 144
  const [mdrs, setMdrs] = useState("");
  const [mdrsTitle, setMdrsTitle] = useState("Select an option");
  // 145
  const [mdrsContact, setMdrsContact] = useState("");
  // 146
  const [cieServices, setCieServices] = useState<string[]>([]);
  const [cieServicesTitle, setCieServicesTitle] = useState<React.ReactNode>("Select all that apply");
  // 147
  const [cieComments, setCieComments] = useState("");

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 14 - Vocational & Accessibility
      </h2>
      <form className="my-8">
        {/* 119 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Vocational Counselor: For participants who have worked before, list their work history for the last 15 years. <br />
            <span className="font-normal text-sm">Start with the most recent job. For each work entry, please include the following information: Employer & Job Title, Wage, Years Worked, Tasks, and Reason for Leaving.</span>
          </label>
          <textarea
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={workHistory}
            onChange={e => setWorkHistory(e.target.value)}
            placeholder="Long answer"
            rows={4}
          />
        </div>
        {/* 120 */}
        <MultiSelectDropdown
          label="Did your most recent job… (Select all that apply)"
          options={MULTI_120}
          selections={jobRecentMulti}
          setSelections={setJobRecentMulti}
          dropdownTitle={jobRecentMultiTitle}
          setDropdownTitle={setJobRecentMultiTitle}
        />
        {/* 121 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            How physically demanding was your most recent job?
          </label>
          <DropdownMenu title={physicalDemandTitle}>
            {(close) =>
              PHYSICAL_DEMAND_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    physicalDemand === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setPhysicalDemand(option.value);
                    setPhysicalDemandTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 122 */}
        <MultiSelectDropdown
          label="Which of the following symptoms associated with Long COVID Syndrome affect your ability to work? (Select all that apply)"
          options={MULTI_122}
          selections={symptoms}
          setSelections={setSymptoms}
          dropdownTitle={symptomsTitle}
          setDropdownTitle={setSymptomsTitle}
          showOtherInput
          otherValue={symptomsOther}
          setOtherValue={setSymptomsOther}
        />
        {/* 123 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Are you currently using disability-related accommodations at work?
          </label>
          <DropdownMenu title={usingAccommodationsTitle}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    usingAccommodations === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setUsingAccommodations(option.value);
                    setUsingAccommodationsTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 124 */}
        {usingAccommodations === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              If yes, please specify:
            </label>
            <textarea
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={accommodationsDetails}
              onChange={e => setAccommodationsDetails(e.target.value)}
              placeholder="Long answer"
              rows={3}
            />
          </div>
        )}
        {/* 125 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Please list any other risk factors that may inhibit your ability to work.
          </label>
          <textarea
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={riskFactors}
            onChange={e => setRiskFactors(e.target.value)}
            placeholder="Long answer"
            rows={3}
          />
        </div>
        {/* 126 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Education History: Please list the schools/colleges/universities you have attended below. <br />
            <span className="font-normal text-sm">Start with the most recent. For each entry, please provide the following: Name of School, Years Attended (YYYY-YYYY) and the Certification / Degree you earned.</span>
          </label>
          <textarea
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={educationHistory}
            onChange={e => setEducationHistory(e.target.value)}
            placeholder="Long answer"
            rows={4}
          />
        </div>
        {/* 127-130 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Do you have access to a computer/laptop?
          </label>
          <DropdownMenu title={computerAccessTitle}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    computerAccess === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setComputerAccess(option.value);
                    setComputerAccessTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Do you have access to the internet?
          </label>
          <DropdownMenu title={internetAccessTitle}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    internetAccess === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setInternetAccess(option.value);
                    setInternetAccessTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Do you use email regularly?
          </label>
          <DropdownMenu title={emailRegularTitle}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    emailRegular === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setEmailRegular(option.value);
                    setEmailRegularTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Are you able to apply for jobs online?
          </label>
          <DropdownMenu title={applyOnlineTitle}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    applyOnline === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setApplyOnline(option.value);
                    setApplyOnlineTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 131 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Are you currently using any assistive technology or adaptive equipment to help with work or daily activities?
          </label>
          <DropdownMenu title={assistiveTechTitle}>
            {(close) =>
              YES_NO_NOT_SURE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    assistiveTech === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setAssistiveTech(option.value);
                    setAssistiveTechTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 132 */}
        {assistiveTech === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              If yes, please specify.
            </label>
            <textarea
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={assistiveTechDetails}
              onChange={e => setAssistiveTechDetails(e.target.value)}
              placeholder="N/A"
              rows={3}
            />
          </div>
        )}
        {/* 133 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Have you previously been evaluated for assistive technology needs?
          </label>
          <DropdownMenu title={assistiveEvalTitle}>
            {(close) =>
              YES_NO_NOT_SURE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    assistiveEval === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setAssistiveEval(option.value);
                    setAssistiveEvalTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 134 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Do you have difficulty with mobility or physical access at work (e.g., reaching, standing, or moving between workspaces)?
          </label>
          <DropdownMenu title={mobilityDifficultyTitle}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    mobilityDifficulty === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setMobilityDifficulty(option.value);
                    setMobilityDifficultyTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 135 */}
        <MultiSelectDropdown
          label="Do you require any of the following to assist you with mobility or access? (Select all that apply)"
          options={MULTI_135}
          selections={mobilitySupport}
          setSelections={setMobilitySupport}
          dropdownTitle={mobilitySupportTitle}
          setDropdownTitle={setMobilitySupportTitle}
          showOtherInput
          otherValue={mobilitySupportOther}
          setOtherValue={setMobilitySupportOther}
        />
        {/* 136 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Do you have difficulty reading printed or digital materials due to vision impairments?
          </label>
          <DropdownMenu title={visionDifficultyTitle}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    visionDifficulty === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setVisionDifficulty(option.value);
                    setVisionDifficultyTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 137 */}
        <MultiSelectDropdown
          label="Do you use or need any of the following for vision support? (Select all that apply)"
          options={MULTI_137}
          selections={visionSupport}
          setSelections={setVisionSupport}
          dropdownTitle={visionSupportTitle}
          setDropdownTitle={setVisionSupportTitle}
          showOtherInput
          otherValue={visionSupportOther}
          setOtherValue={setVisionSupportOther}
        />
        {/* 138 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Do you have difficulty hearing conversations, alarms, or other sounds in the workplace?
          </label>
          <DropdownMenu title={hearingDifficultyTitle}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    hearingDifficulty === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setHearingDifficulty(option.value);
                    setHearingDifficultyTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 139 */}
        <MultiSelectDropdown
          label="Do you use or need any of the following for hearing support? (Select all that apply)"
          options={MULTI_139}
          selections={hearingSupport}
          setSelections={setHearingSupport}
          dropdownTitle={hearingSupportTitle}
          setDropdownTitle={setHearingSupportTitle}
          showOtherInput
          otherValue={hearingSupportOther}
          setOtherValue={setHearingSupportOther}
        />
        {/* 140 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Do you have difficulty with verbal communication?
          </label>
          <DropdownMenu title={verbalDifficultyTitle}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    verbalDifficulty === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setVerbalDifficulty(option.value);
                    setVerbalDifficultyTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 141 */}
        <MultiSelectDropdown
          label="Do you use or need any of the following for communication support? (Select all that apply)"
          options={MULTI_141}
          selections={commSupport}
          setSelections={setCommSupport}
          dropdownTitle={commSupportTitle}
          setDropdownTitle={setCommSupportTitle}
          showOtherInput
          otherValue={commSupportOther}
          setOtherValue={setCommSupportOther}
        />
        {/* 142 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Do you have difficulty using a standard keyboard, mouse, or touch screen?
          </label>
          <DropdownMenu title={computerDifficultyTitle}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    computerDifficulty === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setComputerDifficulty(option.value);
                    setComputerDifficultyTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 143 */}
        <MultiSelectDropdown
          label="Do you use or need any of the following for computer access? (Select all that apply)"
          options={MULTI_143}
          selections={computerSupport}
          setSelections={setComputerSupport}
          dropdownTitle={computerSupportTitle}
          setDropdownTitle={setComputerSupportTitle}
          showOtherInput
          otherValue={computerSupportOther}
          setOtherValue={setComputerSupportOther}
        />
        {/* 144 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Are you registered with the Mississippi Department of Rehabilitation Services (MDRS)?
          </label>
          <DropdownMenu title={mdrsTitle}>
            {(close) =>
              MDRS_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    mdrs === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setMdrs(option.value);
                    setMdrsTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 145 */}
        {mdrs === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Please provide the name and contact information (phone and email address) of your MDRS counselor if possible.
            </label>
            <textarea
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={mdrsContact}
              onChange={e => setMdrsContact(e.target.value)}
              placeholder="Long answer"
              rows={3}
            />
          </div>
        )}
        {/* 146 */}
        <MultiSelectDropdown
          label="Based on the information learned today, the participant will need to receive the following competitive integrated employment (CIE) services through CHP:"
          options={CIE_OPTIONS}
          selections={cieServices}
          setSelections={setCieServices}
          dropdownTitle={cieServicesTitle}
          setDropdownTitle={setCieServicesTitle}
        />
        {/* 147 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            If needed, please provide additional comments or notes about the CIE services the participant will need to receive below.
          </label>
          <textarea
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={cieComments}
            onChange={e => setCieComments(e.target.value)}
            placeholder="Long answer"
            rows={3}
          />
        </div>
      </form>
    </div>
  );
};

export default SectionFourteen;