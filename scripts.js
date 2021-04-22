const faqTxt = document.querySelectorAll(".faq-txt");
const dropIco = document.querySelectorAll(".drop-ico");
const faqH4 = document.querySelectorAll("h4");
const faqContainer = document.querySelectorAll(".faq-container");
const dropImg = document.querySelectorAll('[alt="dropdown arrow"]');

// dropIco[0].addEventListener("click", collapse);
// faqH4.addEventListener("click", collapse);

// function node(nodeNum) {
//   dropIco[nodeNum].addEventListener("click", collapse(nodeNum));
// }

// dropImg.forEach(function (e, index) {
//   e.setAttribute("onclick", `rotate()`);
//   console.log(e);
// });

dropIco.forEach(function (e, index) {
  e.setAttribute("onclick", `collapse(${index})`);
  // e.addEventListener("click", collapse(index));
  // console.log(e);
});

faqH4.forEach(function (e, index) {
  e.setAttribute("onclick", `collapse(${index})`);
  // e.addEventListener("click", collapse(index));
});

function rotate(e) {
  dropIco[e].style.transform = "rotate(-180deg)";
}

function collapse(classIndex) {
  faqTxt[classIndex].classList.toggle("expand");
  faqContainer[classIndex].classList.toggle("height");
}

// function collapse() {
//   faqTxt.classList.toggle("expand");
// }

// console.log(faqH4);
//   console.log(faqTxt);
//   console.log(dropIco);
