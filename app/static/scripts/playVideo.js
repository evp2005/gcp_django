const playButton = document.getElementById('play_button');
const spanVideo = document.getElementsByClassName('span_video')[0];
const main = document.querySelector('main');
const nav = document.querySelector('nav');

playButton.addEventListener('click',()=>{
    if (spanVideo.style.display=='none' || spanVideo.style.display=='') {
        spanVideo.style.display = 'block';
        main.style.opacity = '0.5';
        nav.style.opacity = '0.5';
    }else{
        spanVideo.style.display = 'none';
        main.style.opacity = '1';
        nav.style.opacity = '1';
    }
});