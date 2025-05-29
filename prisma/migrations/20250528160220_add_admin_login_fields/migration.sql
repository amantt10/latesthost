/*
  Warnings:

  - You are about to drop the column `release_info_consent_mdrrs` on the `potential_participants` table. All the data in the column will be lost.
  - You are about to drop the column `staff_submit_referral_to_mdrrs` on the `potential_participants` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "potential_participants" DROP COLUMN "release_info_consent_mdrrs",
DROP COLUMN "staff_submit_referral_to_mdrrs",
ADD COLUMN     "release_info_consent_mdrs" TEXT,
ADD COLUMN     "staff_submit_referral_to_mdrs" TEXT;

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "role" TEXT,
    "role_description" TEXT,
    "role_capabilities" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "password" TEXT,
    "organization" TEXT,
    "title" TEXT,
    "last_login" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6),
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eligibility_screening" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "potential_participant_id" INTEGER,
    "chp_partner_business" TEXT,
    "contact_method" TEXT,
    "history_of_contact_attempts" TEXT,
    "mode_of_learning_about_chp" TEXT,
    "source_of_learning_about_chp" TEXT,
    "individual_interest_in_chp" TEXT,
    "disability_accompanied_by_long_covid" TEXT,
    "long_covid_syndrome" TEXT,
    "is_ms_resident" TEXT,
    "is_age_16_to_70" TEXT,
    "is_currently_employed" TEXT,
    "desire_to_continue_work" TEXT,
    "paid_subminimum_wage" TEXT,
    "working_leave_status" TEXT,
    "risk_of_losing_job" TEXT,
    "how_you_hope_to_benefit_from_chp" TEXT,
    "interest_in_returning_to_work" TEXT,
    "not_involving_other_off" TEXT,
    "confirmation_of_eligibility_questions" BOOLEAN NOT NULL,
    "initial_contact_results" TEXT,
    "reason_for_not_eligible" TEXT,
    "statement_of_informed_consent" TEXT,
    "release_of_information_roi" TEXT,
    "individual_provided_medical_information" TEXT,
    "status_of_receiving_medical_information" TEXT,
    "individual_home_address" TEXT,
    "individual_birthdate" TEXT,
    "eligibility_for_participation" TEXT NOT NULL,
    "service_region" TEXT,
    "vocational_counselor_assigned_first_name" TEXT,
    "vocational_counselor_assigned_last_name" TEXT,
    "vocational_counselors_caseload_or_waitlist" TEXT,
    "current_client_of_mdrs_or_no" TEXT,
    "submit_an_mdrs_referral" TEXT,
    "sharing_information_with_mdrs" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "eligibility_screening_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "eligibility_screening" ADD CONSTRAINT "eligibility_screening_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eligibility_screening" ADD CONSTRAINT "eligibility_screening_potential_participant_id_fkey" FOREIGN KEY ("potential_participant_id") REFERENCES "potential_participants"("id") ON DELETE SET NULL ON UPDATE CASCADE;
