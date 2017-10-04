/*
This is empty on purpose! Your code to build the resume will go here.
 */

const newEmail = "tyson.j.williams@gmail.com";
const awesomeThoughts = "I am Tyson Williams and I am AWESOME!";
let funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

let bio = {
  name: "Tyson Williams",
  role: "Software Developer",
  contactInfo: {
    mobile: "801-745-7581",
    email: "tyson.j.williams@gmail.com",
    github: "tysonwilliams",
    twitter: "@TnaciousTyson",
    location: "Ogden"
  },
  welcomeMessage: "Passionate about using software and technology to better us all.",
  skills: ["JavaScript", "HTML5", "CSS3", "React", "Node.js"],
  bioPic: "images/tyson.jpg"
}

const formattedName = HTMLheaderName.replace("%data%", "Tyson Williams");
const formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");
const formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
const formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
const formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
const formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
const formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
const formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
const formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
const formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedRole)
            .prepend(formattedName)
            .append(formattedBioPic)
            .append(formattedWelcomeMessage)
            .append(formattedMobile)
            .append(formattedEmail)
            .append(formattedGithub)
            .append(formattedTwitter)
            .append(formattedLocation)
            .append(formattedSkills);
