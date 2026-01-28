const selectElem = document.getElementById("webdevlist");
const subtitle = document.querySelector(".subtitle");
const topics = document.getElementById("topics");

selectElem.addEventListener("change", function () {
  const value = selectElem.value;

  if (value === "html") {
    subtitle.textContent = "HTML defines the structure of the web.";
    topics.style.backgroundColor = "#f2f2f2";
    topics.style.padding = "20px";
  }

  else if (value === "css") {
    subtitle.textContent = "CSS controls how the web looks.";
    topics.style.backgroundColor = "#e6f0ff";
    topics.style.padding = "20px";
  }

  else if (value === "js") {
    subtitle.textContent = "JavaScript makes the web interactive.";
    topics.style.backgroundColor = "#fff3cd";
    topics.style.padding = "20px";
  }

  else {
    subtitle.textContent =
      "The foundational technologies that power websites and web applications";
    topics.style.backgroundColor = "transparent";
    topics.style.padding = "0";
  }
});
