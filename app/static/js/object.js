// const screenObject = document.querySelector("#screen");
// const screenList = document.querySelector("#screen_list");
const randomObject = document.querySelector("#random");
const randomList = document.querySelector("#random_list");
// const groupObject = document.querySelector("#group");
// const groupList = document.querySelector("#group_list");
const quizObject = document.querySelector("#quiz");
const quizList = document.querySelector("#quiz_list");

const HIDDEN_CLASSNAME = "hidden";

function onMouseScreen(event) {
  event.preventDefault();
  screenList.classList.remove(HIDDEN_CLASSNAME);
}

function onMouseRandom(event) {
  event.preventDefault();
  randomList.classList.remove(HIDDEN_CLASSNAME);
}

function onMouseGroup(event) {
  event.preventDefault();
  groupList.classList.remove(HIDDEN_CLASSNAME);
}

function onMouseQuiz(event) {
  event.preventDefault();
  quizList.classList.remove(HIDDEN_CLASSNAME);
}

function outMouseScreen(event) {
  event.preventDefault();
  screenList.classList.add(HIDDEN_CLASSNAME);
}

function outMouseRandom(event) {
  event.preventDefault();
  randomList.classList.add(HIDDEN_CLASSNAME);
}

function outMouseGroup(event) {
  event.preventDefault();
  groupList.classList.add(HIDDEN_CLASSNAME);
}

function outMouseQuiz(event) {
  event.preventDefault();
  quizList.classList.add(HIDDEN_CLASSNAME);
}

// screenObject.addEventListener("mouseover", onMouseScreen);
// screenList.addEventListener("mouseover", onMouseScreen);
randomObject.addEventListener("mouseover", onMouseRandom);
randomList.addEventListener("mouseover", onMouseRandom);
quizObject.addEventListener("mouseover", onMouseQuiz);
quizList.addEventListener("mouseover", onMouseQuiz);
// groupObject.addEventListener("mouseover", onMouseGroup);
// groupList.addEventListener("mouseover", onMouseGroup);

// screenObject.addEventListener("mouseout",outMouseScreen);
// screenList.addEventListener("mouseout", outMouseScreen);
// randomObject.addEventListener("mouseout",outMouseRandom);
randomList.addEventListener("mouseout", outMouseRandom);
quizList.addEventListener("mouseout", outMouseQuiz);
// groupObject.addEventListener("mouseout",outMouseGroup)
// groupList.addEventListener("mouseout", outMouseGroup);

// ???????????? ??????

const chosen = document.querySelector("#chosen");
const chosenLabel = document.querySelector("#chosenUser");
const replay = document.querySelector("#reChoose");
const closeChoose = document.querySelector("#closeChoose");
const randomButton = document.querySelector("#random_button");

// let users = ["?????????", "?????????", "?????????", "?????????"]; // ???????????? ?????? ???????????? ??????????????? ??????
var randomRunTime = 20;

function startTime() {
  // ?????? ?????? ?????? ??? ????????????
  var x = setInterval(function () {
    closeChoose.value = `?????? ( ${randomRunTime} s)`;
    if (randomRunTime == 0) {
      chosen.classList.add(HIDDEN_CLASSNAME);
      clearInterval(x);
    } else {
      closeChoose.value = `?????? ( ${randomRunTime} s)`;
      randomRunTime = randomRunTime - 1;
    }
  }, 1000);
}

function randomUser(event) {
  // ?????? ???????????? ??? ???????????? ??????
  event.preventDefault();
  let users = document.querySelectorAll(".member_name");
  console.log(users);
  let chosenUser = users[Math.floor(Math.random() * users.length)].innerText;

  chosenLabel.innerText = `>> ${chosenUser} <<`;
  randomRunTime = 20;
  closeChoose.value = `?????? ( ${randomRunTime} s)`;
  chosen.classList.remove(HIDDEN_CLASSNAME);
  startTime();
}

