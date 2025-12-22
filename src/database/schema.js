import { openDB } from "idb";
import {DB_NAME, DB_VERSION} from '../constants.js' 

export async function createStoreInDB() {
  const dbPromise = await openDB(DB_NAME, DB_VERSION, {
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

//createStoreInDB();
