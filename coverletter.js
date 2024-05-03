// Todo: replace the logo url with the actual logo url
const logoUrl = "https://i.ibb.co/jVSts5R/main.png";
const expandIconUrl = "https://i.ibb.co/1dJ9tBB/expand.png";

const arrowDownIconUrl =
  "https://i.ibb.co/Z2gvx9s/keyboard-double-arrow-down.png";
const arrowUpIconUrl = "https://i.ibb.co/bBkfWMQ/keyboard-double-arrow-up.png";

// Create a new <div> element
const html = document.createElement("div");

// Create header section
const header = document.createElement("div");
header.className = "header";

// Create title container
const titleContainer = document.createElement("div");
titleContainer.className = "title-container";

// Create logo image
const logo = document.createElement("img");
logo.src = logoUrl;
logo.className = "logo";
titleContainer.appendChild(logo);

// Create title
const title = document.createElement("h3");
title.textContent = "CoverCraft AI";
title.className = "title";
titleContainer.appendChild(title);

// Create menu container
const menuContainer = document.createElement("div");
menuContainer.className = "menu-container";

// Create expand icon
const expandIcon = document.createElement("img");
expandIcon.src = expandIconUrl;
expandIcon.className = "expand-icon";
menuContainer.appendChild(expandIcon);

// Append title container and menu container to header
header.appendChild(titleContainer);
header.appendChild(menuContainer);

// Append header to the main HTML div
html.appendChild(header);

const body = document.createElement("div");
body.className = "main-container";

const shortInfoContainer = document.createElement("div");
shortInfoContainer.className = "row-container";

const shortInfoLabel = document.createElement("label");
shortInfoLabel.textContent = "Short Info:";
const shortInfoTextArea = document.createElement("textarea");
shortInfoTextArea.id = "prompt";
shortInfoTextArea.rows = "4";
shortInfoTextArea.cols = "50";
shortInfoTextArea.textContent =
  "I'm a senior software engineer with 9 years of experience. I specialize in full stack development (Frontend: React, Vue, Typescript, Backend: Node, FastAPI, Django)";

shortInfoContainer.appendChild(shortInfoLabel);
shortInfoContainer.appendChild(shortInfoTextArea);

body.appendChild(shortInfoContainer);

const selectToggleContainer = document.createElement("div");
selectToggleContainer.className = "select-toggle-container";
const selectToggleLabel = document.createElement("label");
selectToggleLabel.textContent = "Prompt Settings";
selectToggleLabel.style.cursor = "pointer";
const selectToggleButton = document.createElement("img");
selectToggleButton.className = "select-toggle";
selectToggleButton.src = arrowDownIconUrl;
selectToggleContainer.appendChild(selectToggleButton);
selectToggleContainer.appendChild(selectToggleLabel);
body.appendChild(selectToggleContainer);

const selectsWrapper = document.createElement("div");
selectsWrapper.className = "selects-wrapper";
selectsWrapper.style.display = "none";

const modelSelectContainer = document.createElement("div");
modelSelectContainer.className = "row-container";

const modelSelectLabel = document.createElement("label");
modelSelectLabel.textContent = "Model";
const modelSelect = document.createElement("select");
modelSelect.id = "model-select";

const models = [
  { value: "gpt-3.5-turbo", text: "GPT 3.5 Turbo" },
  { value: "gpt-3.5-0613", text: "GPT 3.5 Turbo - New!" },
  { value: "gpt-3.5-turbo-16k", text: "GPT 3.5 Turbo 16K" },
  { value: "gpt-4", text: "GPT 4 8k" },
  { value: "gpt-4-32k", text: "GPT 4 32k" },
  { value: "gpt-4-turbo", text: "GPT 4 Turbo" },
];

models.forEach((model) => {
  const option = document.createElement("option");
  option.value = model.value;
  option.textContent = model.text;
  modelSelect.appendChild(option);
});

modelSelectContainer.appendChild(modelSelectLabel);
modelSelectContainer.appendChild(modelSelect);

selectsWrapper.appendChild(modelSelectContainer);

const toneSelectContainer = document.createElement("div");
toneSelectContainer.className = "row-container";

