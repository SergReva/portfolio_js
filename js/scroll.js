const links = document.querySelectorAll('.menu-list__link'),
  btn = document.querySelector('.main__button'),
  btn1 = document.querySelector('.main__scroll'),
  
  allLinks = [...links, btn, btn1];

  allLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = link.getAttribute('href').substring(1),
      section = document.getElementById(id);

    if (section) {
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  })
})