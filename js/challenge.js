let counterParent = document.getElementById("counter");
let num = parseInt(counterParent.innerText);

let button = document.getElementById("pause");
button.addEventListener("click", handlePause);
let intervalId = setInterval(counter, 1000);
let plus = document.getElementById("plus");
plus.addEventListener("click", counter);
let minus = document.getElementById("minus");
minus.addEventListener("click", decrement);
let heart = document.getElementById("heart");
heart.addEventListener("click", addLike);

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  addComment();
});

function counter() {
  counterParent.innerText = num += 1;
}

function decrement() {
  counterParent.innerText = num -= 1;
}

function handlePause() {
  if (intervalId != null) {
    pause();
  } else if (intervalId == null) {
    resume();
  }
}

function pause() {
  clearInterval(intervalId);
  document.getElementById("pause").innerText = "resume";
  intervalId = null;
  plus.removeEventListener("click", counter);
  minus.removeEventListener("click", decrement);
  heart.removeEventListener("click", addLike);
}

function resume() {
  intervalId = setInterval(counter, 1000);
  document.getElementById("pause").innerText = "pause";
  minus.addEventListener("click", decrement);
  plus.addEventListener("click", counter);
  heart.addEventListener("click", addLike);
}

function addLike() {
  let likeField = document.getElementById("like-counter");
  if (likeField) {
    let likeNum = parseInt(likeField.innerText);
    likeField.innerText = likeNum + 1;
  } else {
    heart.innerHTML += "<div id='like-counter'>1</div>";
  }
}

function addComment() {
  let input = document.getElementById("comment-input").value;
  document.getElementById("list").innerHTML += `<p>${input}</p>`;
}
