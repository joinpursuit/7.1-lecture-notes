window.addEventListener("DOMContentLoaded", () => {
  const newPuppyBtn = document.querySelector("#puppies button");
  newPuppyBtn.addEventListener("click", getNewPuppy);
});

// FIXME: Something is going wrong!
// Hint: What is 'response'?
async function getNewPuppy(event) {
  const puppyImg = document.querySelector("#puppies img");
  const response = axios.get("https://dog.ceo/api/breeds/image/random");
  puppyImg.src = response.data;
}
