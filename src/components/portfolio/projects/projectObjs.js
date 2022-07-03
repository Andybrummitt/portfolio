import mixin from '../../../images/project-images/mixin.png';
import battleship from '../../../images/project-images/battleship-game.png';
import chatty from '../../../images/project-images/chatty.png';
import andysPizza from '../../../images/project-images/andys-pizza.png';
import tagMyTunes from '../../../images/project-images/tag-my-tunes.png';

const projectObjs = [
    {
        key: 1,
        title: 'Tag My Tunes',
        technologies: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'React', 'Node', 'Express'],
        about: 'My most recent project is a file ID3 tagger for mp3 files. When converting videos to mp3s the title and artist fields are not populated correctly. Users can upload up to 100 mp3 files and the server will populate those fields to its best guess and remove unwanted strings in the file name. The user then receives a zip file to download with the altered files. I\'ve decided to keep the source code in a private github repository as I want to deploy this application with proper hosting.',
        website: 'https://tagmytunes.herokuapp.com/',
        github: null,
        image: tagMyTunes

    },
    {
        key: 2,
        title: 'Mixin',
        technologies: ['HTML', 'CSS', 'Javascript', 'Node', 'Express'],
        about: 'This app is a single page application that gives users information about cocktail ingredients and recipes. The user can input ingredients and see cocktails that they can make or ingredients that they need. They can search specific cocktails by ingredient or name and more. The app uses the cocktailDB api where the client makes calls to the express server which calls the cocktailDB REST api which in turn returns the data to the client through the server. I wanted to build a SPA with vanilla javascript to learn more about how React works under the hood.',
        website: 'http://mixinapp.herokuapp.com/',
        github: 'https://github.com/Andybrummitt/cocktailapp',
        image: mixin
    },
    {
        key: 3,
        title: 'Battleship Game',
        technologies: ['HTML', 'CSS', 'Javascript', 'Webpack', 'Node', 'Express'],
        about: 'This project is a single player battleship game where the user can play against a bot. The user places their ships on selected tiles (made with an html table element) and can guess which tiles the bot has chosen. The bot then has their turn and so on.',
        website: 'https://battleshipjsgame.herokuapp.com/',
        github: 'https://github.com/Andybrummitt/battleship',
        image: battleship
    },
    {
        key: 4,
        title: 'Chatty',
        technologies: ['HTML', 'CSS', 'Javascript', 'React', 'Firebase'],
        about: 'This app is a serverless chat app similar to facebook messenger. The user can authenticate with google or sign in with their own email and password and can search for users by username to chat to.',
        github: 'https://github.com/Andybrummitt/chatApp',
        website: null,
        image: chatty
    },
    {
        key: 5,
        title: 'Andy\'s Pizza',
        technologies: ['HTML', 'CSS', 'Javascript', 'Node', 'Express', 'EJS', 'Webpack'],
        about: 'This project is a mock restaurant website. Users can "book a table" and will recieve a booking confirmation email. This was built with EJS templating on the back end.',
        github: 'https://github.com/Andybrummitt/andyspizza',
        website: 'http://andyspizza.herokuapp.com/',
        image: andysPizza
    }
]

export default projectObjs;