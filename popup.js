chrome.runtime.sendMessage({ action: "getActiveTabUrl" }, function (response) {
  document.getElementById("url").innerText = response.url;
});

document.getElementById("settings").style.display = "none";
const urlStatic = document.getElementById("url").innerText;

chrome.runtime.sendMessage(
  { action: "getDomContent", url: urlStatic },
  function (response) {
    document.getElementById("DOM").innerText = response.domContent;
  }
);

function removeTagsAndScriptStyleContent(content) {
  const tagPattern = /<[^>]*>/g; // Regular expression pattern to match tags
  const scriptPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi; // Regular expression pattern to match <script></script> tags
  const stylePattern = /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi; // Regular expression pattern to match <style></style> tags
  const imgPattern = /<img\b[^<]*(?:(?!\/>)<[^<]*)*\/>/gi; // Regular expression pattern to match <img /> tags
  const svgPattern = /<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi; // Regular expression pattern to match <svg></svg> tags

  // Remove script, style, img and svg tags
  let cleanedContent = content.replace(scriptPattern, "");
  cleanedContent = cleanedContent.replace(stylePattern, "");
  cleanedContent = cleanedContent.replace(imgPattern, "");
  cleanedContent = cleanedContent.replace(svgPattern, "");

  // Remove remaining tags
  cleanedContent = cleanedContent.replace(tagPattern, "");

  return cleanedContent;
}

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", submitHandle);

  function submitHandle(e) {
    e.preventDefault();
    // Set the generating status
    document.getElementById("status").innerHTML = "Generating cover letter...";
    document.getElementById("coverLetter").value = "";
    document.getElementsByClassName("loader")[0].style.display = "block";

    // Get form values
    const prompt = document.getElementById("prompt").value;
    const domContent = document.getElementById("DOM").innerText;
    const parsedContent = removeTagsAndScriptStyleContent(domContent);
    const urlStatic = document.getElementById("url").innerText;

    // Get settings
    const { firstName, lastName, portfolio, github } = getSettings();
    const settingsText = `First Name: ${firstName} Last Name: ${lastName}`;

    // Get prompt settings
    const {
      model,
      tone,
      languageStyle,
      formatting,
      portfolioChecked,
      githubChecked,
      lastNameChecked,
      copyToClipboardChecked,
    } = getPromptSettings();

    const promptSettingsText =
      `Tone should be ${tone}, Language style should be ${languageStyle}, Formatting should be ${formatting}.` +
      `
    ${
      portfolioChecked
        ? `Portfolio: ${portfolio} (include porfolio url in the middle of the cover letter)`
        : ""
    } ${
        githubChecked
          ? `Github: ${github} (include porfolio url in the middle of the cover letter)`
          : ""
      } ${
        lastNameChecked
          ? `Last Name: ${lastName} (include last name with first name at the end of cover letter)`
          : "Do not include last name in the cover letter"
      }`;

    // Submit to backend
    fetch("http://localhost:5000/gpt/coverletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `${prompt}
          ${settingsText}
          ${promptSettingsText}
           Here's the dom content of the job description page. ${urlStatic}
           ${parsedContent}
           Please analyse the content of the job description and generate a professional coverletter from it.
           `,
        model,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("coverLetter").value = data.coverletter;
        document.getElementById("status").innerHTML = "";
        document.getElementsByClassName("loader")[0].style.display = "none";
        if (copyToClipboardChecked) {
          navigator.clipboard.writeText(data.coverletter);
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        document.getElementById("status").innerHTML =
          "Error generating cover letter, contact support";
        document.getElementsByClassName("loader")[0].style.display = "none";
      });
  }
});

function onSettingClick() {
  if (document.getElementById("settings").style.display === "flex") return;

  document.getElementById("settings").style.display = "flex";
  document.getElementById("setting").disabled = true;
  autoPopulate();
}

function getSettings() {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const portfolio = localStorage.getItem("portfolio");
  const github = localStorage.getItem("github");

  return { firstName, lastName, portfolio, github };
}

// Save details to localStorage
function saveDetails() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const portfolio = document.getElementById("portfolio").value;
  const github = document.getElementById("github").value;

  const storedFirstName = localStorage.getItem("firstName");
  const storedLastName = localStorage.getItem("lastName");
  const storedPortfolio = localStorage.getItem("portfolio");
  const storedGithub = localStorage.getItem("github");

  if (
    firstName === storedFirstName &&
    lastName === storedLastName &&
    portfolio === storedPortfolio &&
    github === storedGithub
  ) {
    alert("No changes made!");
    return;
  }

  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("portfolio", portfolio);
  localStorage.setItem("github", github);

  alert("Successfully saved settings!");

  closePopup();
}

// Close popup
function closePopup() {
  document.getElementById("settings").style.display = "none";
  document.getElementById("setting").disabled = false;
}

// Autopopulate from localStorage
function autoPopulate() {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const portfolio = localStorage.getItem("portfolio");
  const github = localStorage.getItem("github");

  const model = localStorage.getItem("model");

  const tone = localStorage.getItem("tone");
  const languageStyle = localStorage.getItem("languageStyle");
  const formatting = localStorage.getItem("formatting");
  const portfolioChecked = localStorage.getItem("portfolioChecked");
  const githubChecked = localStorage.getItem("githubChecked");
  const lastNameChecked = localStorage.getItem("lastNameChecked");
  const copyToClipboardChecked = localStorage.getItem("copyToClipboardChecked");

  if (model) document.getElementById("model-select").value = model;

  if (firstName) document.getElementById("firstName").value = firstName;
  if (lastName) document.getElementById("lastName").value = lastName;
  if (portfolio) document.getElementById("portfolio").value = portfolio;
  if (github) document.getElementById("github").value = github;
  if (tone) document.getElementById("tone-select").value = tone;

  if (languageStyle)
    document.getElementById("language-style-select").value = languageStyle;
  if (formatting)
    document.getElementById("formatting-select").value = formatting;
  if (portfolioChecked === "true")
    document.getElementById("portfolio-check").checked = true;
  if (githubChecked === "true")
    document.getElementById("github-check").checked = true;
  if (lastNameChecked === "true")
    document.getElementById("lastname-check").checked = true;
  if (copyToClipboardChecked === "true")
    document.getElementById("copy-to-clipboard-check").checked = true;
}

function getPromptSettings() {
  const model = document.getElementById("model-select").value;
  const tone = document.getElementById("tone-select").value;
  const languageStyle = document.getElementById("language-style-select").value;
  const formatting = document.getElementById("formatting-select").value;
  const portfolioChecked = document.getElementById("portfolio-check").checked;
  const githubChecked = document.getElementById("github-check").checked;
  const lastNameChecked = document.getElementById("lastname-check").checked;
  const copyToClipboardChecked = document.getElementById(
    "copy-to-clipboard-check"
  ).checked;

  return {
    model,
    tone,
    languageStyle,
    formatting,
    portfolioChecked,
    githubChecked,
    lastNameChecked,
    copyToClipboardChecked,
  };
}

const savePromptSettings = () => {
  const model = document.getElementById("model-select").value;
  const tone = document.getElementById("tone-select").value;
  const languageStyle = document.getElementById("language-style-select").value;
  const formatting = document.getElementById("formatting-select").value;
  const portfolioChecked = document.getElementById("portfolio-check").checked;
  const githubChecked = document.getElementById("github-check").checked;
  const lastNameChecked = document.getElementById("lastname-check").checked;
  const copyToClipboardChecked = document.getElementById(
    "copy-to-clipboard-check"
  ).checked;

  localStorage.setItem("model", model);
  localStorage.setItem("tone", tone);
  localStorage.setItem("languageStyle", languageStyle);
  localStorage.setItem("formatting", formatting);
  localStorage.setItem("portfolioChecked", portfolioChecked);
  localStorage.setItem("githubChecked", githubChecked);
  localStorage.setItem("lastNameChecked", lastNameChecked);
  localStorage.setItem("copyToClipboardChecked", copyToClipboardChecked);
};

document.getElementById("setting").addEventListener("click", onSettingClick);
document.getElementById("save").addEventListener("click", saveDetails);
document.getElementById("cancel").addEventListener("click", closePopup);

document
  .getElementById("model-select")
  .addEventListener("change", savePromptSettings);
document
  .getElementById("tone-select")
  .addEventListener("change", savePromptSettings);
document
  .getElementById("language-style-select")
  .addEventListener("change", savePromptSettings);
document
  .getElementById("formatting-select")
  .addEventListener("change", savePromptSettings);
document
  .getElementById("portfolio-check")
  .addEventListener("change", savePromptSettings);
document
  .getElementById("github-check")
  .addEventListener("change", savePromptSettings);
document
  .getElementById("lastname-check")
  .addEventListener("change", savePromptSettings);
document
  .getElementById("copy-to-clipboard-check")
  .addEventListener("change", savePromptSettings);

autoPopulate();
