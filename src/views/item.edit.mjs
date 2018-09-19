import { h } from "hyperapp"; // eslint-disable-line

export const ItemEdit = ({
  changeItemStatus,
  editItem,
  item,
  inputItemName,
  inputItemPriority,
  inputItemType,
  saveItem
}) => (
  <form onsubmit={event => (event.preventDefault(), saveItem({ item }))}>
    <div class="form-group">
      <label for={`${item._id}.name`}>Nome</label>
      <input
        class="form-control"
        id={`${item._id}.name`}
        oninput={event => inputItemName({ item, name: event.target.value })}
        required
        type="text"
        value={item.name}
      />
    </div>
    <div class="form-group">
      <label for={`${item._id}.type`}>Tipo</label>
      <select
        class="form-control"
        id={`${item._id}.type`}
        onchange={event => inputItemType({ item, type: event.target.value })}
        required
      >
        <option selected={item.kind === "category"} value="category">
          category
        </option>
        <option selected={item.kind === "collection"} value="collection">
          collection
        </option>
        <option selected={item.kind === "department"} value="department">
          department
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for={`${item._id}.priority`}>Prioridade</label>
      <input
        class="form-control"
        id={`${item._id}.priority`}
        min="0"
        oninput={event =>
          inputItemPriority({ item, priority: event.target.value })
        }
        required
        step="5"
        type="number"
        value={item.priority}
      />
    </div>
    <div class="form-group form-check">
      <input
        checked={item.active}
        class="form-check-input"
        id={`${item._id}.active`}
        onclick={event =>
          changeItemStatus({ item, active: event.target.checked })
        }
        type="checkbox"
      />
      <label class="form-check-label" for={`${item._id}.active`}>
        Ativo
      </label>
    </div>
    <button class="btn btn-block btn-outline-success btn-sm" type="submit">
      Salvar
    </button>
    <button
      class="btn btn-block btn-outline-secondary btn-sm"
      onclick={() => editItem({ item })}
      type="button"
    >
      Fechar
    </button>
  </form>
);
