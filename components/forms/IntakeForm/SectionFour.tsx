"use client";

import React, { useState } from "react";
import DropdownMenu from "@/components/DropdownMenu";

const YES_NO_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const SSDI_OPTIONS = YES_NO_OPTIONS;
const SSI_OPTIONS = YES_NO_OPTIONS;
const SHORT_TERM_DISABILITY_OPTIONS = YES_NO_OPTIONS;

const LEAVE_OPTIONS = [
  { value: "sick", label: "Sick Leave" },
  { value: "long-term", label: "Long-term Disability" },
  { value: "fmla", label: "Family Medical Leave" },
];

const TRANSPORT_OPTIONS = [
  { value: "license", label: "I have a driver's license" },
  { value: "vehicle", label: "I have a reliable vehicle and will drive myself" },
  { value: "family", label: "I will ride with a family member or friend" },
  { value: "public", label: "I will use public transportation (bus, train, etc.)" },
  { value: "rideshare", label: "I will use a ride-sharing service (e.g., Uber, Lyft)" },
  { value: "paratransit", label: "I will use a paratransit service (e.g., accessible transportation for individuals with disabilities)" },
  { value: "walk", label: "I will walk or bike" },
  { value: "none", label: "I currently have no transportation to work" },
  { value: "other", label: "Other (fill in the blank)" },
];

const RELATIONSHIP_OPTIONS = [
  { value: "married", label: "Married / Partnership" },
  { value: "divorced", label: "Divorced" },
  { value: "separated", label: "Separated" },
  { value: "widowed", label: "Widowed / Widower" },
  { value: "single", label: "Single" },
  { value: "other", label: "Other (fill in the blank)" },
];

const CAREGIVER_OPTIONS = [
  { value: "minor", label: "Minor child/children" },
  { value: "family", label: "Family member - elderly/disabled" },
  { value: "neither", label: "Neither" },
];

const RESIDENCE_OPTIONS = [
  { value: "owned", label: "House - owned" },
  { value: "rented", label: "House - rented" },
  { value: "apartment", label: "Apartment" },
  { value: "mobile", label: "Mobile Home" },
  { value: "with-friend", label: "Living with a friend or family member" },
  { value: "homeless", label: "Homeless" },
  { value: "other", label: "Other (fill in the blank)" },
];

const ECONOMIC_PROBLEM_OPTIONS = YES_NO_OPTIONS;
const BASIC_NEEDS_OPTIONS = YES_NO_OPTIONS;

const GOVT_BENEFIT_OPTIONS = [
  { value: "receiving", label: "Yes, I am currently receiving" },
  { value: "applied", label: "Yes, I have applied" },
  { value: "no", label: "No" },
];

const CRIME_OPTIONS = YES_NO_OPTIONS;
const CRIME_TYPE_OPTIONS = [
  { value: "felony", label: "Felony conviction(s)" },
  { value: "misdemeanor", label: "Misdemeanor conviction(s)" },
  { value: "drug", label: "Drug- or alcohol-related offense" },
  { value: "other", label: "Other (fill in the blank)" },
];
const PROBATION_OPTIONS = YES_NO_OPTIONS;
const INCARCERATED_OPTIONS = YES_NO_OPTIONS;

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

