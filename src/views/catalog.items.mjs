import { h } from "hyperapp"; // eslint-disable-line

import { presentCatalog } from "../functions.mjs";

import { Item } from "./item.mjs";

import "./catalog.items.css";

export const CatalogItems = () => state => (
  <div>
    <div class="row" hidden={state.catalog !== null}>
      <div class="col-md-12">
        <p>Carregando catálogo...</p>
      </div>
    </div>
    <div
      class="row"
      hidden={state.catalog === null || state.catalog.length > 0}
    >
      <div class="col-md-12">
        <p>Nenhum item no catálogo.</p>
      </div>
    </div>
    <br />
    <div class="row">
      {(() => {
        if (state.catalog) {
          return presentCatalog({
            catalog: state.catalog,
            filters: state.filters
          }).map(item => Item({ item }));
        }
      })()}
    </div>
  </div>
);