const toneSelectLabel = document.createElement("label");
toneSelectLabel.textContent = "Tone";
const toneSelect = document.createElement("select");
toneSelect.id = "tone-select";

const tones = [
  { value: "professional", text: "Professional" },
  { value: "casual", text: "Casual" },
  { value: "formal", text: "Formal" },
  { value: "friendly", text: "Friendly" },
];

tones.forEach((tone) => {
  const option = document.createElement("option");
  option.value = tone.value;
  option.textContent = tone.text;
  toneSelect.appendChild(option);
});

toneSelectContainer.appendChild(toneSelectLabel);
toneSelectContainer.appendChild(toneSelect);

selectsWrapper.appendChild(toneSelectContainer);

const languageStyleSelectContainer = document.createElement("div");
languageStyleSelectContainer.className = "row-container";

const languageStyleSelectLabel = document.createElement("label");
languageStyleSelectLabel.textContent = "Language Style";
const languageStyleSelect = document.createElement("select");
languageStyleSelect.id = "language-style-select";

const languageStyles = [
  { value: "formal", text: "Formal" },
  { value: "informal", text: "Informal" },
];

languageStyles.forEach((languageStyle) => {
  const option = document.createElement("option");
  option.value = languageStyle.value;
  option.textContent = languageStyle.text;
  languageStyleSelect.appendChild(option);
});

languageStyleSelectContainer.appendChild(languageStyleSelectLabel);
languageStyleSelectContainer.appendChild(languageStyleSelect);

selectsWrapper.appendChild(languageStyleSelectContainer);

const formattingSelectContainer = document.createElement("div");
formattingSelectContainer.className = "row-container";

const formattingSelectLabel = document.createElement("label");
formattingSelectLabel.textContent = "Formatting";

const formattingSelect = document.createElement("select");
formattingSelect.id = "formatting-select";

const formattingOptions = [
  { value: "standard", text: "Standard" },
  { value: "creative", text: "Creative" },
];

formattingOptions.forEach((formattingOption) => {
  const option = document.createElement("option");
  option.value = formattingOption.value;
  option.textContent = formattingOption.text;
  formattingSelect.appendChild(option);
});

formattingSelectContainer.appendChild(formattingSelectLabel);
formattingSelectContainer.appendChild(formattingSelect);

selectsWrapper.appendChild(formattingSelectContainer);

body.appendChild(selectsWrapper);

const checkBoxGroup = document.createElement("div");
checkBoxGroup.className = "checkbox-group";

const lastNameCheckContainer = document.createElement("div");
lastNameCheckContainer.className = "checkbox-container";
const lastNameCheck = document.createElement("input");
lastNameCheck.id = "lastname-check";
lastNameCheck.type = "checkbox";
const lastNameCheckLabel = document.createElement("label");
lastNameCheckLabel.textContent = "Last Name";
lastNameCheckContainer.appendChild(lastNameCheck);
lastNameCheckContainer.appendChild(lastNameCheckLabel);
checkBoxGroup.appendChild(lastNameCheckContainer);

const portfolioCheckContainer = document.createElement("div");
portfolioCheckContainer.className = "checkbox-container";
const portfolioCheck = document.createElement("input");
portfolioCheck.id = "portfolio-check";
portfolioCheck.type = "checkbox";
const portfolioCheckLabel = document.createElement("label");
portfolioCheckLabel.textContent = "Portfolio";
portfolioCheckContainer.appendChild(portfolioCheck);
portfolioCheckContainer.appendChild(portfolioCheckLabel);
checkBoxGroup.appendChild(portfolioCheckContainer);

const githubCheckContainer = document.createElement("div");
githubCheckContainer.className = "checkbox-container";
const githubCheck = document.createElement("input");
githubCheck.id = "github-check";
githubCheck.type = "checkbox";
const githubCheckLabel = document.createElement("label");
githubCheckLabel.textContent = "GitHub";
githubCheckContainer.appendChild(githubCheck);
githubCheckContainer.appendChild(githubCheckLabel);
checkBoxGroup.appendChild(githubCheckContainer);

