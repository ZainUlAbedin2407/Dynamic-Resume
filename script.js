// // Display Resume
// // get references of form and generatedresume
// const form = document.getElementById("resume-form") as HTMLFormElement;
// const resumeDisplayElement = document.getElementById(
//   "resumeDisplay"
// ) as HTMLDivElement;
// // handle form submission
// form.addEventListener("submit", (event: Event) => {
//   event.preventDefault(); // prevent page reload
//   // Collect data
//   const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
//   const profession = (document.getElementById("profession") as HTMLInputElement).value;
//   const phone = (document.getElementById("phone") as HTMLInputElement).value;
//   const email = (document.getElementById("email") as HTMLInputElement).value;
//   const linkedIn = (document.getElementById("linkedin") as HTMLInputElement).value;
//   const institution = (document.querySelector('input[placeholder="Institution"]') as HTMLInputElement).value;
//   const course = (document.querySelector('input[placeholder="Course/Degree"]') as HTMLInputElement).value;
//   const projectName = (document.querySelector('input[placeholder="Project Name"]') as HTMLInputElement).value;
//   const projectURL = (document.querySelector('input[placeholder="Project URL"]') as HTMLInputElement).value;
//   const skill = (document.querySelector('input[placeholder="Skill"]') as HTMLInputElement).value;
//   const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
//   // Generate the resume and content dynamically
//   const resume = `
//         <h2>Resume</h2>
//         <div class="formsection">
//             <h3>Personal Information</h3>
//             <div class="input-group">
//                 <p><b>Name:</b>${fullName}<p>
//                 <p><b>Profession:</b>${profession}<p>
//                 <p><b>Phone Number:</b>${phone}<p>
//                 <p><b>Email Address:</b>${email}<p>
//                 <p><b>LinkedIn:</b>:${linkedIn}<p>
//             </div>
//         </div>
//          <div class="formsection">
//               <h3>Education</h3>
//               <div class="input-rows">
//               </div>
//         </div>
//         <div class="formsection">
//             <h3>Professional Summary</h3>
//             <div class="input-group">
//               <p>${summary}</p>
//             </div>
//         </div>
//         <div class="formsection">
//             <h3>Projects</h3>
//             <div class="input-rows">
//             </div>
//         </div>
//         <div class="formsection">
//             <h3>Skills</h3>
//             <div class="input-rows">
//             </div>
//         </div>
//     `;
//   // Display the generated resume
//   if (resumeDisplayElement) {
//     resumeDisplayElement.innerHTML = resume;
//   }
// });
// Display Resume
// get references of form and generatedresume
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resumeDisplay");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // Collect data
    // Personal Information`
    var fullName = document.getElementById("fullName").value;
    var profession = document.getElementById("profession").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var linkedIn = document.getElementById("linkedin").value;
    // Education
    var educationInputs = document.querySelectorAll('#educationInputs .input-rows');
    var education = [];
    educationInputs.forEach(function (row) {
        var institution = row.querySelector('input[placeholder="Institution"]').value;
        var course = row.querySelector('input[placeholder="Course/Degree"]').value;
        if (institution && course) {
            education.push({ institution: institution, course: course });
        }
    });
    // Projects
    var projectInputs = document.querySelectorAll('#projectInputs .input-rows');
    var projects = [];
    projectInputs.forEach(function (row) {
        var name = row.querySelector('input[placeholder="Project Name"]').value;
        var url = row.querySelector('input[placeholder="Project URL"]').value;
        if (name && url) {
            projects.push({ name: name, url: url });
        }
    });
    // Skills
    var skillInputs = document.querySelectorAll('#skillInputs input');
    var skills = [];
    skillInputs.forEach(function (input) {
        var skill = input.value;
        if (skill) {
            skills.push(skill);
        }
    });
    var summary = document.getElementById("summary").value;
    // Generate the resume and content dynamically
    var resume = "\n    <h2>Resume</h2>\n    <div class=\"formsection\">\n      <h3>Personal Information</h3>\n      <div class=\"input-group\">\n        <p><b>Name:</b>".concat(fullName, "</p>\n        <p><b>Profession:</b>").concat(profession, "</p>\n        <p><b>Phone Number:</b>").concat(phone, "</p>\n        <p><b>Email Address:</b>").concat(email, "</p>\n        <p><b>LinkedIn:</b>").concat(linkedIn, "</p>\n      </div>\n    </div>\n\n    <div class=\"formsection\">\n      <h3>Education</h3>\n      ").concat(education.map(function (_a) {
        var institution = _a.institution, course = _a.course;
        return "\n        <div class=\"input-rows\">\n          <p><b>Institution:</b> ".concat(institution, "</p>\n          <p><b>Course/Degree:</b> ").concat(course, "</p>\n        </div>\n      ");
    }).join(''), "\n    </div>\n\n    <div class=\"formsection\">\n      <h3>Professional Summary</h3>\n      <div class=\"input-group\">\n        <p>").concat(summary, "</p>\n      </div>\n    </div>\n\n    <div class=\"formsection\">\n      <h3>Projects</h3>\n      ").concat(projects.map(function (_a) {
        var name = _a.name, url = _a.url;
        return "\n        <div class=\"input-rows\">\n          <p><b>Project Name:</b> ".concat(name, "</p>\n          <p><b>Project URL:</b> ").concat(url, "</p>\n        </div>\n      ");
    }).join(''), "\n    </div>\n\n    <div class=\"formsection\">\n      <h3>Skills</h3>\n      <div class=\"input-rows\">\n        ").concat(skills.map(function (skill) { return "<p>".concat(skill, "</p>"); }).join(''), "\n      </div>\n    </div>\n  ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resume;
    }
});
