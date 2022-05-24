import mixin from '../../../images/project-images/mixin.png';
import battleship from '../../../images/project-images/battleship-game.png'

const projectsObj = [
    {
        key: 1,
        title: 'Mixin',
        about: 'A cocktail information app utilising cocktailDB API. Built with HTML, CSS, JS and React on the front end and Node Express on the backend. Bundled with Webpack and hosted on Heroku.',
        website: 'http://mixinapp.herokuapp.com/',
        github: 'https://github.com/Andybrummitt/cocktailapp',
        image: mixin
    },
    {
        key: 2,
        title: 'Battleship Game',
        about: 'A single player battleship Game where the user can play against a bot. Built with HTML, CSS and JS on the front end and Node Express on the backend. Bundled with Webpack and hosted on Heroku',
        website: 'https://battleshipjsgame.herokuapp.com/',
        github: 'https://github.com/Andybrummitt/battleship',
        image: battleship
    }
]

export default projectsObj;