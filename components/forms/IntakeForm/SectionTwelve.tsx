"use client";
import React, { useState } from "react";
import DropdownMenu from "@/components/DropdownMenu";

const LAST_WORKED_OPTIONS = [
  { value: "never", label: "I've never worked before" },
  { value: "other", label: "Other (fill in the blank)" },
];

const YES_NO_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const JOB_PREFERENCE_OPTIONS = [
  { value: "SJSE", label: "Same Job, Same Employer (SJSE)" },
  { value: "DJSE", label: "Different Job, Same Employer (DJSE)" },
  { value: "SJDE", label: "Same Job, Different Employer (SJDE)" },
  { value: "DJDE", label: "Different Job, Different Employer (DJDE)" },
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

const SectionTwelve = ({ step }: { step: string }) => {
  const [lastWorked, setLastWorked] = useState("");
  const [lastWorkedTitle, setLastWorkedTitle] = useState("Select an option");
  const [lastWorkedOther, setLastWorkedOther] = useState("");
  const [wage, setWage] = useState("");
  const [hours, setHours] = useState("");
  const [returnToEmployer, setReturnToEmployer] = useState("");
  const [returnToEmployerTitle, setReturnToEmployerTitle] = useState("Select an option");
  const [exploreOtherJobs, setExploreOtherJobs] = useState("");
  const [exploreOtherJobsTitle, setExploreOtherJobsTitle] = useState("Select an option");
  const [jobPreference, setJobPreference] = useState("");
  const [jobPreferenceTitle, setJobPreferenceTitle] = useState("Select preference");
  const [otherEmployerDetails, setOtherEmployerDetails] = useState("");
  const [jobSatisfaction, setJobSatisfaction] = useState("");
  const [jobSatisfactionTitle, setJobSatisfactionTitle] = useState("Select satisfaction");
  const [jobMatch, setJobMatch] = useState("");
  const [jobMatchTitle, setJobMatchTitle] = useState("Select match");
  const [jobPerformance, setJobPerformance] = useState("");
  const [jobPerformanceTitle, setJobPerformanceTitle] = useState("Select performance");

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 12 - Previous Employment
      </h2>
      <form className="my-8">
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            When did you last work?
          </label>
          <DropdownMenu title={lastWorkedTitle}>
            {(close) =>
              LAST_WORKED_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    lastWorked === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setLastWorked(option.value);
                    setLastWorkedTitle(option.label);
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
          {lastWorked === "other" && (
            <input
              type="text"
              className="mt-2 border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Please specify"
              value={lastWorkedOther}
              onChange={e => setLastWorkedOther(e.target.value)}
            />
          )}
        </div>
        {lastWorked !== "never" && (
          <>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                What was your hourly wage or salary at your most recent job?
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
                How many hours per week did you typically work in your most recent job before you acquired a disability?
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={hours}
                onChange={e => setHours(e.target.value)}
                placeholder="N/A"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Are you interested in returning to work with your most recent employer?
              </label>
              <DropdownMenu title={returnToEmployerTitle}>
                {(close) =>
                  YES_NO_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                        returnToEmployer === option.value ? "bg-gray-100 font-semibold" : ""
                      }`}
                      onClick={() => {
                        setReturnToEmployer(option.value);
                        setReturnToEmployerTitle(option.label);
                        close();
                      }}
                    >
                      {option.label}
                    </button>
                  ))
                }
              </DropdownMenu>
            </div>
            {returnToEmployer === "yes" && (
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">
                  If you were unable to return to working in your previous position, are you willing to explore other job positions with your most recent employer?
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
                As you return to work, what is your preference?
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
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                How satisfied were you with your most recent job?
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
                How closely did your most recent job match your personal skills and preferences?
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
                In general, how would you describe your job performance at your most recent job?
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
          </>
        )}
      </form>
    </div>
  );
};

export default SectionTwelve;