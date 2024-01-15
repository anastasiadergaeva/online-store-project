import { ReviewManager } from "./review-manager";

export async function initReviews() {
  const button = document.querySelector(".reviews__button");
  const container = document.querySelector(".reviews__result");
  let username;

  function createUserComment(username, comment, date) {
    const result = document.createElement("div");
    result.className = "post-container";
    result.innerHTML = `
    <div class="review-info">
        <p class="username">${username}</p>
        <p class="datetime">${date}</p>
    </div>
    <p class="comment">${comment}</p>`;
    console.log(result);
    container.append(result);
    cleanInputs();
  }

  function cleanInputs() {
    document.getElementById("username").value = "";
    document.querySelector("#review").value = "";
  }

  function sendName() {
    username = document.getElementById("username").value;
    let user =
      username.substr(0, 1).toUpperCase() + username.slice(1).toLowerCase();
    console.log(user);
    return user;
  }

  function sendComment() {
    const comment = document.querySelector("#review").value;
    console.log(comment);
    return comment;
  }

  function addDate(date = new Date()) {
    let dayNumber = date.getDay();
    let day =
      dayNumber === 0
        ? "ВС"
        : dayNumber === 1
        ? "ПН"
        : dayNumber === 2
        ? "ВТ"
        : dayNumber === 3
        ? "СР"
        : dayNumber === 4
        ? "ЧТ"
        : dayNumber === 5
        ? "ПТ"
        : dayNumber === 6
        ? "СБ"
        : "Такого дня недели не существует";
    let currentDate = new Date();
    currentDate = `${day}, ${currentDate.getDate()}.0${
      currentDate.getMonth() + 1
    }.${currentDate.getFullYear()} в ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    console.log(currentDate);
    return currentDate;
  }

  const params = new URL(document.location).searchParams;
  const jewelryId = Number(params.get("id"));

  const store = new ReviewManager(jewelryId);

  store.addedReviews.forEach(({ name, comment, published }) =>
    createUserComment(name, comment, addDate(new Date(published)))
  );

  button.addEventListener("click", () => {
    const [name, comment, date] = [sendName(), sendComment(), addDate()];

    store.add({
      name,
      published: new Date(),
      comment,
    });

    createUserComment(name, comment, date);
  });
}
