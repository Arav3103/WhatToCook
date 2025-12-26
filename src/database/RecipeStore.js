import { initDB } from "./schema";

export const addRecipe = async (recipe) => {
  const db = await initDB();
  const tx = db.transaction("recipe-list", "readwrite");
  const store = tx.objectStore("recipe-list");

  recipe.forEach((item) => {
    store.put({
      id: item.id,
      name: item.name,
      createdDate: item.createdDate,
      createdTime: item.createdTime,
    });
  });
  await tx.done;
};

// export const deleteRecipe = async (id) {

// }
