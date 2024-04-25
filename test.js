// Create the necessary elements and set their attributes
const html = document.createElement("div");

const body = document.createElement("div");
const h3 = document.createElement("h3");
h3.textContent = "Cover Letter";
body.appendChild(h3);

const br1 = document.createElement("br");
body.appendChild(br1);

const br2 = document.createElement("br");
body.appendChild(br2);

const label1 = document.createElement("label");
label1.textContent = "Short Info:";
const textarea1 = document.createElement("textarea");
textarea1.id = "prompt";
textarea1.rows = "4";
textarea1.cols = "50";
textarea1.textContent =
  "I'm a senior software engineer with 9 years of experience. I specialize in full stack development (Frontend: React, Vue, Typescript, Backend: Node, FastAPI, Django)";
label1.appendChild(textarea1);
body.appendChild(label1);

const br3 = document.createElement("br");
body.appendChild(br3);

const br4 = document.createElement("br");
body.appendChild(br4);

const div1 = document.createElement("div");
div1.className = "prompt-setting-wrapper";

const div2 = document.createElement("div");
div2.className = "select-container";
const label2 = document.createElement("label");
label2.textContent = "Model";
const select1 = document.createElement("select");
select1.id = "model-select";
const option1 = document.createElement("option");
option1.value = "gpt-3.5-turbo";
option1.textContent = "GPT 3.5 Turbo";
const option2 = document.createElement("option");
option2.value = "gpt-3.5-0613";
option2.textContent = "GPT 3.5 Turbo - New!";
const option3 = document.createElement("option");
option3.value = "gpt-3.5-turbo-16k";
option3.textContent = "GPT 3.5 Turbo 16K";
const option4 = document.createElement("option");
option4.value = "gpt-4";
option4.textContent = "GPT 4 8k";
const option5 = document.createElement("option");
option5.value = "gpt-4-32k";
option5.textContent = "GPT 4 32k";
const option6 = document.createElement("option");
option6.value = "gpt-4-turbo";
option6.textContent = "GPT 4 Turbo";
select1.appendChild(option1);
select1.appendChild(option2);
select1.appendChild(option3);
select1.appendChild(option4);
select1.appendChild(option5);
select1.appendChild(option6);
label2.appendChild(select1);
div2.appendChild(label2);
div1.appendChild(div2);

const div3 = document.createElement("div");
div3.className = "select-container";
const label3 = document.createElement("label");
label3.textContent = "Tone";
const select2 = document.createElement("select");
select2.id = "tone-select";
const option7 = document.createElement("option");
option7.value = "professional";
option7.textContent = "Professional";
const option8 = document.createElement("option");
option8.value = "casual";
option8.textContent = "Casual";
const option9 = document.createElement("option");
option9.value = "formal";
option9.textContent = "Formal";
const option10 = document.createElement("option");
option10.value = "friendly";
option10.textContent = "Friendly";
select2.appendChild(option7);
select2.appendChild(option8);
select2.appendChild(option9);
select2.appendChild(option10);
label3.appendChild(select2);
div3.appendChild(label3);
div1.appendChild(div3);

const div4 = document.createElement("div");
div4.className = "select-container";
const label4 = document.createElement("label");
label4.textContent = "Language Style";
const select3 = document.createElement("select");
select3.id = "language-style-select";
const option11 = document.createElement("option");
option11.value = "formal";
option11.textContent = "Formal";
const option12 = document.createElement("option");
option12.value = "informal";
option12.textContent = "Informal";
select3.appendChild(option11);
select3.appendChild(option12);
label4.appendChild(select3);
div4.appendChild(label4);
div1.appendChild(div4);

const div5 = document.createElement("div");
div5.className = "select-container";
const label5 = document.createElement("label");
label5.textContent = "Formatting";
const select4 = document.createElement("select");
select4.id = "formatting-select";
const option13 = document.createElement("option");
option13.value = "standard";
option13.textContent = "Standard";
const option14 = document.createElement("option");
option14.value = "creative";
option14.textContent = "Creative";
select4.appendChild(option13);
select4.appendChild(option14);
label5.appendChild(select4);
div5.appendChild(label5);
div1.appendChild(div5);

const div6 = document.createElement("div");
div6.className = "checkbox-group";

const div7 = document.createElement("div");
div7.className = "checkbox-container";
const input1 = document.createElement("input");
input1.id = "lastname-check";
input1.type = "checkbox";
const label6 = document.createElement("label");
label6.textContent = "Last Name";
div7.appendChild(input1);
div7.appendChild(label6);
div6.appendChild(div7);

const div8 = document.createElement("div");
div8.className = "checkbox-container";
const input2 = document.createElement("input");
input2.id = "portfolio-check";
input2.type = "checkbox";
const label7 = document.createElement("label");
label7.textContent = "Portfolio";
div8.appendChild(input2);
div8.appendChild(label7);
div6.appendChild(div8);

const div9 = document.createElement("div");
div9.className = "checkbox-container";
const input3 = document.createElement("input");
input3.id = "github-check";
input3.type = "checkbox";
const label8 = document.createElement("label");
label8.textContent = "Github";
div9.appendChild(input3);
div9.appendChild(label8);
div6.appendChild(div9);

const div10 = document.createElement("div");
div10.className = "checkbox-container";
const input4 = document.createElement("input");
input4.id = "copy-to-clipboard-check";
input4.type = "checkbox";
const label9 = document.createElement("label");
label9.textContent = "Copy to clipboard";
div10.appendChild(input4);
div10.appendChild(label9);
div6.appendChild(div10);