const copyToClipboardCheckContainer = document.createElement("div");
copyToClipboardCheckContainer.className = "checkbox-container";
const copyToClipboardCheck = document.createElement("input");
copyToClipboardCheck.id = "copy-to-clipboard-check";
copyToClipboardCheck.type = "checkbox";
const copyToClipboardCheckLabel = document.createElement("label");
copyToClipboardCheckLabel.textContent = "Copy to clipboard";
copyToClipboardCheckContainer.appendChild(copyToClipboardCheck);
copyToClipboardCheckContainer.appendChild(copyToClipboardCheckLabel);
checkBoxGroup.appendChild(copyToClipboardCheckContainer);

body.appendChild(checkBoxGroup);

const coverLetterContainer = document.createElement("div");
coverLetterContainer.className = "row-container";
const coverLetterLabel = document.createElement("label");
coverLetterLabel.textContent = "Cover Letter:";
const coverLetterArea = document.createElement("textarea");
coverLetterArea.id = "coverLetter";
coverLetterArea.rows = "10";
coverLetterArea.cols = "50";
coverLetterContainer.appendChild(coverLetterLabel);
coverLetterContainer.appendChild(coverLetterArea);

body.appendChild(coverLetterContainer);

const urlContainer = document.createElement("div");
urlContainer.className = "row-container";
const urlLabel = document.createElement("label");
urlLabel.textContent = "URL:";
const urlSpan = document.createElement("span");
urlSpan.textContent = window.location.href;
urlContainer.appendChild(urlLabel);
urlContainer.appendChild(urlSpan);

body.appendChild(urlContainer);

const loaderContainer = document.createElement("div");
loaderContainer.className = "loader-container";
const loadingLabel = document.createElement("label");
const loadingSpan = document.createElement("span");
loadingSpan.className = "loader";
loaderContainer.appendChild(loadingLabel);
loaderContainer.appendChild(loadingSpan);
body.appendChild(loaderContainer);

const buttonsContainer = document.createElement("div");
buttonsContainer.className = "buttons-container";
const generateButton = document.createElement("button");
generateButton.id = "submit";
generateButton.textContent = "Generate";

const generatePDFButton = document.createElement("button");
generatePDFButton.id = "generate-pdf";
generatePDFButton.textContent = "Download PDF";

const settingsButton = document.createElement("button");
settingsButton.id = "setting";
settingsButton.textContent = "Settings";

buttonsContainer.appendChild(generateButton);
buttonsContainer.appendChild(generatePDFButton);
buttonsContainer.appendChild(settingsButton);
body.appendChild(buttonsContainer);

const settingsContainter = document.createElement("div");
settingsContainter.id = "settings";

const serverUrlContainer = document.createElement("div");
serverUrlContainer.className = "item";
const serverUrlLabel = document.createElement("label");
serverUrlLabel.className = "item-label";
serverUrlLabel.textContent = "Server URL:";
const serverUrlInput = document.createElement("input");
serverUrlInput.type = "text";
serverUrlInput.id = "serverUrl";
serverUrlInput.value = "https://ruling-similarly-dove.ngrok-free.app";
serverUrlContainer.appendChild(serverUrlLabel);
serverUrlContainer.appendChild(serverUrlInput);
settingsContainter.appendChild(serverUrlContainer);

const firstNameContainer = document.createElement("div");
firstNameContainer.className = "item";
const firstNameLabel = document.createElement("label");
firstNameLabel.className = "item-label";
firstNameLabel.textContent = "First Name:";
const firstNameInput = document.createElement("input");
firstNameInput.type = "text";
firstNameInput.id = "firstName";
firstNameContainer.appendChild(firstNameLabel);
firstNameContainer.appendChild(firstNameInput);
settingsContainter.appendChild(firstNameContainer);

const lastNameContainer = document.createElement("div");
lastNameContainer.className = "item";
const lastNameLabel = document.createElement("label");
lastNameLabel.className = "item-label";
lastNameLabel.textContent = "Last Name:";
const lastNameInput = document.createElement("input");
lastNameInput.type = "text";
lastNameInput.id = "lastName";
lastNameContainer.appendChild(lastNameLabel);
lastNameContainer.appendChild(lastNameInput);
settingsContainter.appendChild(lastNameContainer);

