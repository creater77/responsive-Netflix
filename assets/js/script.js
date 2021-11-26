const faqQuestion = document.querySelectorAll(".faq-quastion");
const input = document.querySelectorAll(".inpEM");
const placeholder = document.querySelectorAll(".email__inp-placeholder");
const stick = document.querySelector(".stick");
const modalWindow = document.querySelector(".modal-window");
const linksBtn = document.querySelector(".links-btn");
const html = document.querySelector("html")

for (let i = 0; i < faqQuestion.length; i++) {
  faqQuestion[i].addEventListener("click", function(event) {

    this.classList.toggle("active");
    let faqAsking = this.nextElementSibling;

    if (faqAsking.style.maxHeight){
      faqAsking.style.maxHeight = null;
    } else {
      faqAsking.style.maxHeight = faqAsking.scrollHeight + "px";
    }
  })
}

linksBtn.addEventListener("click", () => {
  modalWindow.classList.add("active");
  html.style.overflowY = "hidden"
})

stick.addEventListener("click", () => {
  modalWindow.classList.remove("active");
  html.style.overflowY = "scroll"
})


// Animate
const sr = ScrollReveal({
  distance: '50px',
  duration: 1800,
  reset: true
});

sr.reveal(`.main__section2-content-block1, .main__section3-content-block2, .main__section4-content-block1, .main__section5-content-block2`, {
  origin: 'top'
})