function reChoose(event) {
  // ????????? ????????? ?????? ??????????????? ??????
  event.preventDefault();
  let users = document.querySelectorAll(".member_name");
  console.log(users);
  randomRunTime = 20;
  closeChoose.value = `?????? ( ${randomRunTime} s)`;
  let chosenUser = users[Math.floor(Math.random() * users.length)].innerText;
  while (chosenLabel.innerText == `>> ${chosenUser} <<`) {
    chosenUser = users[Math.floor(Math.random() * users.length)].innerText;
  }
  chosenLabel.innerText = `>> ${chosenUser} <<`;
}

function closeRandom(event) {
  // ????????? ?????? ??????
  event.preventDefault();
  chosenLabel.innerText = "";
  chosen.classList.add(HIDDEN_CLASSNAME);
  clearInterval();
}

randomButton.addEventListener("click", randomUser);
replay.addEventListener("click", reChoose);
closeChoose.addEventListener("click", closeRandom);

// ?????????

// const createGroup = document.querySelector("#create_group");
// const selectGroup = document.querySelector("#select_member");
// const userList = document.querySelector("#user_list");
// const select = document.querySelector("#select");
// const closeUsers = document.querySelector("#closeUsers");
// const groupMember = document.querySelector("#group_member");

// const groupButtons = document.querySelector("#group_button");
// const speakTo = document.querySelector("#speak_to");
// const speakAll = document.querySelector("#speak_all");
// const speakGroup = document.querySelector("#speak_group");
// const leaveGroup = document.querySelector("#leave_group");

// // ?????? ????????? ??????
// function addUser(username) {
//   const input = document.createElement("input");
//   input.classList.add("userCheck");
//   input.id = username;
//   input.type = "checkbox";
//   input.value = username;
//   const label = document.createElement("label");
//   label.classList.add("user");
//   label.innerText = username;
//   const p = document.createElement("p");
//   p.classList.add("userP");
//   p.appendChild(input);
//   p.appendChild(label);
//   userList.appendChild(p);
// }

// // ?????? ?????? ????????? ??????
// function openGroup(event) {
//   event.preventDefault();
//   var deleteP = document.querySelectorAll(".userP");
//   for (var d of deleteP) {
//     // console.log(d);
//     d.remove();
//   }
//   for (var u of users) {
//     addUser(u);
//   }
//   selectGroup.classList.remove(HIDDEN_CLASSNAME);
// }

// // ???????????? ????????? ??????
// function closeGroup(event) {
//   event.preventDefault();
//   selectGroup.classList.add(HIDDEN_CLASSNAME);
// }

// // ?????? ??????
// function decideGroup(event) {
//   event.preventDefault();
//   var members = document.querySelectorAll(".userCheck");
//   var memberList = [];
//   for (var m of members) {
//     if (m.checked) {
//       memberList.push(m.value);
//     }
//   }
//   groupMember.innerText = `????????????: ${memberList}`;
//   groupMember.classList.remove(HIDDEN_CLASSNAME);
//   selectGroup.classList.add(HIDDEN_CLASSNAME);
//   groupButtons.classList.remove(HIDDEN_CLASSNAME);
//   speakTo.innerText = "?????????: ??????";
// }

// //?????? ?????????
// function deleteGroup(event) {
//   event.preventDefault();
//   groupButtons.classList.add(HIDDEN_CLASSNAME);
//   groupMember.classList.add(HIDDEN_CLASSNAME);
//   speakTo.innerText = "?????????: ??????";
// }

// createGroup.addEventListener("click", openGroup);
// closeUsers.addEventListener("click", closeGroup);
// select.addEventListener("click", decideGroup);
// leaveGroup.addEventListener("click", deleteGroup);

// // ????????? ?????????
// speakAll.addEventListener("click", (event) => {
//   event.preventDefault();
//   speakTo.innerText = "?????????: ??????";
// });

// // ????????? ????????????
// speakGroup.addEventListener("click", (event) => {
//   event.preventDefault();
//   speakTo.innerText = "?????????: ??????";
// });
