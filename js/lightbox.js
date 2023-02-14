function openImg(imagen) {
  if (window.matchMedia("(min-width: 991px)").matches) {
    const ruta  = imagen.src.substring(imagen.src.indexOf("/images") + 1);
    const modal = document.createElement("div");
    modal.id = "openImg";
    modal.classList.add("trabajos-recientes__openImg");
    modal.innerHTML = `
          <span onclick="closeImg()">
            <svg class="trabajos-recientes__close-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <polygon fill="var(--ci-primary-color, currentColor)" points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313" class="ci-primary"/>
            </svg>
          </span>
          <img class="trabajos-recientes__extended-img" src="${ruta}" alt="${imagen.alt}">
      `;
    imagen.parentNode.insertBefore(modal, imagen.nextSibling);
  }

  const mediaQuery = window.matchMedia("(max-width: 991px)");
  mediaQuery.addEventListener("change", () => {
    if (mediaQuery.matches && document.querySelector("#openImg")) {
      document.querySelector("#openImg").remove();
    }
  });
}

function closeImg(imagen) {
  document.querySelector("#openImg").remove();
}
