function writePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Blahblah blah",
    autoStart: true,
    delay: 1.5,
    cursor: "",
  });
}

let generatePoemFormElement = document.querySelector("#poem-generator-form");
generatePoemFormElement.addEventListener("submit", writePoem);
