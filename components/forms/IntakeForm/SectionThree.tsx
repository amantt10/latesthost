"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import DropdownMenu from "@/components/DropdownMenu";

const RACE_OPTIONS = [
  { value: "american-indian", label: "American Indian or Alaskan Native" },
  { value: "asian", label: "Asian" },
  { value: "black", label: "Black or African American" },
  { value: "hispanic", label: "Hispanic or Latino" },
  { value: "pacific-islander", label: "Native Hawaiian or Other Pacific Islander" },
  { value: "white", label: "White" },
  { value: "not-identified", label: "Didn't self-identify" },
];

const EDUCATION_OPTIONS = [
  { value: "less-hs", label: "Less than a high school diploma" },
  { value: "hs-certificate", label: "High school certificate of completion" },
  { value: "hs-diploma", label: "High school diploma / GED" },
  { value: "some-college", label: "Some college, no degree" },
  { value: "trade", label: "Trade/Technical/Vocational Training" },
  { value: "occupational", label: "Occupational Certificate/License or 2-year college degree" },
  { value: "bachelor", label: "4-year college degree (bachelor's degree)" },
  { value: "post-grad", label: "Post-graduate degree (master's, doctorate, professional)" },
];

const MILITARY_BRANCHES = [
  { value: "army", label: "Army" },
  { value: "navy", label: "Navy" },
  { value: "air-force", label: "Air Force" },
  { value: "marine-corps", label: "Marine Corps" },
  { value: "coast-guard", label: "Coast Guard" },
  { value: "space-force", label: "Space Force" },
  { value: "national-guard", label: "National Guard / Reserves" },
];

const DISCHARGE_OPTIONS = [
  { value: "honorable", label: "Honorable" },
  { value: "general", label: "General" },
  { value: "other-than-honorable", label: "Other-than-honorable" },
  { value: "dishonorable", label: "Dishonorable" },
  { value: "prefer-not", label: "Prefer not to answer" },
  { value: "other", label: "Other (fill in blank)" },
];

