const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then((res) => res.json()) //promise of Json
    .then((json) => displayLesson(json.data));
};
const displayLesson = (lessons) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTml = "";

  for (const lesson of lessons) {
    console.log(lesson);
    const btnDv = document.createElement("div");
    btnDv.innerHTML = `
    <button class="btn btn-outline btn-primary" ><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
    `;
    levelContainer.append(btnDv);
  }
};
loadLessons();
