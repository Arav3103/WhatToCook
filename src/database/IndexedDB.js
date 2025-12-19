import { openDB } from "idb";

const DB_NAME = "recipe-app-db";
const DB_VERSION = 1;

export async function createStoreInDB() {
  const dbPromise = await openDB("recipeDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("recipe-list")) {
        db.createObjectStore("recipe-list", {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });

  return dbPromise;
}

createStoreInDB();
