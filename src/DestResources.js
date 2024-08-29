import MoonImg from './assets/destination/image-moon.webp'
import MarsImg from './assets/destination/image-mars.webp'
import EuropaImg from './assets/destination/image-europa.webp'
import TitanImg from './assets/destination/image-titan.webp'




const destResources = {
     'Moon': {
    img: MoonImg,
    no: '01',
    title: 'MOON',
    content: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avgDistance: '384, 400 KM',
    travelTime: '3 DAYS'

},
    'Mars': {
    img: MarsImg,
     no: '02',
    title: 'MARS',
    content: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    avgDistance: '225 MIL. KM',
    travelTime: '9 MONTHS'
},
    'Europa':{
    img: EuropaImg,
     no: '03',
    title: 'EUROPA',
    content: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avgDistance: '628 MIL. KM',
    travelTime: '3 YEARS'
},
    'Titan': {
    img: TitanImg,
     no: '04',
    title: 'TITAN',
    content: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avgDistance: '1.6 BIL. KM',
    travelTime: '7 YEARS'
} 

}

export default destResources;

