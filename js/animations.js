function revealIntro() {
  let revealsIntro = document.querySelectorAll(".revealIntro");

  for (let i = 0; i < revealsIntro.length; i++) {
    let alturaWindow = window.innerHeight;
    let revealIntroTop = revealsIntro[i].getBoundingClientRect().top;
    let revealIntroPoint = 300;

    if (revealIntroTop < alturaWindow - revealIntroPoint) {
      revealsIntro[i].classList.add("revealIntro--active");
    }
  }
}

window.addEventListener("scroll", revealIntro);
