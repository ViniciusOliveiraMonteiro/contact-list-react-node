/*
  Warnings:

  - Added the required column `occupation` to the `ContactCompany` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ContactCompany" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "contact_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    CONSTRAINT "ContactCompany_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "Contact" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ContactCompany_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ContactCompany" ("company_id", "contact_id", "id") SELECT "company_id", "contact_id", "id" FROM "ContactCompany";
DROP TABLE "ContactCompany";
ALTER TABLE "new_ContactCompany" RENAME TO "ContactCompany";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
