import config from "../config.mjs";

export const loadCatalog = async ({ client }) => {
  const response = await fetch(`${config.backend}${client}/catalog`, {
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
