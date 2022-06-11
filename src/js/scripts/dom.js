// * Переключатель отображения имени в картинке {
const teamOurTeamImg = document.querySelectorAll(".team-our-team__img");

teamOurTeamImg.forEach(tag => {
    tag.addEventListener("click", function() {
        teamOurTeamImg.forEach(tag => {
            tag.classList.remove("active");
        });
        tag.classList.add("active");
    });
});
// * Переключатель отображения имени в картинке }