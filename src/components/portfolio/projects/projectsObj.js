import mixin from '../../../images/project-images/mixin.png';
import battleship from '../../../images/project-images/battleship-game.png';
import chatty from '../../../images/project-images/chatty.png';
import andysPizza from '../../../images/project-images/andys-pizza.png';
import movieapp from '../../../images/project-images/movieapp.png';
import drumMachine from '../../../images/project-images/drum-machine.png';

const projectsObj = [
    {
        key: 1,
        title: 'Mixin',
        about: 'A cocktail information app utilising the cocktailDB API. A SPA built with HTML, CSS and vanilla JS on the front end and Node Express on the backend. Bundled with Webpack and hosted on Heroku.',
        website: 'http://mixinapp.herokuapp.com/',
        github: 'https://github.com/Andybrummitt/cocktailapp',
        image: mixin
    },
    {
        key: 2,
        title: 'Battleship Game',
        about: 'A single player battleship Game where the user can play against a bot. Built with HTML, CSS and JS on the front end and Node Express on the backend. Bundled with Webpack and hosted on Heroku.',
        website: 'https://battleshipjsgame.herokuapp.com/',
        github: 'https://github.com/Andybrummitt/battleship',
        image: battleship
    },
    {
        key: 3,
        title: 'Chatty',
        about: 'A serverless chat app similar to facebook messenger. Built with HTML, CSS, JS, React and Redux on the front end and using google firebase on the backend.',
        github: 'https://github.com/Andybrummitt/chatApp',
        website: null,
        image: chatty
    },
    {
        key: 4,
        title: 'Andy\'s Pizza',
        about: 'A mock restaurant website. Built with HTML, CSS and JS on the front end and Node Express on the backend with EJS templating. Bundled with Webpack and hosted on Heroku.',
        github: 'https://github.com/Andybrummitt/andyspizza',
        website: 'http://andyspizza.herokuapp.com/',
        image: andysPizza
    },
    {
        key: 5,
        title: 'Movie API App',
        about: 'This was my first time working with react and APIs. The front end is built with HTML, CSS, JS and react as well as utilising the movieDB api.',
        github: 'https://github.com/Andybrummitt/movieapiapp',
        website: null,
        image: movieapp
    },
    {
        key: 6,
        title: 'Freecodecamp Drum Machine App',
        about: 'When working through the freecodecamp course I built a drum machine application with HTML, CSS and JS as part of the course requirements.',
        github: 'https://github.com/Andybrummitt/react-app-drum-machine',
        website: null,
        image: drumMachine
    }
]

export default projectsObj;