import battleship from "../../../images/project-images/battleship-game.png";
import chatty from "../../../images/project-images/chatty.png";
import mixin from "../../../images/project-images/mixin.png";
import tagMyTunes from "../../../images/project-images/tag-my-tunes.png";

const projectObjs = [
  {
    key: 1,
    title: "Mixin",
    technologies: ["HTML", "CSS/SCSS", "Javascript", "Node", "Express"],
    about:
      "Mixin is a cocktail recipe web app that utilises the cocktailDB REST API to offer the user a seamless experience searching for cocktails that they can make. For this project, I wanted to build a SPA with vanilla javascript to learn more about how React and React Router works under the hood.",
    website: "https://mixinapp.herokuapp.com/",
    github: "https://github.com/Andybrummitt/cocktailapp",
    mainImage: mixin,
  },
  {
    key: 2,
    title: "Chatty",
    technologies: ["HTML", "CSS/SCSS", "Javascript", "React", "Redux", "Firebase"],
    about:
      "This app is a serverless chat app similar to facebook messenger. The user can authenticate with google or sign up with their own email and password and can search for users by username to chat to. To test this application you can use any login details as long as the email format is accepted. I've created a couple of users that you can search for to use the application (the usernames are test1 and test2).",
    github: "https://github.com/Andybrummitt/chatApp",
    website: "https://chattyapplication.netlify.app/",
    mainImage: chatty,
  },
  {
    key: 3,
    title: "Battleship Game",
    technologies: ["HTML", "CSS/SCSS", "Javascript", "Webpack", "Node", "Express"],
    about:
      "This project is essentially a web based version of the popular board game, Battleship, with a graphical user interface. Users can battle against a bot that has been programmed to guess random tiles until it hits a ship tile, in which case it will guess tiles around the ship tile.",
    website: "https://battleshipjsgame.herokuapp.com/",
    github: "https://github.com/Andybrummitt/battleship",
    mainImage: battleship,
  },
  {
    key: 4,
    title: "Tag My Tunes",
    technologies: [
      "HTML",
      "CSS/SCSS",
      "Bootstrap",
      "Javascript",
      "React",
      "Node",
      "Express",
    ],
    about:
      "My most recent project is a file ID3 tagger for mp3 files. When converting music videos to mp3s the title and artist fields are often not populated correctly. Users can upload up to 100 mp3 files and the server will populate those fields to its best guess and remove unwanted strings in the file name. The user then receives a zip file to download with the altered files. I've decided to keep the source code in a private github repository as I want to deploy this application with proper hosting.",
    website: "https://tagmytunes.herokuapp.com/",
    github: null,
    mainImage: tagMyTunes,
  },
];

export default projectObjs;
