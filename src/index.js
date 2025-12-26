function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1.5,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#userInstructions");
  let apiKey = "afaa81335fo0e0a3b010cf4b34f66tb4";
  let prompt = `Generate a poem with the subject: ${instructionInput.value}`;
  let context =
    "You are a poetry profesor with a love of the old world. Write a short 4 line poem with <br/> between lines. stick to the subject given by the user. Sign the poem at the end not the begining with 'She Codes AI' inside a <strong> element.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${userInstructions.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let generatePoemFormElement = document.querySelector("#poem-generator-form");
generatePoemFormElement.addEventListener("submit", generatePoem);
