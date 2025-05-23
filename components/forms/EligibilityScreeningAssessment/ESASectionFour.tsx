"use client";

import React from "react";
import DropdownMenu from "@/components/DropdownMenu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const YES_NO_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const SYMPTOM_OPTIONS = [
  { value: "fatigue", label: "Chronic fatigue / post-exertional malaise (PEM)" },
  { value: "respiratory", label: "Shortness of breath / respiratory issues" },
  { value: "cardio", label: "Chest pain / cardiovascular symptoms" },
  { value: "headache", label: "Headaches / migraines" },
  { value: "neuro", label: "Neurological symptoms (e.g., dizziness, neuropathy)" },
  { value: "mental", label: "Depression, anxiety, PTSD-like symptoms" },
  { value: "sleep", label: "Sleep disturbances / insomnia" },
  { value: "muscle", label: "Muscle and joint pain" },
  { value: "gi", label: "Gastrointestinal issues" },
  { value: "autonomic", label: "Autonomic dysfunction (e.g., POTS)" },
];

const EMPLOYMENT_OPTIONS = [
  { value: "employed", label: "Employed" },
  { value: "not-employed", label: "Not Employed" },
];

const SUBMINIMUM_WAGE_OPTIONS = [
  { value: "yes", label: "Yes (I'm being paid a subminimum wage)" },
  { value: "no", label: "No (I'm NOT being paid a subminimum wage)" },
];

const WORK_STATUS_OPTIONS = [
  { value: "working", label: "Currently working" },
  { value: "leave", label: "Currently on leave" },
  { value: "other", label: "Other (Fill in text box)" },
];

const DIF_OPTIONS = [
  { value: "yes", label: "Yes (I'm not currently participating)" },
  { value: "no", label: "No (I am currently participating)" },
  { value: "not-sure", label: "Not sure" },
];

const PRESUMPTIVE_ELIGIBILITY_OPTIONS = [
  { value: "yes", label: "Yes (Individual is presumptively eligible for CHP enrollment)" },
  { value: "no", label: "No (Individual is not eligible for CHP enrollment)" },
];

const INITIAL_CONTACT_RESULTS_OPTIONS = [
  { value: "interested-eligible", label: "was reached and was identified as interested and presumptively eligible" },
  { value: "interested-not-eligible", label: "was reached and was identified as interested but not presumptively eligible" },
  { value: "eligible-not-interested", label: "was reached and was identified as presumptively eligible but not interested" },
  { value: "not-reached", label: "was not able to be reached" },
];

const NOT_ELIGIBLE_REASONS = [
  { value: "no-disability", label: "Didn't have a disability accompanied by or resulting from Long COVID Syndrome" },
  { value: "not-ms-resident", label: "Was not a Mississippi resident" },
  { value: "not-age", label: "Was not between the ages of 16 and 70" },
  { value: "employed-no-cie", label: "Was currently employed with an interest in continuing to work, but could not benefit from CIE services through CHP" },
  { value: "not-employed-no-interest", label: "Was currently not employed and did not have an interest in returning to work" },
  { value: "dif", label: "Was currently participating in another project funded by the U.S. Department of Education's DIF Program" },
];