const portfolioContainter = document.createElement("div");
portfolioContainter.className = "item";
const portfolioLabel = document.createElement("label");
portfolioLabel.className = "item-label";
portfolioLabel.textContent = "Portfolio:";
const portfolioInput = document.createElement("input");
portfolioInput.type = "text";
portfolioInput.id = "portfolio";
portfolioContainter.appendChild(portfolioLabel);
portfolioContainter.appendChild(portfolioInput);
settingsContainter.appendChild(portfolioContainter);

body.appendChild(settingsContainter);

const githubContainer = document.createElement("div");
githubContainer.className = "item";
const githubLabel = document.createElement("label");
githubLabel.className = "item-label";
githubLabel.textContent = "GitHub:";
const githubInput = document.createElement("input");
githubInput.type = "text";
githubInput.id = "github";
githubContainer.appendChild(githubLabel);
githubContainer.appendChild(githubInput);
settingsContainter.appendChild(githubContainer);

const confirmButtonsContainer = document.createElement("div");
confirmButtonsContainer.className = "buttons-container";
const saveButton = document.createElement("button");
saveButton.textContent = "Save";
const cancelButton = document.createElement("button");
cancelButton.textContent = "Cancel";
confirmButtonsContainer.appendChild(saveButton);
confirmButtonsContainer.appendChild(cancelButton);

settingsContainter.appendChild(confirmButtonsContainer);

html.appendChild(body);
html.className = "cover-letter-container";

const toggleButton = document.createElement("button");
const icon = document.createElement("img");
icon.src = logoUrl;
toggleButton.className = "toggle-button";
toggleButton.appendChild(icon);

html.style.display = "none";
settingsContainter.style.display = "none";

document.body.appendChild(toggleButton);
document.body.appendChild(html);

function saveUserSettings(settings) {
  chrome.storage.local.set({ userSettings: settings }, function () {
    if (chrome.runtime.lastError) {
      alert("Error saving to storage:", chrome.runtime.lastError);
    } else {
    }
  });
}

toggleButton.addEventListener("click", () => {
  html.style.display = "block";
});

selectToggleContainer.addEventListener("click", () => {
  if (selectsWrapper.style.display === "flex") {
    selectsWrapper.style.display = "none";
    selectToggleButton.src = arrowDownIconUrl;
  } else {
    selectsWrapper.style.display = "flex";
    selectToggleButton.src = arrowUpIconUrl;
  }
});

expandIcon.addEventListener("click", () => {
  html.style.display = "none";
});

generatePDFButton.addEventListener("click", () => {
  getGeneratePdf();
});

settingsButton.addEventListener("click", () => {
  if (settingsContainter.style.display === "none") {
    settingsContainter.style.display = "flex";
  } else {
    settingsContainter.style.display = "none";
  }
});

saveButton.addEventListener("click", () => {
  saveDetails();
  settingsContainter.style.display = "none";
});

cancelButton.addEventListener("click", () => {
  settingsContainter.style.display = "none";
});

const defaultSettings = {
  model: "gpt-3.5-turbo",
  tone: "professional",
  languageStyle: "formal",
  formatting: "standard",
  portfolioChecked: false,
  githubChecked: false,
  lastNameChecked: false,
  copyToClipboardChecked: false,
  serverUrl: "https://ruling-similarly-dove.ngrok-free.app",
  firstName: "",
  lastName: "",
  portfolio: "",
  github: "",
};

async function getSettings() {
  const userSettings = (await chrome.storage.local.get("userSettings"))
    ?.userSettings;
  return userSettings;
}

async function autoPopulate() {
  const userSettings = await getSettings();
  const {
    model,
    tone,
    languageStyle,
    formatting,
    portfolioChecked,
    githubChecked,
    lastNameChecked,
    copyToClipboardChecked,
    serverUrl,
    firstName,
    lastName,
    portfolio,
    github,
  } = userSettings;

  if (model) modelSelect.value = model;

  if (firstName) firstNameInput.value = firstName;
  if (lastName) lastNameInput.value = lastName;
  if (portfolio) portfolioInput.value = portfolio;
  if (github) githubInput.value = github;
  if (tone) toneSelect.value = tone;

  if (languageStyle) languageStyleSelect.value = languageStyle;
  if (formatting) formattingSelect.value = formatting;
  if (portfolioChecked) portfolioCheck.checked = true;
  if (githubChecked) githubCheck.checked = true;
  if (lastNameChecked) lastNameCheck.checked = true;
  if (copyToClipboardChecked) copyToClipboardCheck.checked = true;

  if (serverUrl) serverUrlInput.value = serverUrl;
}

