import { produce } from "immer";

import * as core from "../core/main.mjs";

export default {
  changeItemStatus: ({ active, item }) => state =>
    produce(state, draft => {
      const thisItem = draft.catalog.find(
        eachItem => eachItem._id === item._id
      );

      thisItem.active = active;

      return draft;
    }),

  editItem: ({ editing, item }) => state =>
    produce(state, draft => {
      const thisItem = draft.catalog.find(
        eachItem => eachItem._id === item._id
      );

      thisItem.editing =
        typeof editing === "boolean" ? editing : !thisItem.editing;

      return draft;
    }),

  filterCatalogByName: ({ name }) => state =>
    produce(state, draft => {
      draft.filters.name = name;

      return draft;
    }),

  filterCatalogByType: ({ type }) => state =>
    produce(state, draft => {
      draft.filters.type = type;

      return draft;
    }),

  inputItemName: ({ item, name }) => state =>
    produce(state, draft => {
      const thisItem = draft.catalog.find(
        eachItem => eachItem._id === item._id
      );

      thisItem.name = name;

      return draft;
    }),

  inputItemType: ({ item, type }) => state =>
    produce(state, draft => {
      const thisItem = draft.catalog.find(
        eachItem => eachItem._id === item._id
      );

      thisItem.kind = type;

      return draft;
    }),

  itemSaved: ({ savedItem }) => state =>
    produce(state, draft => {
      const savedIndex = draft.catalog.findIndex(
        item => item._id === savedItem._id
      );

      draft.catalog.splice(savedIndex, 1, savedItem);

      return draft;
    }),

  loadCatalog: () => async (state, actions) => {
    const { client } = state;

    const catalog = await core.loadCatalog({ client });

    actions.setCatalog({ catalog });
  },

  setCatalog: ({ catalog }) => state =>
    produce(state, draft => {
      draft.catalog = catalog.map(item => {
        if (item.active === undefined) {
          item.active = true;
        }

        return item;
      });

      return draft;
    }),

  saveItem: ({ item }) => async (state, actions) => {
    const { client } = state;

    const itemToSave = produce(item, draft => {
      delete draft.editing;

      return draft;
    });

    const savedItem = await core.saveItem({
      client,
      item: itemToSave
    });

    actions.itemSaved({ savedItem });

    actions.editItem({ editing: false, item: savedItem });
  }
};
