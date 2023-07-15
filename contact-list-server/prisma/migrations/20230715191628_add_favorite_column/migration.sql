-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_contacts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    "is_favorite" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_contacts" ("created_at", "deleted_at", "email", "fullName", "id", "phoneNumber", "updated_at") SELECT "created_at", "deleted_at", "email", "fullName", "id", "phoneNumber", "updated_at" FROM "contacts";
DROP TABLE "contacts";
ALTER TABLE "new_contacts" RENAME TO "contacts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
