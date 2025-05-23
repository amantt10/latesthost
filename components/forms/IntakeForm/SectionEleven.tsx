"use client";

import React, { useState } from "react";
import DropdownMenu from "@/components/DropdownMenu";

const YES_NO_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const JOB_SATISFACTION_OPTIONS = [
  { value: "1", label: "1 - Very dissatisfied" },
  { value: "2", label: "2 - Dissatisfied" },
  { value: "3", label: "3 - Neutral" },
  { value: "4", label: "4 - Satisfied" },
  { value: "5", label: "5 - Very satisfied" },
];

const JOB_MATCH_OPTIONS = [
  { value: "1", label: "1 - Does not match at all" },
  { value: "2", label: "2" },
  { value: "3", label: "3 - Reasonably good match" },
  { value: "4", label: "4" },
  { value: "5", label: "5 - Perfect match" },
];

const JOB_PERFORMANCE_OPTIONS = [
  { value: "1", label: "1 - Very Poor" },
  { value: "2", label: "2 - Poor" },
  { value: "3", label: "3 - Adequate" },
  { value: "4", label: "4 - Good" },
  { value: "5", label: "5 - Excellent" },
];

const JOB_PREFERENCE_OPTIONS = [
  { value: "SJSE", label: "Same Job, Same Employer (SJSE)" },
  { value: "DJSE", label: "Different Job, Same Employer (DJSE)" },
  { value: "SJDE", label: "Same Job, Different Employer (SJDE)" },
  { value: "DJDE", label: "Different Job, Different Employer (DJDE)" },
];

