function displayPoem(response) {
  console.log("Your poem has been generated!");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1.5,
    cursor: "",
  });
}

function writePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#userInstructions");
  let apiKey = "afaa81335fo0e0a3b010cf4b34f66tb4";
  let prompt = `Generate a poem with the subject: ${instructionInput.value}`;
  let context =
    "You are a poetry profesor with a love of the old world. Write a short 4 line poem with <br/> between lines. Sign the poem at the end not the begining with <strong/> element 'She Codes AI'";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("writing a poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);
  axios.get(apiURL).then(displayPoem);
}

let generatePoemFormElement = document.querySelector("#poem-generator-form");
generatePoemFormElement.addEventListener("submit", writePoem);