const SectionThree = ({ step }: { step: string }) => {
  const [sex, setSex] = useState("male");
  const [sexDropdownTitle, setSexDropdownTitle] = useState("Male");

  const [raceSelections, setRaceSelections] = useState<string[]>([]);
  const [raceDropdownTitle, setRaceDropdownTitle] = useState<React.ReactNode>("Select Race/Ethnicity");

  const [education, setEducation] = useState<string>("");
  const [educationDropdownTitle, setEducationDropdownTitle] = useState("Select Highest Level of Education");

  const [military, setMilitary] = useState<string>("");
  const [militaryDropdownTitle, setMilitaryDropdownTitle] = useState("Have you ever served in the military?");

  // Military follow-up states
  const [branches, setBranches] = useState<string[]>([]);
  const [branchesDropdownTitle, setBranchesDropdownTitle] = useState<React.ReactNode>("Select Branch(es)");
  const [serviceFrom, setServiceFrom] = useState("");
  const [serviceTo, setServiceTo] = useState("");
  const [discharge, setDischarge] = useState<string>("");
  const [dischargeDropdownTitle, setDischargeDropdownTitle] = useState("Select Discharge Status");
  const [otherDischarge, setOtherDischarge] = useState("");
  const [serviceDateError, setServiceDateError] = useState<string>("");

  const handleSexDropdownSelect = (value: string, label: string) => {
    setSex(value);
    setSexDropdownTitle(label);
  };

  const handleRaceToggle = (value: string, label: string, close: () => void) => {
    let updatedSelections: string[];
    if (raceSelections.includes(value)) {
      updatedSelections = raceSelections.filter((v) => v !== value);
    } else {
      updatedSelections = [...raceSelections, value];
    }
    setRaceSelections(updatedSelections);

    // If "Didn't self-identify" is selected, clear all others and close
    if (value === "not-identified" && !raceSelections.includes("not-identified")) {
      setRaceSelections(["not-identified"]);
      setRaceDropdownTitle(
        <span className="inline-block border border-gray-300 rounded px-2 py-0.5 text-xs">
          Didn't self-identify
        </span>
      );
      close();
      return;
    }

    // If any other is selected, remove "Didn't self-identify"
    if (value !== "not-identified") {
      updatedSelections = updatedSelections.filter((v) => v !== "not-identified");
      setRaceSelections(updatedSelections);
    }

    // Update dropdown title
    if (updatedSelections.length === 0) {
      setRaceDropdownTitle("Select Race/Ethnicity");
    } else {
      setRaceDropdownTitle(
        <span className="flex flex-wrap gap-2">
          {updatedSelections.map((val) => {
            const label = RACE_OPTIONS.find((opt) => opt.value === val)?.label || val;
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

  const handleEducationSelect = (value: string, label: string, close: () => void) => {
    setEducation(value);
    setEducationDropdownTitle(label);
    close();
  };

  const handleMilitarySelect = (value: string, label: string, close: () => void) => {
    setMilitary(value);
    setMilitaryDropdownTitle(label);
    // Reset follow-up questions if switching to "no"
    if (value !== "yes") {
      setBranches([]);
      setBranchesDropdownTitle("Select Branch(es)");
      setServiceFrom("");
      setServiceTo("");
      setDischarge("");
      setDischargeDropdownTitle("Select Discharge Status");
      setOtherDischarge("");
      setServiceDateError("");
    }
    close();
  };

  // Branches (multi-select)
  const handleBranchToggle = (value: string, label: string, close: () => void) => {
    let updated: string[];
    if (branches.includes(value)) {
      updated = branches.filter((v) => v !== value);
    } else {
      updated = [...branches, value];
    }
    setBranches(updated);

    // Update dropdown title
    if (updated.length === 0) {
      setBranchesDropdownTitle("Select Branch(es)");
    } else {
      setBranchesDropdownTitle(
        <span className="flex flex-wrap gap-2">
          {updated.map((val) => {
            const label = MILITARY_BRANCHES.find((opt) => opt.value === val)?.label || val;
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

  // Discharge status (single select, with "Other" input)
  const handleDischargeSelect = (value: string, label: string, close: () => void) => {
    setDischarge(value);
    setDischargeDropdownTitle(label);
    if (value !== "other") setOtherDischarge("");
    close();
  };

  // Helper for MM/YYYY input with auto-slash and validation
  const handleServiceDateChange = (
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    otherValue?: string,
    isFrom?: boolean
  ) => {
    // Only allow numbers
    let cleaned = value.replace(/[^0-9]/g, "");

    let month = cleaned.slice(0, 2);
    let year = cleaned.slice(2, 6);

    // Enforce MM <= 12 and >= 1
    if (month.length === 2) {
      let m = parseInt(month, 10);
      if (m > 12) month = "12";
      if (m < 1) month = "01";
    }

    // Enforce year is 4 digits
    if (year.length > 4) year = year.slice(0, 4);

    // Compose formatted value with auto-slash
    let formatted = month;
    if (month.length === 2) {
      formatted += "/";
    }
    if (year.length > 0) {
      formatted += year;
    }

    // If both present, check not in future
    if (month.length === 2 && year.length === 4) {
      const now = new Date();
      const inputDate = new Date(Number(year), Number(month) - 1);
      const currentMonth = now.getMonth() + 1;
      const currentYear = now.getFullYear();

      // If input is in the future, set to current month/year
      if (
        Number(year) > currentYear ||
        (Number(year) === currentYear && Number(month) > currentMonth)
      ) {
        const mmNow = String(currentMonth).padStart(2, "0");
        formatted = `${mmNow}/${currentYear}`;
      }
    }

    setValue(formatted);

    // Compare From and To dates if both are present
    let from = isFrom ? formatted : serviceFrom;
    let to = !isFrom ? formatted : serviceTo;
    setServiceDateError(""); // Reset error

    if (
      from.length === 7 &&
      to.length === 7
    ) {
      const [fromMM, fromYYYY] = from.split("/");
      const [toMM, toYYYY] = to.split("/");

      const fromDate = new Date(Number(fromYYYY), Number(fromMM) - 1);
      const toDate = new Date(Number(toYYYY), Number(toMM) - 1);

      if (fromDate > toDate) {
        setServiceDateError("Start date must be before end date.");
      }
    }
  };

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-3xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 3 - Demographics
      </h2>
      <form className="my-8">
        {/* Sex */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700" htmlFor="sex">
            Sex
          </label>
          <DropdownMenu title={sexDropdownTitle}>
            {(close) => (
              <>
                <button
                  type="button"
                  className="text-left w-full px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    handleSexDropdownSelect("male", "Male");
                    close();
                  }}
                >
                  Male
                </button>
                <button
                  type="button"
                  className="text-left w-full px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    handleSexDropdownSelect("female", "Female");
                    close();
                  }}
                >
                  Female
                </button>
                <button
                  type="button"
                  className="text-left w-full px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    handleSexDropdownSelect("not-identified", "Didn't self-identify");
                    close();
                  }}
                >
                  Didn't self-identify
                </button>
              </>
            )}
          </DropdownMenu>
        </div>
        {/* Race/Ethnicity */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700" htmlFor="race">
            Race/Ethnicity
          </label>
          <DropdownMenu title={raceDropdownTitle}>
            {(close) => (
              <div>
                {RACE_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`flex items-center w-full px-4 py-2 hover:bg-gray-100 ${
                      raceSelections.includes(option.value) ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => handleRaceToggle(option.value, option.label, close)}
                  >
                    <input
                      type="checkbox"
                      checked={raceSelections.includes(option.value)}
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
        {/* Education */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700" htmlFor="education">
            Highest Level of Education
          </label>
          <DropdownMenu title={educationDropdownTitle}>
            {(close) => (
              <>
                {EDUCATION_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      education === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => handleEducationSelect(option.value, option.label, close)}
                  >
                    {option.label}
                  </button>
                ))}
              </>
            )}
          </DropdownMenu>
        </div>
        {/* Military */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700" htmlFor="military">
            Have you ever served in the military?
          </label>
          <DropdownMenu title={militaryDropdownTitle}>
            {(close) => (
              <>
                <button
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    military === "yes" ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => handleMilitarySelect("yes", "Yes", close)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    military === "no" ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => handleMilitarySelect("no", "No", close)}
                >
                  No
                </button>
              </>
            )}
          </DropdownMenu>
        </div>
        {/* Military follow-up questions */}
        {military === "yes" && (
          <>
            {/* Branches */}
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700" htmlFor="branches">
                Which branch of the military did you serve in? (Select all that apply)
              </label>
              <DropdownMenu title={branchesDropdownTitle}>
                {(close) => (
                  <div>
                    {MILITARY_BRANCHES.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`flex items-center w-full px-4 py-2 hover:bg-gray-100 ${
                          branches.includes(option.value) ? "bg-gray-100 font-semibold" : ""
                        }`}
                        onClick={() => handleBranchToggle(option.value, option.label, close)}
                      >
                        <input
                          type="checkbox"
                          checked={branches.includes(option.value)}
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
            {/* Dates of service */}
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                What were the dates of your military service?
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="From: MM/YYYY"
                  className="border border-gray-300 rounded px-3 py-2 w-40"
                  value={serviceFrom}
                  onChange={e =>
                    handleServiceDateChange(e.target.value, setServiceFrom, serviceTo, true)
                  }
                  maxLength={7}
                />
                <span>to</span>
                <input
                  type="text"
                  placeholder="To: MM/YYYY"
                  className="border border-gray-300 rounded px-3 py-2 w-40"
                  value={serviceTo}
                  onChange={e =>
                    handleServiceDateChange(e.target.value, setServiceTo, serviceFrom, false)
                  }
                  maxLength={7}
                />
              </div>
              {serviceDateError && (
                <div className="text-red-600 text-sm mt-2">{serviceDateError}</div>
              )}
            </div>
            {/* Discharge status */}
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                What was your discharge status?
              </label>
              <DropdownMenu title={dischargeDropdownTitle}>
                {(close) => (
                  <>
                    {DISCHARGE_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                          discharge === option.value ? "bg-gray-100 font-semibold" : ""
                        }`}
                        onClick={() => handleDischargeSelect(option.value, option.label, close)}
                      >
                        {option.label}
                      </button>
                    ))}
                  </>
                )}
              </DropdownMenu>
              {discharge === "other" && (
                <input
                  type="text"
                  className="mt-2 border border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Please specify"
                  value={otherDischarge}
                  onChange={e => setOtherDischarge(e.target.value)}
                />
              )}
            </div>
          </>
        )}

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
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

export default SectionThree;