function showMore() {
    const sections = document.querySelectorAll('.hidden');
    sections.forEach(section => {
        section.style.display = "block";
    });
}