div1.appendChild(div6);
body.appendChild(div1);

const label2CoverLetter = document.createElement("label");
label2CoverLetter.className = "coverletter";
label2CoverLetter.textContent = "Cover Letter:";
const generatedCoverLetter = document.createElement("textarea");
generatedCoverLetter.id = "coverLetter";
generatedCoverLetter.rows = "10";
generatedCoverLetter.cols = "50";
label2CoverLetter.appendChild(generatedCoverLetter);
body.appendChild(label2CoverLetter);

const br5 = document.createElement("br");
body.appendChild(br5);

const br6 = document.createElement("br");
body.appendChild(br6);

const div11 = document.createElement("div");
div11.className = "loader-container";
const div12 = document.createElement("div");
div12.id = "status";
div11.appendChild(div12);
const span = document.createElement("span");
span.className = "loader";
div11.appendChild(span);
body.appendChild(div11);

const p1 = document.createElement("p");
p1.textContent = "URL: ";
const span2 = document.createElement("span");
span2.id = "url";
p1.appendChild(span2);
body.appendChild(p1);

const p2 = document.createElement("p");
p2.style.display = "none";
p2.textContent = "DOM: ";
const span3 = document.createElement("span");
span3.id = "DOM";
p2.appendChild(span3);
body.appendChild(p2);

const div13 = document.createElement("div");
div13.className = "button-wrapper";
const generateButton = document.createElement("button");
generateButton.id = "submit";
generateButton.textContent = "Generate";
const settingsButton = document.createElement("button");
settingsButton.id = "setting";
settingsButton.textContent = "Settings";
div13.appendChild(generateButton);
div13.appendChild(settingsButton);
body.appendChild(div13);

const div14 = document.createElement("div");
div14.id = "settings";
const div15 = document.createElement("div");
div15.className = "item";
const label10 = document.createElement("label");
label10.className = "item-label";
label10.textContent = "First Name:";
const input5 = document.createElement("input");
input5.type = "text";
input5.id = "firstName";
div15.appendChild(label10);
div15.appendChild(input5);
div14.appendChild(div15);

const div16 = document.createElement("div");
div16.className = "item";
const label11 = document.createElement("label");
label11.className = "item-label";
label11.textContent = "Last Name:";
const input6 = document.createElement("input");
input6.type = "text";
input6.id = "lastName";
div16.appendChild(label11);
div16.appendChild(input6);
div14.appendChild(div16);

const div17 = document.createElement("div");
div17.className = "item";
const label12 = document.createElement("label");
label12.className = "item-label";
label12.textContent = "Portfolio:";
const input7 = document.createElement("input");
input7.type = "text";
input7.id = "portfolio";
div17.appendChild(label12);
div17.appendChild(input7);
div14.appendChild(div17);

const div18 = document.createElement("div");
div18.className = "item";
const label13 = document.createElement("label");
label13.className = "item-label";
label13.textContent = "GitHub:";
const input8 = document.createElement("input");
input8.type = "text";

html.appendChild(body);
html.className = "cover-letter-container";

const toggleButton = document.createElement("button");
const icon = document.createElement("img");
icon.src = "chrome-extension://cgneenbonfipejfincfoeljokamigfae/images/tou.svg";
toggleButton.className = "toggle-button";
toggleButton.appendChild(icon);

html.style.display = "none";

document.body.appendChild(toggleButton);
document.body.appendChild(html);

toggleButton.addEventListener("click", () => {
  if (html.style.display === "none") {
    html.style.display = "block";
  } else {
    html.style.display = "none";
  }
});

const prePrompt = `You're an experienced resume writer who has been writing cover letters for almost all job profiles for over 20 years now. However, your speciality is writing personalised cover letters where you portray the best of the candidate on how well they write, their experience, skills, etc. Your task is to write a cover letter for applying to software engineer jobs. Here are the details -`;
const afterPrompt = `Ensure the cover letter highlights the candidate's technical skills, experience in software development, ability to work in a team, problem-solving skills, and enthusiasm for the specific job and company they are applying to. Make the cover letter candidate-centered, showcasing their achievements and how they can bring value to the potential employer.
Remember to tailor the cover letter for each job application, highlighting the most relevant skills and experiences based on the job description provided by the company.
For example, when writing a cover letter for a software engineer position, you can start by addressing the hiring manager directly, mentioning your passion for coding and solving complex problems. Emphasize your experience with different programming languages, frameworks, and tools, and how you have successfully delivered projects in the past. Conclude by expressing your excitement to contribute to the company's growth and success with your technical expertise and teamwork skills.`;

const settingsText = `Please fill in the following details to generate a cover letter tailored to the job description you provide.`;
const promptSettingsText = `You can choose the model, tone, language style, and formatting of the cover letter. You can also include your first name, last name, portfolio, and GitHub profile in the cover letter.`;

settingsButton.addEventListener("click", () => {
  alert(document.body.outerHTML);
});

generateButton.addEventListener("click", submitHandle);

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

function submitHandle(e) {
  e.preventDefault();

  const domContent = document.body.outerHTML;
  const content = removeTagsAndScriptStyleContent(domContent);

  alert(content);

  fetch("http://localhost:5000/gpt/coverletter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: `
        ${prePrompt}
        ${settingsText}
        ${promptSettingsText}
        ${content}
        Please analyse the content of the job description and generate a professional coverletter from it.
        ${afterPrompt}
      `,
      model: "gpt-3.5-turbo",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      generatedCoverLetter.textContent = data.coverletter;
      alert("success");
    })
    .catch((error) => {
      alert(error.message);
    });
}
