"use strict";

function desplegarMenu() {
  const body            = document.querySelector("body");
  const header          = document.querySelector("header");
  const bg_dark         = document.querySelector("#bgDark");
  const elementMenu     = document.querySelector("#menuContainer");
  const menuIcon        = document.querySelector("#menuIcon");
  const elementMenuNav  = document.querySelector("#menuContainerNav");

  body.classList.toggle("overflow-y");
  header.classList.toggle("header--relative");
  bg_dark.classList.toggle("background-dark");
  elementMenu.classList.toggle("change");
  menuIcon.classList.toggle("correctPosition");
  elementMenuNav.classList.toggle("nav-menu--open");

  const mediaQuery = window.matchMedia("(min-width: 992px)");
  mediaQuery.addEventListener("change", () => {
    if (mediaQuery.matches && elementMenu.classList.contains("change")) {
      body.classList.toggle("overflow-y");
      header.classList.toggle("header--relative");
      bg_dark.classList.toggle("background-dark");
      elementMenu.classList.toggle("change");
      menuIcon.classList.toggle("correctPosition");
      elementMenuNav.classList.toggle("nav-menu--open");
    }
  });
}
