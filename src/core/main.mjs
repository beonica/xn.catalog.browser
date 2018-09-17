import config from "../config.mjs";

export const clientKeys = new Map([["23ae4ed5", "Ocean Drop"]]);

export const loadCatalog = async ({ clientKey }) => {
  const response = await fetch(`${config.backend}${clientKey}/catalog`, {
    mode: "cors"
  });

  const catalog = await response.json();

  return catalog;
};

export const saveItem = async ({ client, item }) => {
  const response = await fetch(
    `${config.backend}${client}/catalog/${item._id}`,
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
