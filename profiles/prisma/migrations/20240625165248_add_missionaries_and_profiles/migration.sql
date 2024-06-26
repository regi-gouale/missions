-- CreateTable
CREATE TABLE "Missionaries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "church" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Profiles" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "missionaryId" TEXT NOT NULL,
    "transformateurAmes" REAL NOT NULL,
    "manifestateurCompassion" REAL NOT NULL,
    "coordinateurMission" REAL NOT NULL,
    "gagneurAmes" REAL NOT NULL,
    "itinerant" REAL NOT NULL,
    "sedentaire" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Profiles_missionaryId_fkey" FOREIGN KEY ("missionaryId") REFERENCES "Missionaries" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Missionaries_id_key" ON "Missionaries"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Missionaries_email_key" ON "Missionaries"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profiles_id_key" ON "Profiles"("id");