const savePromptSettings = () => {
  const model = modelSelect.value;
  const tone = toneSelect.value;
  const languageStyle = languageStyleSelect.value;
  const formatting = formattingSelect.value;
  const portfolioChecked = portfolioCheck.checked;
  const githubChecked = githubCheck.checked;
  const lastNameChecked = lastNameCheck.checked;
  const copyToClipboardChecked = copyToClipboardCheck.checked;
  const serverUrl = serverUrlInput.value;

  const userSettings = getSettings();

  saveUserSettings({
    ...userSettings,
    model,
    tone,
    languageStyle,
    formatting,
    portfolioChecked,
    githubChecked,
    lastNameChecked,
    copyToClipboardChecked,
    serverUrl,
  });
};

const saveDetails = async () => {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const portfolio = portfolioInput.value;
  const github = githubInput.value;
  const serverUrl = serverUrlInput.value;

  const userSettings = await getSettings();

  const {
    firstName: storedFirstName,
    lastName: storedLastName,
    portfolio: storedPortfolio,
    github: storedGithub,
    serverUrl: storedServerUrl,
  } = userSettings;

  if (
    firstName === storedFirstName &&
    lastName === storedLastName &&
    portfolio === storedPortfolio &&
    github === storedGithub &&
    serverUrl === storedServerUrl
  ) {
    alert("No changes made!");
    return;
  }

  saveUserSettings({
    ...userSettings,
    firstName,
    lastName,
    portfolio,
    github,
    serverUrl,
  });

  alert("Details saved successfully!");
};

function getGeneratePdf() {
  const content = document.getElementById("coverLetter").value;

  fetch(`${serverUrlInput.value}/gpt/download`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content,
    }),
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;

      a.download = "coverletter.pdf";

      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
}

