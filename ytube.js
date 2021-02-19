 var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
  	height: '390',
  	width: '58%',
  	videoId: 'VMRsEg9FZYs',
  	playerVars: {
  		'controls': 1,
  	},

    events: {
    	'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
});
}



var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED && !done){
  	window.open("https://www.bmw.es/es/home.html");
  	done = true;
  }
}

function onPlayerReady(event) {
event.target.playVideo();
}

function stopVideo() {
player.stopVideo();
}