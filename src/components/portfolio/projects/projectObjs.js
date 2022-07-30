import battleship from "../../../images/project-images/battleship-game.png";
import chatty from "../../../images/project-images/chatty.png";
import mixin from "../../../images/project-images/mixin.png";
import designMania from "../../../images/project-images/designmania.png";
import tagMyTunes from "../../../images/project-images/tag-my-tunes.png"

const projectObjs = [
  {
    key: 1,
    title: "Designmania",
    technologies: ["HTML", "CSS Modules", "Javascript", "React", "NextJS"],
    about:
      "I created this website for a client for their business. I was learning NextJS at the time and the site is a static site so I used NextJS static site generation for more performant rendering and SEO purposes .",
    website: "https://www.designmania.co.uk/",
    github: "https://github.com/Andybrummitt/designmania",
    mainImage: designMania,
  },
  {
    key: 2,
    title: "Tag My Tunes",
    technologies: ["HTML", "CSS/SCSS", "Javascript", "React", "Bootstrap", "Node", "Express"],
    about: "This application is a file ID3 tag tagger. When converting videos to mp3s from popular mp3 conversion websites the files' ID3 tags i.e 'title' and 'artist' are usually not populated correctly, this application solves this issue. Users can upload up to 100 mp3 files and the algorithm will populate these tags to the best of its ability and remove any unwanted strings from the file that the user can choose.",
    website: "https://tagmytunes.herokuapp.com/",
    github: "https://github.com/Andybrummitt/tagmytunes2.0",
    mainImage: tagMyTunes
  },
  {
    key: 3,
    title: "Mixin",
    technologies: ["HTML", "CSS/SCSS", "Javascript", "Node", "Express"],
    about:
      "Mixin is a cocktail recipe web app that utilises the cocktailDB REST API to offer the user a seamless experience searching for cocktails that they can make. For this project, I wanted to build a SPA with vanilla javascript to learn more about how React and React Router works under the hood.",
    website: "https://mixinapp.herokuapp.com/",
    github: "https://github.com/Andybrummitt/cocktailapp",
    mainImage: mixin,
  },
  {
    key: 4,
    title: "Chatty",
    technologies: ["HTML", "CSS/SCSS", "Javascript", "React", "Redux", "Firebase"],
    about:
      "This app is a serverless chat app similar to facebook messenger. The user can authenticate with google or sign up with their own email and password and can search for users by username to chat to. To test this application you can use any login details as long as the email format is accepted. I've created a couple of users that you can search for to use the application (the usernames are test1 and test2).",
    github: "https://github.com/Andybrummitt/chatApp",
    website: "https://chattyapplication.netlify.app/",
    mainImage: chatty,
  },
  {
    key: 5,
    title: "Battleship Game",
    technologies: ["HTML", "CSS/SCSS", "Javascript", "Webpack", "Node", "Express"],
    about:
      "This project is essentially a web based version of the popular board game, Battleship, with a graphical user interface. Users can battle against a bot that has been programmed to guess random tiles until it hits a ship tile, in which case it will guess tiles around the ship tile.",
    website: "https://battleshipjsgame.herokuapp.com/",
    github: "https://github.com/Andybrummitt/battleship",
    mainImage: battleship,
  },
];

export default projectObjs;
