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

  findClient: () => (state, actions) => {
    const clientKey = new URL(document.location).searchParams.get("key");

    if (clientKey) {
      const clientName = core.clientKeys.get(clientKey.substring(0, 8));

      if (clientName) {
        actions.loadCatalog({ clientKey });

        return { clientKey, clientName };
      }
    }
  },

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

  inputItemPriority: ({ item, priority }) => state =>
    produce(state, draft => {
      const thisItem = draft.catalog.find(
        eachItem => eachItem._id === item._id
      );

      thisItem.priority = priority;

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

  loadCatalog: ({ clientKey }) => async (state, actions) => {
    const catalog = await core.loadCatalog({ clientKey });

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
    const { clientKey } = state;

    const itemToSave = produce(item, draft => {
      delete draft.editing;

      return draft;
    });

    const savedItem = await core.saveItem({
      clientKey,
      item: itemToSave
    });

    actions.itemSaved({ savedItem });

    actions.editItem({ editing: false, item: savedItem });
  }
};
