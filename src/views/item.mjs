import { h } from "hyperapp"; // eslint-disable-line

import { ItemEdit } from "./item.edit.mjs";

export const Item = ({ item }) => (state, actions) => (
  <div class="col-md-4">
    <div
      class={
        "card mb-4 shadow-sm card-editable" +
        (item.editing ? " card-editing" : "") +
        (!item.active ? " card-inactive" : "")
      }
    >
      <div class={"card-body" + ` mark-${item.kind}`}>
        <div hidden={item.editing}>
          <h5 class="card-title">{item.name}</h5>
          <p class="card-text">
            <pre>{item.kind}</pre>
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button
                class="btn btn-sm btn-outline-secondary"
                onclick={() => actions.editItem({ item })}
                type="button"
              >
                Editar
              </button>
            </div>
            <small class="text-muted">{item.priority}</small>
          </div>
        </div>
        <div hidden={!item.editing}>
          <ItemEdit
            changeItemStatus={actions.changeItemStatus}
            editItem={actions.editItem}
            inputItemName={actions.inputItemName}
            inputItemType={actions.inputItemType}
            item={item}
            saveItem={actions.saveItem}
          />
        </div>
      </div>
    </div>
  </div>
);
