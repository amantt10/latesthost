"use client"

import React, { useEffect } from "react";
import DropdownMenu from "@/components/DropdownMenu";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const MDRS_CLIENT_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "not-sure", label: "Not sure" },
];

const MDRS_REFERRAL_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const MDRS_PERMISSION_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const RFSectionFour = ({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: (data: any) => void;
}) => {
  // Sync local state with parent formData
  const mdrsClient = formData.client_of_mdrrs || "";
  const mdrsReferral = formData.staff_submit_referral_to_mdrrs || "";
  const mdrsPermission = formData.release_info_consent_mdrrs || "";

  // Helper to get label from value
  const getLabel = (options: { value: string; label: string }[], value: string) =>
    options.find((o) => o.value === value)?.label || "Select an option";

  // End message
  const EndMessage = (
    <div className="mt-8 text-center text-lg font-semibold text-green-700">
      Thank you for your responses.
    </div>
  );

  // If answered "Yes" to first question, end form here
  if (mdrsClient === "yes") {
    return (
      <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
        <h2 className="font-bold text-2xl text-center text-[#5d1725] mb-5">
          Section 4 - Thank you for reviewing the eligibility criteria for the Career Horizons Project.
        </h2>
        <form className="my-8">
          <LabelInputContainer className="mb-4">
            <Label>
              Are you or the person you were going to refer currently a client of MDRS?
            </Label>
            <DropdownMenu title={getLabel(MDRS_CLIENT_OPTIONS, mdrsClient)}>
              {(close) =>
                MDRS_CLIENT_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      mdrsClient === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setFormData({ ...formData, client_of_mdrrs: option.value });
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </LabelInputContainer>
          {EndMessage}
        </form>
      </div>
    );
  }

  // If answered "No" or "Not sure" to first question, show second question
  // If answered "No" to second question, end form here
  if (mdrsReferral === "no") {
    return (
      <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
        <h2 className="font-bold text-2xl text-center text-neutral-800 dark:text-neutral-200 mb-5">
          Section 4 - Thank you for reviewing the eligibility criteria for the Career Horizons Project.
        </h2>
        <form className="my-8">
          <LabelInputContainer className="mb-4">
            <Label>
              Are you or the person you were going to refer currently a client of MDRS?
            </Label>
            <DropdownMenu title={getLabel(MDRS_CLIENT_OPTIONS, mdrsClient)}>
              {(close) =>
                MDRS_CLIENT_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      mdrsClient === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setFormData({ ...formData, client_of_mdrrs: option.value });
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label>
              Would you like a CHP staff member to submit a referral for you to MDRS?
            </Label>
            <DropdownMenu title={getLabel(MDRS_REFERRAL_OPTIONS, mdrsReferral)}>
              {(close) =>
                MDRS_REFERRAL_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      mdrsReferral === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setFormData({ ...formData, staff_submit_referral_to_mdrrs: option.value });
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </LabelInputContainer>
          {EndMessage}
        </form>
      </div>
    );
  }

  // If answered "Yes" to second question, show third question
  // If answered "No" to third question, end form here
  if (mdrsPermission === "no") {
    return (
      <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
        <h2 className="font-bold text-2xl text-center text-neutral-800 dark:text-neutral-200 mb-5">
          Section 4 - Thank you for reviewing the eligibility criteria for the Career Horizons Project.
        </h2>
        <form className="my-8">
          <LabelInputContainer className="mb-4">
            <Label>
              Are you or the person you were going to refer currently a client of MDRS?
            </Label>
            <DropdownMenu title={getLabel(MDRS_CLIENT_OPTIONS, mdrsClient)}>
              {(close) =>
                MDRS_CLIENT_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      mdrsClient === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setFormData({ ...formData, client_of_mdrrs: option.value });
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label>
              Would you like a CHP staff member to submit a referral for you to MDRS?
            </Label>
            <DropdownMenu title={getLabel(MDRS_REFERRAL_OPTIONS, mdrsReferral)}>
              {(close) =>
                MDRS_REFERRAL_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      mdrsReferral === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setFormData({ ...formData, staff_submit_referral_to_mdrrs: option.value });
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label>
              You responded "yes" indicating that you would like a CHP staff member to refer you to MDRS. In order to submit a referral we will have to share your contact information with MDRS. Do you give CHP staff your permission to share your name and contact information (phone number and email address) with an MDRS representative?
            </Label>
            <DropdownMenu title={getLabel(MDRS_PERMISSION_OPTIONS, mdrsPermission)}>
              {(close) =>
                MDRS_PERMISSION_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      mdrsPermission === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setFormData({ ...formData, release_info_consent_mdrrs: option.value });
                      close();
                    }}
                  >
                    {option.label}
                  </button>
                ))
              }
            </DropdownMenu>
          </LabelInputContainer>
          {EndMessage}
        </form>
      </div>
    );
  }

  // If answered "Yes" to third question, show end message
  if (mdrsPermission === "yes") {
    return (
      <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
        <h2 className="font-bold text-2xl text-center text-neutral-800 dark:text-neutral-200 mb-5">
          Section 4 - Thank you for reviewing the eligibility criteria for the Career Horizons Project.
        </h2>
        <form className="my-8">
          {EndMessage}
        </form>
      </div>
    );
  }

  // Default: show questions as needed
  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-2xl text-center text-neutral-800 dark:text-neutral-200 mb-5">
        Section 4 - Thank you for reviewing the eligibility criteria for the Career Horizons Project.
      </h2>
      <form className="my-8">
        <p className="mb-4">
          Although you or the person you were going to refer are <b>not eligible to receive services through the Career Horizons Project</b> OR are <b>not interested in receiving services through the Career Horizons Project</b>, we wanted you to be aware that the Mississippi Department of Rehabilitation Services (MDRS) may be a helpful resource as they are a state agency that provides resources to help Mississippians with disabilities find new careers, live more independently, overcome obstacles, and face new challenges.
        </p>
        <LabelInputContainer className="mb-4">
          <Label>
            Are you or the person you were going to refer currently a client of MDRS?
          </Label>
          <DropdownMenu title={getLabel(MDRS_CLIENT_OPTIONS, mdrsClient)}>
            {(close) =>
              MDRS_CLIENT_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                    mdrsClient === option.value ? "bg-gray-100 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, client_of_mdrrs: option.value });
                    close();
                  }}
                >
                  {option.label}
                </button>
              ))
            }
          </DropdownMenu>
        </LabelInputContainer>
        {(mdrsClient === "no" || mdrsClient === "not-sure") && (
          <LabelInputContainer className="mb-4">
            <Label>
              Would you like a CHP staff member to submit a referral for you to MDRS?
            </Label>
            <DropdownMenu title={getLabel(MDRS_REFERRAL_OPTIONS, mdrsReferral)}>
              {(close) =>
                MDRS_REFERRAL_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      mdrsReferral === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setFormData({ ...formData, staff_submit_referral_to_mdrrs: option.value });
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
        {(mdrsClient === "no" || mdrsClient === "not-sure") && mdrsReferral === "yes" && (
          <LabelInputContainer className="mb-4">
            <Label>
              You responded "yes" indicating that you would like a CHP staff member to refer you to MDRS. In order to submit a referral we will have to share your contact information with MDRS. Do you give CHP staff your permission to share your name and contact information (phone number and email address) with an MDRS representative?
            </Label>
            <DropdownMenu title={getLabel(MDRS_PERMISSION_OPTIONS, mdrsPermission)}>
              {(close) =>
                MDRS_PERMISSION_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${
                      mdrsPermission === option.value ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setFormData({ ...formData, release_info_consent_mdrrs: option.value });
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

export default RFSectionFour;