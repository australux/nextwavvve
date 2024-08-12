/*
  Warnings:

  - You are about to drop the `_AlbumToArtist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_AlbumToArtist_B_index";

-- DropIndex
DROP INDEX "_AlbumToArtist_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_AlbumToArtist";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "AlbumsOnArtists" (
    "albumId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,

    PRIMARY KEY ("albumId", "artistId"),
    CONSTRAINT "AlbumsOnArtists_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AlbumsOnArtists_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Album" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "rating" TEXT NOT NULL DEFAULT 'G',
    "userId" TEXT NOT NULL,
    "savedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Album_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Album" ("id", "name", "rating", "savedAt", "userId") SELECT "id", "name", "rating", "savedAt", "userId" FROM "Album";
DROP TABLE "Album";
ALTER TABLE "new_Album" RENAME TO "Album";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
