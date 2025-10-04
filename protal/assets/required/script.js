const aboutBtn = document.querySelector(".content h3");
const list = document.querySelector(".list");
const overlay2 = document.querySelector(".overlay2");
const overlay2Title = overlay2.querySelector(".title");
const overlay2Text = overlay2.querySelector(".text");

aboutBtn.addEventListener("click", () => {
  list.style.display = list.style.display === "block" ? "none" : "block";
});

overlay2.addEventListener("click", (e) => {
  if (e.target === overlay2) {
    overlay2.style.display = "none";
  }
});