const ESASectionFour = ({
  step,
  formData,
  setFormData,
  goToStep,
}: {
  step: string;
  formData: any;
  setFormData: (fn: (prev: any) => any) => void;
  goToStep: (step: string) => void;
}) => {
  // Navigation logic
  React.useEffect(() => {
    if (formData.eligibility_criteria === "no") {
      goToStep("9");
    }
    if (formData.return_to_work === "no") {
      goToStep("8");
    }
    if (formData.dif === "yes") {
      goToStep("9");
    }
    if (formData.initial_contact === "interested-eligible") {
      goToStep("5");
    }
    if (
      formData.initial_contact === "eligible-not-interested" ||
      formData.initial_contact === "not-reached"
    ) {
      goToStep("9");
    }
  }, [formData, goToStep]);

  // Helper for multi-select symptoms and not eligible reasons
  const handleMultiSelect = (key: string, value: string) => {
    setFormData((prev: any) => {
      const current = prev[key] || [];
      return {
        ...prev,
        [key]: current.includes(value)
          ? current.filter((v: string) => v !== value)
          : [...current, value],
      };
    });
  };

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
        Section 4 - Eligibility Screening & Assessment
      </h2>
      <form className="my-8">
        {/* 16 */}
        <LabelInputContainer className="mb-4">
          <Label>
            The individual expressed interest in learning more about participating in the Career Horizons Project.
          </Label>
          <DropdownMenu title={
            YES_NO_OPTIONS.find(opt => opt.value === formData.eligibility_criteria)?.label || "Select an option"
          }>
            {(close) =>
              YES_NO_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    formData.eligibility_criteria === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setFormData((prev: any) => ({
                      ...prev,
                      eligibility_criteria: option.value,
                    }));
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </LabelInputContainer>
        {/* Only show the rest if interest is "yes" */}
        {formData.eligibility_criteria === "yes" && (
          <>
            {/* 17 */}
            <LabelInputContainer className="mb-4">
              <Label>
                Eligibility Question #1: Do you have a disability accompanied by or resulting from Long COVID Syndrome?
              </Label>
              <DropdownMenu title={
                YES_NO_OPTIONS.find(opt => opt.value === formData.long_covid_syndrome)?.label || "Select an option"
              }>
                {(close) =>
                  YES_NO_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                        formData.long_covid_syndrome === option.value ? "bg-gray-100 font-semibold" : ""
                      }`}
                      onClick={() => {
                        setFormData((prev: any) => ({
                          ...prev,
                          long_covid_syndrome: option.value,
                        }));
                        close();
                      }}
                    >
                      {option.label}
                    </button>
                  ))
                }
              </DropdownMenu>
            </LabelInputContainer>
            {/* 18 */}
            <LabelInputContainer className="mb-4">
              <Label>
                Which of the following symptoms associated with Long COVID Syndrome have substantially limited 1 or more of your major life activities? (Select all that apply)
              </Label>
              <DropdownMenu title={
                (formData.symptoms && formData.symptoms.length > 0)
                  ? (
                    <span className="flex flex-wrap gap-2">
                      {formData.symptoms.map((val: string) => {
                        const label = SYMPTOM_OPTIONS.find(opt => opt.value === val)?.label || val;
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
                  )
                  : "Select all that apply"
              }>
                {(close) =>
                  SYMPTOM_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`flex items-center w-full px-4 py-2 hover:bg-gray-100 ${
                        (formData.symptoms || []).includes(option.value) ? "bg-gray-100 font-semibold" : ""
                      }`}
                      onClick={() => handleMultiSelect("symptoms", option.value)}
                    >
                      <input
                        type="checkbox"
                        checked={(formData.symptoms || []).includes(option.value)}
                        readOnly
                        className="mr-2"
                        tabIndex={-1}
                      />
                      {option.label}
                    </button>
                  ))
                }
              </DropdownMenu>
            </LabelInputContainer>
            {/* 19 */}
            <LabelInputContainer className="mb-4">
              <Label>
                Are you a resident of the state of Mississippi?
              </Label>
              <DropdownMenu title={
                YES_NO_OPTIONS.find(opt => opt.value === formData.is_ms_resident)?.label || "Select an option"
              }>
                {(close) =>
                  YES_NO_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                        formData.is_ms_resident === option.value ? "bg-gray-100 font-semibold" : ""
                      }`}
                      onClick={() => {
                        setFormData((prev: any) => ({
                          ...prev,
                          is_ms_resident: option.value,
                        }));
                        close();
                      }}
                    >
                      {option.label}
                    </button>
                  ))
                }
              </DropdownMenu>
            </LabelInputContainer>
            {/* 20 */}
            <LabelInputContainer className="mb-4">
              <Label>
                Are you between the ages of 16 and 70?
              </Label>
              <DropdownMenu title={
                YES_NO_OPTIONS.find(opt => opt.value === formData.is_age_16_to_70)?.label || "Select an option"
              }>
                {(close) =>
                  YES_NO_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                        formData.is_age_16_to_70 === option.value ? "bg-gray-100 font-semibold" : ""
                      }`}
                      onClick={() => {
                        setFormData((prev: any) => ({
                          ...prev,
                          is_age_16_to_70: option.value,
                        }));
                        close();
                      }}
                    >
                      {option.label}
                    </button>
                  ))
                }
              </DropdownMenu>
            </LabelInputContainer>
            {/* 21 */}
            <LabelInputContainer className="mb-4">
              <Label>
                Are you currently employed or not employed?
              </Label>
              <DropdownMenu title={
                EMPLOYMENT_OPTIONS.find(opt => opt.value === formData.employment)?.label || "Select employment status"
              }>
                {(close) =>
                  EMPLOYMENT_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                        formData.employment === option.value ? "bg-gray-100 font-semibold" : ""
                      }`}
                      onClick={() => {
                        setFormData((prev: any) => ({
                          ...prev,
                          employment: option.value,
                        }));
                        close();
                      }}
                    >
                      {option.label}
                    </button>
                  ))
                }
              </DropdownMenu>
            </LabelInputContainer>
            {/* 22 */}
            {formData.employment === "employed" && (
              <LabelInputContainer className="mb-4">
                <Label>
                  Do you have an interest in continuing to work?
                </Label>
                <DropdownMenu title={
                  YES_NO_OPTIONS.find(opt => opt.value === formData.desire_to_continue_work)?.label || "Select an option"
                }>
                  {(close) =>
                    YES_NO_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                          formData.desire_to_continue_work === option.value ? "bg-gray-100 font-semibold" : ""
                        }`}
                        onClick={() => {
                          setFormData((prev: any) => ({
                            ...prev,
                            desire_to_continue_work: option.value,
                          }));
                          close();
                        }}
                      >
                        {option.label}
                      </button>
                    ))
                  }
                </DropdownMenu>
              </LabelInputContainer>
            )}
            {/* 23 */}
            {formData.employment === "employed" && formData.desire_to_continue_work === "yes" && (
              <LabelInputContainer className="mb-4">
                <Label>
                  Are you being paid a subminimum wage (e.g. a wage less than the $7.25 minimum wage in Mississippi) for your current job?
                </Label>
                <DropdownMenu title={
                  SUBMINIMUM_WAGE_OPTIONS.find(opt => opt.value === formData.subminimum_wage)?.label || "Select an option"
                }>
                  {(close) =>
                    SUBMINIMUM_WAGE_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                          formData.subminimum_wage === option.value ? "bg-gray-100 font-semibold" : ""
                        }`}
                        onClick={() => {
                          setFormData((prev: any) => ({
                            ...prev,
                            subminimum_wage: option.value,
                          }));
                          close();
                        }}
                      >
                        {option.label}
                      </button>
                    ))
                  }
                </DropdownMenu>
              </LabelInputContainer>
            )}
            {/* 24 */}
            {formData.employment === "employed" && formData.desire_to_continue_work === "yes" && formData.subminimum_wage === "no" && (
              <LabelInputContainer className="mb-4">
                <Label>
                  Are you currently working or are you on leave due to your acquired disability resulting from Long COVID Syndrome?
                </Label>
                <DropdownMenu title={
                  WORK_STATUS_OPTIONS.find(opt => opt.value === formData.work_status)?.label || "Select an option"
                }>
                  {(close) =>
                    WORK_STATUS_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                          formData.work_status === option.value ? "bg-gray-100 font-semibold" : ""
                        }`}
                        onClick={() => {
                          setFormData((prev: any) => ({
                            ...prev,
                            work_status: option.value,
                          }));
                          close();
                        }}
                      >
                        {option.label}
                      </button>
                    ))
                  }
                </DropdownMenu>
                {formData.work_status === "other" && (
                  <Input
                    className="mt-2"
                    placeholder="Please specify"
                    type="text"
                    value={formData.work_status_other || ""}
                    onChange={e =>
                      setFormData((prev: any) => ({
                        ...prev,
                        work_status_other: e.target.value,
                      }))
                    }
                  />
                )}
              </LabelInputContainer>
            )}
            {/* 25 */}
            {formData.employment === "employed" && formData.desire_to_continue_work === "yes" && formData.subminimum_wage === "no" && (formData.work_status === "working" || formData.work_status === "leave" || formData.work_status === "other") && (
              <LabelInputContainer className="mb-4">
                <Label>
                  Are you currently at risk of losing your job due to your symptoms associated with Long COVID Syndrome?
                </Label>
                <DropdownMenu title={
                  YES_NO_OPTIONS.find(opt => opt.value === formData.at_risk)?.label || "Select an option"
                }>
                  {(close) =>
                    YES_NO_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                          formData.at_risk === option.value ? "bg-gray-100 font-semibold" : ""
                        }`}
                        onClick={() => {
                          setFormData((prev: any) => ({
                            ...prev,
                            at_risk: option.value,
                          }));
                          close();
                        }}
                      >
                        {option.label}
                      </button>
                    ))
                  }
                </DropdownMenu>
              </LabelInputContainer>
            )}
            {/* 26 */}
            {formData.employment === "employed" && formData.desire_to_continue_work === "yes" && formData.subminimum_wage === "no" && (formData.work_status === "working" || formData.work_status === "leave" || formData.work_status === "other") && formData.at_risk === "no" && (
              <LabelInputContainer className="mb-4">
                <Label>
                  How are you hoping to benefit from receiving services for Competitive Integrated Employment (CIE) through the Career Horizons Project?
                </Label>
                <textarea
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  value={formData.cie_benefit || ""}
                  onChange={e =>
                    setFormData((prev: any) => ({
                      ...prev,
                      cie_benefit: e.target.value,
                    }))
                  }
                  placeholder="Long answer"
                  rows={3}
                />
              </LabelInputContainer>
            )}
            {/* 27 */}
            {formData.employment === "not-employed" && (
              <LabelInputContainer className="mb-4">
                <Label>
                  Do you have an interest in returning to work?
                </Label>
                <DropdownMenu title={
                  YES_NO_OPTIONS.find(opt => opt.value === formData.wants_to_work_if_unemployed)?.label || "Select an option"
                }>
                  {(close) =>
                    YES_NO_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                          formData.wants_to_work_if_unemployed === option.value ? "bg-gray-100 font-semibold" : ""
                        }`}
                        onClick={() => {
                          setFormData((prev: any) => ({
                            ...prev,
                            wants_to_work_if_unemployed: option.value,
                          }));
                          close();
                        }}
                      >
                        {option.label}
                      </button>
                    ))
                  }
                </DropdownMenu>
              </LabelInputContainer>
            )}
            {/* 28 */}
            <LabelInputContainer className="mb-4">
              <Label>
                Are you currently NOT participating in another project funded by the U.S. Department of Education's Disability Innovation Fund (DIF) Program?
              </Label>
              <DropdownMenu title={
                DIF_OPTIONS.find(opt => opt.value === formData.dif)?.label || "Select an option"
              }>
                {(close) =>
                  DIF_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                        formData.dif === option.value ? "bg-gray-100 font-semibold" : ""
                      }`}
                      onClick={() => {
                        setFormData((prev: any) => ({
                          ...prev,
                          dif: option.value,
                        }));
                        close();
                      }}
                    >
                      {option.label}
                    </button>
                  ))
                }
              </DropdownMenu>
            </LabelInputContainer>
            {/* 29 */}
            <LabelInputContainer className="mb-4">
              <Label>
                Based on the individual's responses to the five eligibility questions and follow up questions asked, please document the individual's presumptive eligibility status at this point.
              </Label>
              <DropdownMenu title={
                PRESUMPTIVE_ELIGIBILITY_OPTIONS.find(opt => opt.value === formData.presumptive_eligibility)?.label || "Select an option"
              }>
                {(close) =>
                  PRESUMPTIVE_ELIGIBILITY_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                        formData.presumptive_eligibility === option.value ? "bg-gray-100 font-semibold" : ""
                      }`}
                      onClick={() => {
                        setFormData((prev: any) => ({
                          ...prev,
                          presumptive_eligibility: option.value,
                        }));
                        close();
                      }}
                    >
                      {option.label}
                    </button>
                  ))
                }
              </DropdownMenu>
            </LabelInputContainer>
            {/* 30 */}
            <LabelInputContainer className="mb-4">
              <Label>
                Initial Contact Results: CHP staff contacted the referred individual and the individual
              </Label>
              <DropdownMenu title={
                INITIAL_CONTACT_RESULTS_OPTIONS.find(opt => opt.value === formData.initial_contact)?.label || "Select an option"
              }>
                {(close) =>
                  INITIAL_CONTACT_RESULTS_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                        formData.initial_contact === option.value ? "bg-gray-100 font-semibold" : ""
                      }`}
                      onClick={() => {
                        setFormData((prev: any) => ({
                          ...prev,
                          initial_contact: option.value,
                        }));
                        close();
                      }}
                    >
                      {option.label}
                    </button>
                  ))
                }
              </DropdownMenu>
            </LabelInputContainer>
            {/* 31 */}
            {formData.initial_contact === "interested-not-eligible" && (
              <LabelInputContainer className="mb-4">
                <Label>
                  The referred individual was NOT identified as presumptively eligible to receive services through the Career Horizons Project due to the following reason(s) regarding to CHP eligibility criteria: (Select all that apply)
                </Label>
                <DropdownMenu title={
                  (formData.not_eligible_reasons && formData.not_eligible_reasons.length > 0)
                    ? (
                      <span className="flex flex-wrap gap-2">
                        {formData.not_eligible_reasons.map((val: string) => {
                          const label = NOT_ELIGIBLE_REASONS.find(opt => opt.value === val)?.label || val;
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
                    )
                    : "Select all that apply"
                }>
                  {(close) =>
                    NOT_ELIGIBLE_REASONS.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`flex items-center w-full px-4 py-2 hover:bg-gray-100 ${
                          (formData.not_eligible_reasons || []).includes(option.value) ? "bg-gray-100 font-semibold" : ""
                        }`}
                        onClick={() => handleMultiSelect("not_eligible_reasons", option.value)}
                      >
                        <input
                          type="checkbox"
                          checked={(formData.not_eligible_reasons || []).includes(option.value)}
                          readOnly
                          className="mr-2"
                          tabIndex={-1}
                        />
                        {option.label}
                      </button>
                    ))
                  }
                </DropdownMenu>
              </LabelInputContainer>
            )}
          </>
        )}
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

export default ESASectionFour;