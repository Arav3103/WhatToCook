import { openDB } from "idb";
import { DB_NAME, DB_VERSION } from "../constants.js";

let dbInstance = null;

export async function initDB() {
  if (!dbInstance) {
    dbInstance = await openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("recipe-list")) {
          db.createObjectStore("recipe-list", {
            keyPath: "id",
            autoIncrement: true,
          });
        }
      },
    });
    console.log("dbInstance", dbInstance);
  }

  return dbInstance;
}