function getPromptSettings() {
  const model = modelSelect.value;
  const tone = toneSelect.value;
  const languageStyle = languageStyleSelect.value;
  const formatting = formattingSelect.value;
  const portfolioChecked = portfolioCheck.checked;
  const githubChecked = githubCheck.checked;
  const lastNameChecked = lastNameCheck.checked;
  const copyToClipboardChecked = copyToClipboardCheck.checked;

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

modelSelect.addEventListener("change", savePromptSettings);
toneSelect.addEventListener("change", savePromptSettings);
languageStyleSelect.addEventListener("change", savePromptSettings);
formattingSelect.addEventListener("change", savePromptSettings);
portfolioCheck.addEventListener("change", savePromptSettings);
githubCheck.addEventListener("change", savePromptSettings);
lastNameCheck.addEventListener("change", savePromptSettings);
copyToClipboardCheck.addEventListener("change", savePromptSettings);

const prePrompt = `You're an experienced resume writer who has been writing cover letters for almost all job profiles for over 20 years now. However, your speciality is writing personalised cover letters where you portray the best of the candidate on how well they write, their experience, skills, etc. Your task is to write a cover letter for applying to software engineer jobs. Here are the details -`;
const afterPrompt = `Ensure the cover letter highlights the candidate's technical skills, experience in software development, ability to work in a team, problem-solving skills, and enthusiasm for the specific job and company they are applying to. Make the cover letter candidate-centered, showcasing their achievements and how they can bring value to the potential employer.
Remember to tailor the cover letter for each job application, highlighting the most relevant skills and experiences based on the job description provided by the company.
For example, when writing a cover letter for a software engineer position, you can start by addressing the hiring manager directly, mentioning your passion for coding and solving complex problems. Emphasize your experience with different programming languages, frameworks, and tools, and how you have successfully delivered projects in the past. Conclude by expressing your excitement to contribute to the company's growth and success with your technical expertise and teamwork skills.`;

const settingsText = `Please fill in the following details to generate a cover letter tailored to the job description you provide.`;
const promptSettingsText = `You can choose the model, tone, language style, and formatting of the cover letter. You can also include your first name, last name, portfolio, and GitHub profile in the cover letter.`;

generateButton.addEventListener("click", submitHandle);

function removeTagsAndScriptStyleContent(content) {
  const tagPattern = /<[^>]*>/g; // Regular expression pattern to match tags
  const scriptPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi; // Regular expression pattern to match <script></script> tags
  const stylePattern = /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi; // Regular expression pattern to match <style></style> tags
  const imgPattern = /<img\b[^<]*(?:(?!\/>)<[^<]*)*\/>/gi; // Regular expression pattern to match <img /> tags
  const svgPattern = /<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi; // Regular expression pattern to match <svg></svg> tags
  const coverLetterPattern =
    /<div class="cover-letter-container"[^>]*>.*?<\/div>/g; // Regular expression pattern to match cover letter container
  const whiteSpacePattern = /\s+/g; // Regular expression pattern to match white spaces

  // Remove script, style, img and svg tags
  let cleanedContent = content.replace(coverLetterPattern, "");
  cleanedContent = cleanedContent.replace(scriptPattern, "");
  cleanedContent = cleanedContent.replace(stylePattern, "");
  cleanedContent = cleanedContent.replace(imgPattern, "");
  cleanedContent = cleanedContent.replace(svgPattern, "");
  cleanedContent = cleanedContent.replace(whiteSpacePattern, " ");

  // Remove remaining tags
  cleanedContent = cleanedContent.replace(tagPattern, "");

  return cleanedContent;
}

async function submitHandle(e) {
  e.preventDefault();

  loadingSpan.style.display = "block";
  loadingLabel.textContent = "Generating cover letter...";
  generateButton.disabled = true;

  const domContent = document.body.outerHTML;
  const content = removeTagsAndScriptStyleContent(domContent);

  coverLetterArea.value = "";

  const urlStatic = urlSpan.textContent;

  // Get settings
  const { firstName, lastName, portfolio, github } = await getSettings();
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

  const prompt = `
    ${prePrompt}
    ${settingsText}
    ${promptSettingsText}
      Here's the dom content of the job description page. ${urlStatic}
      ${content}
      Please analyse the content of the job description and generate a professional coverletter from it.
      ${afterPrompt}
  `;

  fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer",
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content: prompt,
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      coverLetterArea.value = data.choices[0].message.content;
      loadingLabel.textContent = "";
      loadingSpan.style.display = "none";
      if (copyToClipboardChecked) {
        navigator.clipboard.writeText(data.choices[0].message.content);
      }
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      loadingLabel.textContent =
        "Error generating cover letter, contact support";
      loadingSpan.style.display = "none";
      generateButton.disabled = false;
    });
}

autoPopulate();

document.body.addEventListener("click", (e) => {
  let target = e.target;

  // This flag will determine if the click was inside a 'cover-letter-container'
  let isClickInsideCoverLetterContainer = false;

  // Traverse up the DOM until you find an element with the 'cover-letter-container' or 'toggle-button'  class or until you reach the body element
  while (target !== document.body) {
    if (
      target.classList.contains("cover-letter-container") ||
      target.classList.contains("toggle-button")
    ) {
      isClickInsideCoverLetterContainer = true;
      break; // If the class is found, set the flag to true and break the loop
    }
    target = target.parentElement; // Move up in the DOM tree
  }

  // If the click was not inside any 'cover-letter-container' or 'toggle-button', handle the outside click
  if (!isClickInsideCoverLetterContainer && html.style.display === "block") {
    html.style.display = "none"; // Hide the 'cover-letter-container'
  }
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.shiftKey && event.code === "KeyZ") {
    if (html.style.display === "block") {
      html.style.display = "none";
    } else {
      html.style.display = "block";
    }
  }
  if (event.code === "Escape") {
    html.style.display = "none";
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "toggle") {
    if (html.style.display === "block") {
      html.style.display = "none";
    } else {
      html.style.display = "block";
    }
  }
  return true;
});
