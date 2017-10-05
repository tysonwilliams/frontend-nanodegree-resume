/*
This is empty on purpose! Your code to build the resume will go here.
 */

let bio = {
  name: "Tyson Williams",
  role: "Software Developer",
  contactInfo: {
    mobile: "801-745-7581",
    email: "tyson.j.williams@gmail.com",
    github: "tysonwilliams",
    twitter: "@TnaciousTyson",
    location: "Ogden, UT"
  },
  welcomeMessage: "Passionate about using software and technology to better us all.",
  skills: ["JavaScript", " HTML5", " CSS3", " React"],
  bioPic: "images/tyson.jpg"
}

let work = {
employer: "Tyson Software",
title: "Junior Software Developer",
dates: "March 2017 - Present",
location: "Ogden, UT"
};

let education = {
  name: "University of Utah",
  location: "SLC, UT",
  degree: "B.S.",
  major: "Entrepreneurship",
  minor: "Military Science",
  dates: [2014],
  url: "http://eccles.utah.edu/programs/undergraduate/academics/majors/entrepreneurship/"
};

let projects = {
  projects: [
    {
      title: "SmartGym",
      dates: "2017",
      description: "Creating Smart IoT for gym managers and end-users!",
      image: "iamges/smartgym.png"
    }
  ]
}

const formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");
const formattedName = HTMLheaderName.replace("%data%", "Tyson Williams");
const formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
const formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
const formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
const formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
const formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
const formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
const formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
const formattedWorkLocation = HTMLworkLocation.replace("%data%", work.location);
const formattedEducationName = HTMLschoolName.replace("%data%", education.name);

$("#header").prepend(formattedRole)
            .prepend(formattedName)
            .append(formattedBioPic)
            .append(formattedWelcomeMessage)
            .append(formattedMobile)
            .append(formattedEmail)
            .append(formattedGithub)
            .append(formattedTwitter)
            .append(formattedLocation);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  let formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills-h3").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills-h3").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills-h3").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills-h3").append(formattedSkill);
}
                 
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedWorkLocation);

$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedEducationName);
