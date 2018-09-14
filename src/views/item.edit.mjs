import { h } from "hyperapp"; // eslint-disable-line

export const ItemEdit = ({
  changeItemStatus,
  editItem,
  item,
  inputItemName,
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
