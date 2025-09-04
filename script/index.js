const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then((res) => res.json()) //promise of Json
    .then((json) => displayLesson(json.data));
};
const loadWords = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLoadWords(data.data));
};
const displayLoadWords = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  if (words.length == 0) {
    wordContainer.innerHTML = `
      <div class="text-center  col-span-full  py-10 space-y-4 font-bangla
          rounded-xl ">
          <img class="mx-auto" src="./assets/alert-error.png" alt="">
            <p class="text-gray-500">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-bold text-xl">নেক্সট Lesson এ যান</h2>
        </div>
    `;
  }

  for (const word of words) {
    const wordCard = document.createElement("div");
    wordCard.innerHTML = `
     <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${
              word.word ? word.word : "empty word"
            }</h2>
            <p class="font-semibold">Meaning / pronunciation</p>
            <div class="text-2xl    font-medium font-bangla">${
              word.meaning ? word.meaning : "empty word"
            } / ${
      word.pronunciation ? word.pronunciation : "empty pronunciation"
    }</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF15] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF15] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>

    `;
    wordContainer.append(wordCard);
  }
};

const displayLesson = (lessons) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTMl = "";

  for (const lesson of lessons) {
    console.log(lesson);
    const btnDv = document.createElement("div");
    btnDv.innerHTML = `
    <button onclick="loadWords( ${lesson.level_no})" class="btn btn-outline btn-primary" ><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
    `;
    levelContainer.append(btnDv);
  }
};
loadLessons();
