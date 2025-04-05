const character = document.querySelector("#word");
const characterCount = document.querySelector("#count");
character.addEventListener("input", (event) => {
  // console.log(event.target.value);
  const wordCount = event.target.value.trim().length;
  characterCount.textContent = wordCount;
  localStorage.setItem(
    "data",
    JSON.stringify({
      word: event.target.value,
      count: wordCount,
    })
  );
});

window.onload = () => {
  getData = localStorage.getItem("data");

  if (getData) {
    data = JSON.parse(getData);
    // console.log(data);
    const wordCount = data.word;
    // console.log(wordCount);
    character.textContent = wordCount;
    characterCount.textContent = data.count;
  }
};