const SectionEleven = ({ step }: { step: string }) => {
  const [companyName, setCompanyName] = useState("");
  const [mailingAddress, setMailingAddress] = useState("");
  const [employerContact, setEmployerContact] = useState("");
  const [primaryPhone, setPrimaryPhone] = useState("");
  const [primaryPhoneError, setPrimaryPhoneError] = useState("");
  const [email, setEmail] = useState("");
  const [employmentDuration, setEmploymentDuration] = useState("");
  const [wage, setWage] = useState("");
  const [lastWorked, setLastWorked] = useState("");
  const [hoursBefore, setHoursBefore] = useState("");
  const [hoursAfter, setHoursAfter] = useState("");
  const [dissatisfied, setDissatisfied] = useState("");
  const [dissatisfiedTitle, setDissatisfiedTitle] = useState("Select an option");
  const [dissatisfiedExplain, setDissatisfiedExplain] = useState("");
  const [jobSatisfaction, setJobSatisfaction] = useState("");
  const [jobSatisfactionTitle, setJobSatisfactionTitle] = useState("Select satisfaction");
  const [jobMatch, setJobMatch] = useState("");
  const [jobMatchTitle, setJobMatchTitle] = useState("Select match");
  const [jobPerformance, setJobPerformance] = useState("");
  const [jobPerformanceTitle, setJobPerformanceTitle] = useState("Select performance");
  const [continueWithEmployer, setContinueWithEmployer] = useState("");
  const [continueWithEmployerTitle, setContinueWithEmployerTitle] = useState("Select an option");
  const [exploreOtherJobs, setExploreOtherJobs] = useState("");
  const [exploreOtherJobsTitle, setExploreOtherJobsTitle] = useState("Select an option");
  const [jobPreference, setJobPreference] = useState("");
  const [jobPreferenceTitle, setJobPreferenceTitle] = useState("Select preference");
  const [otherEmployerDetails, setOtherEmployerDetails] = useState("");

  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPrimaryPhone(value);
    setPrimaryPhoneError(value && !phoneRegex.test(value) ? "Format: XXX-XXX-XXXX" : "");
  };

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 11 - Employer & Job Information
      </h2>
      <form className="my-8">
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Employer's Company Name
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={companyName}
            onChange={e => setCompanyName(e.target.value)}
            placeholder="N/A"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Mailing Address ( # and Street Name OR P.O. Box #; City, State, Zip Code)
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={mailingAddress}
            onChange={e => setMailingAddress(e.target.value)}
            placeholder="N/A"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Employer Contact Person (First and Last Name)
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={employerContact}
            onChange={e => setEmployerContact(e.target.value)}
            placeholder="N/A"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Primary Phone Number: (XXX-XXX-XXXX)
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={primaryPhone}
            onChange={handlePhoneChange}
            placeholder="XXX-XXX-XXXX"
            maxLength={12}
          />
          {primaryPhoneError && (
            <span className="text-red-600 text-sm">{primaryPhoneError}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="N/A"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            How long have you been employed at your current job?
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={employmentDuration}
            onChange={e => setEmploymentDuration(e.target.value)}
            placeholder="N/A"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            What is your hourly wage or salary at your current job?
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={wage}
            onChange={e => setWage(e.target.value)}
            placeholder="N/A"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            When did you last work?
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={lastWorked}
            onChange={e => setLastWorked(e.target.value)}
            placeholder="N/A"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            How many hours per week did you typically work before you acquired a disability?
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={hoursBefore}
            onChange={e => setHoursBefore(e.target.value)}
            placeholder="N/A"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            How many hours per week have you worked since you acquired a disability?
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={hoursAfter}
            onChange={e => setHoursAfter(e.target.value)}
            placeholder="N/A"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Are you dissatisfied or in conflict with your current employer?
          </label>
          <DropdownMenu title={dissatisfiedTitle}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    dissatisfied === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setDissatisfied(option.value);
                    setDissatisfiedTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {dissatisfied === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              If yes, please explain.
            </label>
            <textarea
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={dissatisfiedExplain}
              onChange={e => setDissatisfiedExplain(e.target.value)}
              placeholder="N/A"
              rows={3}
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            How satisfied are you with your current job?
          </label>
          <DropdownMenu title={jobSatisfactionTitle}>
            {(close) =>
              JOB_SATISFACTION_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    jobSatisfaction === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setJobSatisfaction(option.value);
                    setJobSatisfactionTitle(option.label);
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
            How closely does your current job match your personal skills and preferences?
          </label>
          <DropdownMenu title={jobMatchTitle}>
            {(close) =>
              JOB_MATCH_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    jobMatch === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setJobMatch(option.value);
                    setJobMatchTitle(option.label);
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
            In general, how would you describe your job performance at your current job?
          </label>
          <DropdownMenu title={jobPerformanceTitle}>
            {(close) =>
              JOB_PERFORMANCE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    jobPerformance === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setJobPerformance(option.value);
                    setJobPerformanceTitle(option.label);
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
            Are you interested in continuing to work with your current employer?
          </label>
          <DropdownMenu title={continueWithEmployerTitle}>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    continueWithEmployer === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setContinueWithEmployer(option.value);
                    setContinueWithEmployerTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {continueWithEmployer === "yes" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              If you were unable to continue working in your current position, are you willing to explore other job positions with your current employer?
            </label>
            <DropdownMenu title={exploreOtherJobsTitle}>
              {(close) =>
                YES_NO_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      exploreOtherJobs === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setExploreOtherJobs(option.value);
                      setExploreOtherJobsTitle(option.label);
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
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            As you continue to work, what is your preference?
          </label>
          <DropdownMenu title={jobPreferenceTitle}>
            {(close) =>
              JOB_PREFERENCE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    jobPreference === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setJobPreference(option.value);
                    setJobPreferenceTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </div>
        {(jobPreference === "SJDE" || jobPreference === "DJDE") && (
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              If you prefer to work with a different employer, please specify the positions, hours and responsibilities you prefer.
            </label>
            <textarea
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={otherEmployerDetails}
              onChange={e => setOtherEmployerDetails(e.target.value)}
              placeholder="N/A"
              rows={3}
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default SectionEleven;