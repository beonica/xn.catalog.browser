import config from "../config.mjs";

export const clientKeys = new Map([
  ["a3946eb8", "Casa Mind"],
  ["c1a1cdb5", "Ludi"],
  ["23ae4ed5", "Ocean Drop"]
]);

export const loadCatalog = async ({ clientKey }) => {
  const response = await fetch(`${config.backend}${clientKey}/catalog`, {
    mode: "cors"
  });

  const catalog = await response.json();

  return catalog;
};

export const saveItem = async ({ clientKey, item }) => {
  const response = await fetch(
    `${config.backend}${clientKey}/catalog/${item._id}`,
    {
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
      method: "post",
      mode: "cors"
    }
  );

  /*const savedItem =*/ await response.json();

  return Object.assign({}, item /*, savedItem*/);
};
