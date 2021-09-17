window.addEventListener("scroll", () => {
    const header = document.querySelector('.footer .content');
    header.classList.toggle('sticky', window.scrollY > 150)
});