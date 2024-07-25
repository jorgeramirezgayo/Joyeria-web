"use strict";

function displayMenu() {
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const headerContent = document.querySelector(".header-content");
  const bg_dark = document.querySelector("#bgDark");
  const elementMenu = document.querySelector("#menuContainer");
  const menuIcon = document.querySelector("#menuIcon");
  const elementMenuNav = document.querySelector("#menuContainerNav");
  const elementHeaderEmptyDiv = document.querySelector(".header-content__empty-div");

  body.classList.toggle("overflow-y");
  header.classList.toggle("header--relative");
  headerContent.classList.toggle("header-content--center");
  bg_dark.classList.toggle("background-dark");
  elementMenu.classList.toggle("display-menu-container");
  menuIcon.classList.toggle("correctPosition");
  elementMenuNav.classList.toggle("nav-menu--open");
  elementHeaderEmptyDiv.classList.toggle("header-content__menu-div--hidden");

  const mediaQuery = window.matchMedia("(min-width: 992px)");

  mediaQuery.addEventListener("change", () => {
    if (mediaQuery.matches && elementMenu.classList.contains("display-menu-container")) {
      body.classList.toggle("overflow-y");
      header.classList.toggle("header--relative");
      headerContent.classList.toggle("header-content--center");
      bg_dark.classList.toggle("background-dark");
      elementMenu.classList.toggle("display-menu-container");
      menuIcon.classList.toggle("correctPosition");
      elementMenuNav.classList.toggle("nav-menu--open");
      elementHeaderEmptyDiv.classList.toggle("header-content__menu-div--hidden");
    }
  });
}
