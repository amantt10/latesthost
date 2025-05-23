/*
  Warnings:

  - You are about to drop the column `current_mdrrs_client_character` on the `potential_participants` table. All the data in the column will be lost.
  - You are about to drop the column `started_at` on the `potential_participants` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "potential_participants" DROP COLUMN "current_mdrrs_client_character",
DROP COLUMN "started_at",
ADD COLUMN     "eligibility_criteria" BOOLEAN;
