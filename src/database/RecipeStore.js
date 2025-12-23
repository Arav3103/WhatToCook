import { initDB } from "./schema";

export const addRecipe = async (recipe) => {
  const db = await initDB();
  const tx = db.transaction("recipe-list", "readwrite");
  const store = tx.objectStore("recipe-list");

  recipe.forEach((id) => {
    store.put({
      name: id,
    });
  });
  await tx.done;
};

// export const deleteRecipe = async (id) {

// }
