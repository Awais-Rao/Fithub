// ===== Show Navbar =====

document.addEventListener("DOMContentLoaded", function () {
    const Navbar = document.getElementById("navbar-top");
  
    window.addEventListener("scroll", function () {
      window.scrollY > 300
        ? Navbar.classList.add("fixed-top", "shadow")
        : Navbar.classList.remove("fixed-top", "shadow");
    });
  });
  


  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 3000,
    delay: 400,
    // reset: true
  });
  
  sr.reveal(
    `.hero__heading, .contact__form`
  );

  sr.reveal(
    `.hero__btn_wrapper, .trainer__img_wrapper, .aboutus__img_wrapper`,
    { origin: "left" }
  );

  sr.reveal(
    `.hero__text, .trainer__left_wrapper, .aboutus__content_wrapper`,
    { origin: "right" }
  );

  sr.reveal(`.service__card`, {
    origin: "top",
    interval: 300,
    distance: "100px",
  });
  
  sr.reveal(`.glass__card`, {
    origin: "left",
    interval: 300,
    distance: "100px",
  });

  sr.reveal(`.lesson__card`, {
    origin: "top",
    interval: 300,
    distance: "50px",
  });