const SectionFour = ({ step }: { step: string }) => {
  // State for each question
  const [ssdi, setSsdi] = useState("");
  const [ssdiTitle, setSsdiTitle] = useState("Select an option");
  const [appliedSsdi, setAppliedSsdi] = useState("");
  const [appliedSsdiTitle, setAppliedSsdiTitle] = useState("Select an option");
  const [ssi, setSsi] = useState("");
  const [ssiTitle, setSsiTitle] = useState("Select an option");
  const [appliedSsi, setAppliedSsi] = useState("");
  const [appliedSsiTitle, setAppliedSsiTitle] = useState("Select an option");
  const [shortTermDisability, setShortTermDisability] = useState("");
  const [shortTermDisabilityTitle, setShortTermDisabilityTitle] = useState("Select an option");
  const [leaveTypes, setLeaveTypes] = useState<string[]>([]);
  const [leaveTypesTitle, setLeaveTypesTitle] = useState<React.ReactNode>("Select all that apply");
  const [transport, setTransport] = useState<string[]>([]);
  const [transportTitle, setTransportTitle] = useState<React.ReactNode>("Select all that apply");
  const [transportOther, setTransportOther] = useState("");
  const [relationship, setRelationship] = useState("");
  const [relationshipTitle, setRelationshipTitle] = useState("Select relationship");
  const [relationshipOther, setRelationshipOther] = useState("");
  const [caregiver, setCaregiver] = useState<string[]>([]);
  const [caregiverTitle, setCaregiverTitle] = useState<React.ReactNode>("Select all that apply");
  const [residents, setResidents] = useState("");
  const [residenceType, setResidenceType] = useState("");
  const [residenceTypeTitle, setResidenceTypeTitle] = useState("Select residence type");
  const [residenceOther, setResidenceOther] = useState("");
  const [housingProblem, setHousingProblem] = useState("");
  const [housingProblemTitle, setHousingProblemTitle] = useState("Select an option");
  const [safeHousing, setSafeHousing] = useState("");
  const [safeHousingTitle, setSafeHousingTitle] = useState("Select an option");
  const [behindRent, setBehindRent] = useState("");
  const [behindRentTitle, setBehindRentTitle] = useState("Select an option");
  const [eviction, setEviction] = useState("");
  const [evictionTitle, setEvictionTitle] = useState("Select an option");
  const [atRiskHousing, setAtRiskHousing] = useState("");
  const [atRiskHousingTitle, setAtRiskHousingTitle] = useState("Select an option");
  const [housingHelp, setHousingHelp] = useState("");
  const [housingHelpTitle, setHousingHelpTitle] = useState("Select an option");
  const [economicProblem, setEconomicProblem] = useState("");
  const [economicProblemTitle, setEconomicProblemTitle] = useState("Select an option");
  const [financialHardship, setFinancialHardship] = useState("");
  const [financialHardshipTitle, setFinancialHardshipTitle] = useState("Select an option");
  const [foodAssistance, setFoodAssistance] = useState("");
  const [foodAssistanceTitle, setFoodAssistanceTitle] = useState("Select an option");
  const [basicNeeds, setBasicNeeds] = useState("");
  const [basicNeedsTitle, setBasicNeedsTitle] = useState("Select an option");
  const [basicNeedsDetails, setBasicNeedsDetails] = useState("");
  const [govtBenefit, setGovtBenefit] = useState("");
  const [govtBenefitTitle, setGovtBenefitTitle] = useState("Select an option");
  const [govtBenefitReceiving, setGovtBenefitReceiving] = useState("");
  const [govtBenefitApplied, setGovtBenefitApplied] = useState("");
  const [convicted, setConvicted] = useState("");
  const [convictedTitle, setConvictedTitle] = useState("Select an option");
  const [crimeTypes, setCrimeTypes] = useState<string[]>([]);
  const [crimeTypesTitle, setCrimeTypesTitle] = useState<React.ReactNode>("Select all that apply");
  const [crimeOther, setCrimeOther] = useState("");
  const [crimeDetails, setCrimeDetails] = useState("");
  const [probation, setProbation] = useState("");
  const [probationTitle, setProbationTitle] = useState("Select an option");
  const [incarcerated, setIncarcerated] = useState("");
  const [incarceratedTitle, setIncarceratedTitle] = useState("Select an option");
  const [incarcerationDates, setIncarcerationDates] = useState("");

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 4 - Social, Economic & Legal
      </h2>
      <form className="my-8">
        {/* 17 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Are you currently receiving Social Security Disability Insurance (SSDI) benefits?
          </label>
          <DropdownMenu title={ssdiTitle}>
            {(close) =>
              SSDI_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    ssdi === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setSsdi(option.value);
                    setSsdiTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 18 */}
        {ssdi !== "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Have you applied for Social Security Disability Insurance (SSDI) benefits?
            </label>
            <DropdownMenu title={appliedSsdiTitle}>
              {(close) =>
                YES_NO_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      appliedSsdi === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setAppliedSsdi(option.value);
                      setAppliedSsdiTitle(option.label);
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </div>
        )}
        {/* 19 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Are you currently receiving Supplemental Security Income (SSI) Benefits?
          </label>
          <DropdownMenu title={ssiTitle}>
            {(close) =>
              SSI_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    ssi === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setSsi(option.value);
                    setSsiTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 20 */}
        {ssi !== "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Have you applied for Supplemental Security Income (SSI) benefits?
            </label>
            <DropdownMenu title={appliedSsiTitle}>
              {(close) =>
                YES_NO_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      appliedSsi === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setAppliedSsi(option.value);
                      setAppliedSsiTitle(option.label);
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </div>
        )}
        {/* 21 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Are you currently receiving short-term disability benefits through your employer?
          </label>
          <DropdownMenu title={shortTermDisabilityTitle}>
            {(close) =>
              SHORT_TERM_DISABILITY_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    shortTermDisability === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setShortTermDisability(option.value);
                    setShortTermDisabilityTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 22 */}
        <MultiSelectDropdown
          label="Other than short-term disability benefits, are you using any of the following types of leave through your employer when needing to miss work due to your acquired disability?"
          options={LEAVE_OPTIONS}
          selections={leaveTypes}
          setSelections={setLeaveTypes}
          dropdownTitle={leaveTypesTitle}
          setDropdownTitle={setLeaveTypesTitle}
        />
        {/* 23 */}
        <MultiSelectDropdown
          label="For transportation to work (Select all that apply):"
          options={TRANSPORT_OPTIONS}
          selections={transport}
          setSelections={setTransport}
          dropdownTitle={transportTitle}
          setDropdownTitle={setTransportTitle}
          showOtherInput
          otherValue={transportOther}
          setOtherValue={setTransportOther}
        />
        {/* 24 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Relationship Status
          </label>
          <DropdownMenu title={relationshipTitle}>
            {(close) =>
              RELATIONSHIP_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    relationship === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setRelationship(option.value);
                    setRelationshipTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
          {relationship === "other" && (
            <input
              type="text"
              className="mt-2 border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Please specify"
              value={relationshipOther}
              onChange={e => setRelationshipOther(e.target.value)}
            />
          )}
        </div>
        {/* 25 */}
        <MultiSelectDropdown
          label="Are you currently a primary caregiver for one of the following? (Select all that apply)"
          options={CAREGIVER_OPTIONS}
          selections={caregiver}
          setSelections={setCaregiver}
          dropdownTitle={caregiverTitle}
          setDropdownTitle={setCaregiverTitle}
        />
        {/* 26 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Including you, how many people live in your home?
          </label>
          <input
            type="number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={residents}
            onChange={e => setResidents(e.target.value)}
            min={1}
            placeholder="Number"
          />
        </div>
        {/* 27 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Type of Residence
          </label>
          <DropdownMenu title={residenceTypeTitle}>
            {(close) =>
              RESIDENCE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    residenceType === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setResidenceType(option.value);
                    setResidenceTypeTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
          {residenceType === "other" && (
            <input
              type="text"
              className="mt-2 border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Please specify"
              value={residenceOther}
              onChange={e => setResidenceOther(e.target.value)}
            />
          )}
        </div>
        {/* 28 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Do you have any problems related to your housing circumstance?
          </label>
          <DropdownMenu title={housingProblemTitle}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    housingProblem === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setHousingProblem(option.value);
                    setHousingProblemTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 29 */}
        {housingProblem === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Do you feel safe in your current housing situation?
            </label>
            <DropdownMenu title={safeHousingTitle}>
              {(close) =>
                YES_NO_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      safeHousing === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setSafeHousing(option.value);
                      setSafeHousingTitle(option.label);
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </div>
        )}
        {/* 30 */}
        {housingProblem === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Are you behind on rent or mortgage payments?
            </label>
            <DropdownMenu title={behindRentTitle}>
              {(close) =>
                YES_NO_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      behindRent === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setBehindRent(option.value);
                      setBehindRentTitle(option.label);
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </div>
        )}
        {/* 31 */}
        {housingProblem === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Have you received an eviction notice or foreclosure warning?
            </label>
            <DropdownMenu title={evictionTitle}>
              {(close) =>
                YES_NO_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      eviction === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setEviction(option.value);
                      setEvictionTitle(option.label);
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </div>
        )}
        {/* 32 */}
        {housingProblem === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Are you at risk of losing your housing?
            </label>
            <DropdownMenu title={atRiskHousingTitle}>
              {(close) =>
                YES_NO_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      atRiskHousing === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setAtRiskHousing(option.value);
                      setAtRiskHousingTitle(option.label);
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </div>
        )}
        {/* 33 */}
        {housingProblem === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Do you need help finding affordable housing or applying for housing assistance programs (e.g., Section 8, public housing)?
            </label>
            <DropdownMenu title={housingHelpTitle}>
              {(close) =>
                YES_NO_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      housingHelp === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setHousingHelp(option.value);
                      setHousingHelpTitle(option.label);
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </div>
        )}
        {/* 34 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Do you have problems related to your economic circumstance?
          </label>
          <DropdownMenu title={economicProblemTitle}>
            {(close) =>
              ECONOMIC_PROBLEM_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    economicProblem === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setEconomicProblem(option.value);
                    setEconomicProblemTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 35-38 */}
        {economicProblem === "yes" && (
          <>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Are you experiencing financial hardship due to medical expenses, job loss, or other unexpected costs?
              </label>
              <DropdownMenu title={financialHardshipTitle}>
                {(close) =>
                  YES_NO_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                        financialHardship === option.value ? "bg-gray-100 font-semibold" : ""
                      }`}
                      onClick={() => {
                        setFinancialHardship(option.value);
                        setFinancialHardshipTitle(option.label);
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
                Are you in need of food assistance or help with groceries?
              </label>
              <DropdownMenu title={foodAssistanceTitle}>
                {(close) =>
                  YES_NO_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                        foodAssistance === option.value ? "bg-gray-100 font-semibold" : ""
                      }`}
                      onClick={() => {
                        setFoodAssistance(option.value);
                        setFoodAssistanceTitle(option.label);
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
                Do you have concerns about paying for other basic needs (e.g., utilities, transportation, childcare, healthcare)?
              </label>
              <DropdownMenu title={basicNeedsTitle}>
                {(close) =>
                  YES_NO_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                        basicNeeds === option.value ? "bg-gray-100 font-semibold" : ""
                      }`}
                      onClick={() => {
                        setBasicNeeds(option.value);
                        setBasicNeedsTitle(option.label);
                        close();
                      }}
                    >
                      {option.label}
                    </button>
                  ))
                }
              </DropdownMenu>
            </div>
            {basicNeeds === "yes" && (
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">
                  Vocational Counselor: If "yes," please note which basic needs the participant has concerns about paying.
                </label>
                <textarea
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  value={basicNeedsDetails}
                  onChange={e => setBasicNeedsDetails(e.target.value)}
                  placeholder="Long answer"
                  rows={3}
                />
              </div>
            )}
          </>
        )}
        {/* 39 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Other than Social Security that we have previously discussed, have you applied for any government benefits (e.g. SNAP, TANF, unemployment, etc.)?
          </label>
          <DropdownMenu title={govtBenefitTitle}>
            {(close) =>
              GOVT_BENEFIT_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    govtBenefit === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setGovtBenefit(option.value);
                    setGovtBenefitTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 40 */}
        {govtBenefit === "receiving" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Please note which government benefit(s) the participant is currently receiving.
            </label>
            <textarea
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={govtBenefitReceiving}
              onChange={e => setGovtBenefitReceiving(e.target.value)}
              placeholder="Long answer"
              rows={3}
            />
          </div>
        )}
        {/* 41 */}
        {govtBenefit === "applied" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Please note which government benefit(s) the participant has applied for.
            </label>
            <textarea
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={govtBenefitApplied}
              onChange={e => setGovtBenefitApplied(e.target.value)}
              placeholder="Long answer"
              rows={3}
            />
          </div>
        )}
        {/* 42 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Have you ever been convicted of a crime? (Do not include minor traffic violations.)
          </label>
          <DropdownMenu title={convictedTitle}>
            {(close) =>
              CRIME_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    convicted === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setConvicted(option.value);
                    setConvictedTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {/* 43 */}
        {convicted === "yes" && (
          <MultiSelectDropdown
            label="What crime(s) have you been convicted of? (Select all that apply)"
            options={CRIME_TYPE_OPTIONS}
            selections={crimeTypes}
            setSelections={setCrimeTypes}
            dropdownTitle={crimeTypesTitle}
            setDropdownTitle={setCrimeTypesTitle}
            showOtherInput
            otherValue={crimeOther}
            setOtherValue={setCrimeOther}
          />
        )}
        {/* 44 */}
        {convicted === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Please explain below. What were you convicted of and when?
            </label>
            <textarea
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={crimeDetails}
              onChange={e => setCrimeDetails(e.target.value)}
              placeholder="Long answer"
              rows={3}
            />
          </div>
        )}
        {/* 45 */}
        {convicted === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Are you currently on probation or parole?
            </label>
            <DropdownMenu title={probationTitle}>
              {(close) =>
                PROBATION_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      probation === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setProbation(option.value);
                      setProbationTitle(option.label);
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </div>
        )}
        {/* 46 */}
        {convicted === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Have you ever been incarcerated?
            </label>
            <DropdownMenu title={incarceratedTitle}>
              {(close) =>
                INCARCERATED_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      incarcerated === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setIncarcerated(option.value);
                      setIncarceratedTitle(option.label);
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </div>
        )}
        {/* 47 */}
        {convicted === "yes" && incarcerated === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              If yes, please provide the dates of incarceration. (From: MM/YYYY To: MM/YYYY)
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={incarcerationDates}
              onChange={e => setIncarcerationDates(e.target.value)}
              placeholder="MM/YYYY - MM/YYYY"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default SectionFour;