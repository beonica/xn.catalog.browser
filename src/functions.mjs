export const presentCatalog = ({ catalog, filters }) => {
  return catalog.reduce((reduction, item) => {
    if (
      (filters.name === "" || item.name.includes(filters.name)) &&
      (filters.type === "" || item.kind === filters.type)
    ) {
      reduction.push(item);
    }

    return reduction;
  }, []);
};
