import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';
const player = new Player('vimeo-player');

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem(CURRENT_TIME, data.seconds);
}, 1000)
);

player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0);

//import Player from '@vimeo/player';

//const iframe = document.querySelector('iframe');
//const player = new Player(iframe);

//player.on('timeupdate', function (time) {
//  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
//});

//const saveTime = localStorage.getItem('videoplayer-current-time');
// console.log(saveTime);
//const timeStop = JSON.parse(saveTime);
// console.log(timeStop.seconds);

//player.setCurrentTime(timeStop.seconds||0)