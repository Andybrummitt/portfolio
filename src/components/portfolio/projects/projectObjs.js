import battleship from "../../../images/project-images/battleship-game.png";
import bugTracker from "../../../images/project-images/bug-tracker.png";
import cryptoCompare from "../../../images/project-images/crypto-compare.png";
import designMania from "../../../images/project-images/designmania.png";
import mixin from "../../../images/project-images/mixin.png";
import tagMyTunes from "../../../images/project-images/tagmytunes.png";

const projectObjs = [
  {
    key: 1,
    title: "Crypto Compare",
    technologies: [
      "HTML",
      "Styled Components",
      "Typescript",
      "React",
      "NextJS",
      "Supabase",
    ],
    about:
      "This is a cryptocurrency application built in Typescript, NextJS and styled with the styled components library. The application accesses Crypto market and token data with the free coingecko API and utilises Supabase for authentication and database queries.",
    github: "https://github.com/Andybrummitt/crypto-compare",
    website: "https://crypto-compare-one.vercel.app/",
    mainImage: cryptoCompare,
  },
  {
    key: 2,
    title: "Tag My Tunes",
    technologies: [
      "HTML",
      "Bootstrap",
      "Javascript",
      "React",
      "Node",
      "Express",
    ],
    about:
      'This application is a file ID3 tag tagger. When converting videos to mp3s from popular mp3 conversion websites the files\' ID3 tags i.e "title" and "artist" are usually not populated correctly, this application solves this issue. Users can upload up to 100 mp3 files and the algorithm will populate these tags to the best of its ability and remove any unwanted strings from the file that the user can choose. This application is built with NodeJS and Express on the backend and React and bootstrap on the frontend.',
    website: "https://tagmytunes.herokuapp.com/",
    github: "https://github.com/Andybrummitt/tagmytunes2.0",
    mainImage: tagMyTunes,
  },
  {
    key: 3,
    title: "Bug Tracker",
    technologies: [
      "HTML",
      "CSS/SCSS",
      "Javascript",
      "React",
      "Bootstrap",
      "Node",
      "Express",
      "MongoDB",
    ],
    about:
      "This application is built with the MERN stack and aids development teams in organising bug and feature tickets within their projects. It utilises JWT authentication with access and refresh tokens with seperate team and user login portals and a MongoDB database on the backend to handle CRUD operations. Authenticated users can then create and monitor tickets which allows teams to track and organise project development.",
    website: "https://andys-bug-tracker.herokuapp.com/",
    github: "https://github.com/Andybrummitt/bug-tracker",
    mainImage: bugTracker,
  },
  {
    key: 4,
    title: "Battleship Game",
    technologies: [
      "HTML",
      "CSS/SCSS",
      "Javascript",
      "Webpack",
      "Node",
      "Express",
    ],
    about:
      "This project is essentially a web based version of the popular board game, Battleship, with a graphical user interface. Users can battle against a bot that has been programmed to guess random tiles until it hits a ship tile, in which case it will guess tiles around the ship tile.",
    website: "https://battleshipjsgame.herokuapp.com/",
    github: "https://github.com/Andybrummitt/battleship",
    mainImage: battleship,
  },
  {
    key: 5,
    title: "Mixin",
    technologies: ["HTML", "CSS/SCSS", "Javascript", "Node", "Express"],
    about:
      "Mixin is a cocktail recipe web app that utilises the cocktailDB REST API to offer the user a seamless experience searching for cocktails that they can make. For this project, I wanted to build a SPA with vanilla javascript to learn more about how React and React Router works under the hood.",
    website: "https://mixinapp.herokuapp.com/",
    github: "https://github.com/Andybrummitt/cocktailapp",
    mainImage: mixin,
  },
];

export default projectObjs;
