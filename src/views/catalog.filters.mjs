import { h } from "hyperapp"; // eslint-disable-line

export const CatalogFilters = () => (state, actions) => (
  <div class="row">
    <div class="col-md-12">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="name">Nome</label>
            <input
              class="form-control"
              id="name"
              oninput={event =>
                actions.filterCatalogByName({ name: event.target.value })
              }
              type="text"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="type">Tipo</label>
            <select
              class="form-control"
              id="type"
              onchange={event =>
                actions.filterCatalogByType({ type: event.target.value })
              }
            >
              <option selected value="">
                Todos
              </option>
              <option value="category">category</option>
              <option value="collection">collection</option>
              <option value="department">department</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  </div>
);
