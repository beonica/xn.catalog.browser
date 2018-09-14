import { h } from "hyperapp"; // eslint-disable-line

export const Header = () => () => (
  <header>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container d-flex justify-content-between">
        <a href="#" class="navbar-brand d-flex align-items-center">
          <strong>Catálogo</strong>
        </a>
      </div>
    </div>
  </header>
);
