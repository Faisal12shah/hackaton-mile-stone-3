//Get refreces to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phonenumber').value;
    var education = document.getElementById('education').value;
    var experince = document.getElementById('experince').value;
    var skills = document.getElementById('skills').value;
    //Generate the resume content dynamically
    var resumeHTML = "\n   <h2><b>Resume</b></h2>\n   <h3>Personal Information</h3>\n   <p><b>Name:</b>".concat(name, "</p>\n   <p><b>email:<b/>").concat(email, "</p>\n   <p><b>phone:</b>").concat(phone, "</p>\n\n   <h3>Education</h3>\n   <p>").concat(education, "</p>\n\n   <h3>Experince</h3>\n   <p>").concat(experince, "</p>\n\n   <h3>skills</h3>\n   <p>").concat(skills, "</p>\n\n   ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing');
    }
});
