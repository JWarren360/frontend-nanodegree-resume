var bio = {
	"name" : "John Warren",
	"role" : "Front-End Web Developer",
	"contacts" : {
		"email" : "JWarren360@gmail.com",
		"mobile" : "512-739-3897",
		"github" : "JWarren360",
		"location" : "Austin , TX"
	},
	"welcomeMessage" : "Im still learning... And, hopefully, always will be.",
	"skills" : [
		"HTML",
		"Javascript",
		"JQuery",
		"Ruby"
	],
	"pictureURL" : "images/me2.jpg"
};
var education = {
	"school" : [
		{
			"name" : "Austin Comunity College",
			"degree": "",
			"year" : 2012,
			"major" : "Eletronics Repair",
			"location" : "Austin, TX"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Development",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "www.Udacity.com"
		}
	]
};
var work = {
	"jobs" : [
		{
			"employer" : "Four Hands Furniture",
			"position" : "Warehouse Manager",
			"dates" : "September 2013 - Present",
			"location" : "Austin, TX",
			"description" : [
				"Oversee each day to ensure business runs as smoothly as possible for both customers and employees",
				"Supervise an average of 4 full-time employees plus frequent temp workers",
				"Fill in as Manager on Duty when needed",
				"Assist in creating weekly schedules for warehouse employees",
				"Ensure temporary employees’ time clock punches are accurate and accounted for",
				"Create daily reports which analyze different aspects of the business such as how much revenue was earned; those reports are then sent to the Chiefs and Directors of the Company",
				"Solve any issues guests may have face to face or over the phone",
				"Coordinate multiple incoming shipments on a weekly basis",
				"Conduct interviews, one on ones (feedback, write ups, verbal warnings, etc.) hire and terminate employees",
				"Facilitate training on various topics such as warehouse organization, efficiency, customer service and new policies",
				"Create relationships and generate repeat business",
				"Continue with my Warehouse Associate responsibilities"
			]
		},
		{
			"employer" : "RoundUp Fabrications",
			"position" : "Metal Fabricator",
			"dates" : "April 2013 - September 2013",
			"location" : "Odessa, TX",
			"description" : [
				"Read and interpreted blue prints provided by customer to create their desired product",
				"Catered mostly to oil field & mechanical based industries",
				"Solved customers’ issues by designing and selling the appropriate solution/product ",
				"Gained product and technical knowledge",
				"Generated revenue and attained strategic goals each month"
			]
		},
		{
			"employer" : "Texas Legislative Services",
			"position" : "Legislative Correspondent ",
			"dates" : "December 2012 - April 2013",
			"location" : "Austin, TX",
			"description" : [
				"Summarized committees for the Texas Legislature, recording record votes and documenting hearings",
				"Recorded bill statuses (Passed, Vetoed, Denied, Signed, etc.)",
				"Maintained relationships with house representatives & their office personnel to obtain detailed contribution information and relevant local calendar events"
			]
		}
	]
};
var projects = {
	"projects" : [
		{
			"title" : "Sample Project 1",
			"dates" : "2015",
			"description" : "This is a sample of a project that I haven't built yet.",
			"images" : [
				"http://fillmurray.com/g/400/300",
				"http://fillmurray.com/g/400/300"
			]
		},
		{
			"title" : "Sample Project 2",
			"dates" : "2015",
			"description" : "This is a another sample of a project that I haven't built yet.",
			"images" : [
				"http://fillmurray.com/g/400/300",
				"http://fillmurray.com/g/400/300"
			]
		}
	]
};
//building the resume
//HEADER
bio.display = function(){
	'use strict';
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName, formattedRole);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedEmail,formattedMobile,formattedGithub, formattedLocation);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedBioPic, formattedWelcomeMessage);
	if(bio.skills.length){
		$("#header").append(HTMLskillsStart);
    for (var i in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
	}
};
bio.display();
//WORK EXPERIANCE
work.display = function(){
	'use strict';
	if(work.jobs.length){
		for(var job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
			var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedEmployerTitle, formattedDates);
			for(var descipt in work.jobs[job].description){
				var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[descipt]);
				$(".work-entry:last").append(formattedWorkDescription);
			}
		}
	}
};
work.display();
//PROJECTS
projects.display = function(){
	'use strict';
	if(projects.projects.length){
		for(var i = 0; i < projects.projects.length; i++){
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedProjectDates =HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription =HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);
			for(var j = 0; j < projects.projects[i].images.length; j++){
				var formattedProjectImage =HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
				$(".project-entry:last").append(formattedProjectImage);
			}

		}
	}
};
projects.display();
//EDUCATION
education.display = function(){
	'use strict';
	for (var i = 0; i < education.school.length; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.school[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.school[i].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.school[i].year);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.school[i].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.school[i].major);
		$(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
	}
	for (var i = 0; i < education.onlineCourses.length; i++) {
		$("#education2").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
	}
};
education.display();
//appending map
$("#mapDiv").append(googleMap);