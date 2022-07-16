import battleship from "../../../images/project-images/battleship-game.png";
import chatty from "../../../images/project-images/chatty.png";
import mixin from "../../../images/project-images/mixin.png";
import tagMyTunes from "../../../images/project-images/tag-my-tunes.png";

const projectObjs = [
  {
    key: 1,
    title: "Mixin",
    technologies: ["HTML", "CSS", "Javascript", "Node", "Express"],
    about:
      "This app is a single page application that gives users information about cocktail ingredients and recipes. The user can input ingredients and see cocktails that they can make or ingredients that they need. They can search specific cocktails by ingredient or name and more. The app uses the cocktailDB API where the client makes calls to the express server which calls the cocktailDB REST API which in turn returns the data to the client through the server. I wanted to build a SPA with vanilla javascript to learn more about how React and React Router works under the hood.",
    website: "https://mixinapp.herokuapp.com/",
    github: "https://github.com/Andybrummitt/cocktailapp",
    mainImage: mixin,
  },
  {
    key: 2,
    title: "Tag My Tunes",
    technologies: [
      "HTML",
      "CSS",
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
  {
    key: 3,
    title: "Battleship Game",
    technologies: ["HTML", "CSS", "Javascript", "Webpack", "Node", "Express"],
    about:
      "This project is a single player battleship game where the user can play against a bot. The user places their ships on selected tiles (made with an html table element) and can guess which tiles the bot has chosen. The bot then has their turn and so on.",
    website: "https://battleshipjsgame.herokuapp.com/",
    github: "https://github.com/Andybrummitt/battleship",
    mainImage: battleship,
  },
  {
    key: 4,
    title: "Chatty",
    technologies: ["HTML", "CSS", "Javascript", "React", "Firebase"],
    about:
      "This app is a serverless chat app similar to facebook messenger. The user can authenticate with google or sign in with their own email and password and can search for users by username to chat to.",
    github: "https://github.com/Andybrummitt/chatApp",
    website: null,
    mainImage: chatty,
  },
];

export default projectObjs;
