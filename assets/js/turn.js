let audio;

function spinRecord(e)
{
    if(e.code !== 'KeyP') return;
    const active = document.querySelector('.active');
    console.log(active);
    var attr  = active.attributes;
    console.log(attr);
    const audioTag = document.querySelector(`audio[data-key="${attr[2].nodeValue}"]`);
    console.log(audioTag);
    audio = new Audio(audioTag.getAttribute("src"));
    if(!audio)return;
    audio.currentTime = 0;
    audio.play();
    active.classList.add('playing');
    audioTag.classList.add('audioRunning');
    //console.log(audioTag);
    return audio;
}
function stopRecord(e)
{
    if(e.code !== 'KeyS' && e.code !== 'Space') return;
    const active = document.querySelector('.active');
    var attr  = active.attributes;
    console.log(attr);
    const audioTag = document.querySelector('.audioRunning');
    audioTag.classList.remove('audioRunning');
    audio.currentTime = 0;
    audio.pause();
    active.classList.remove('playing');
}

window.addEventListener('keydown',spinRecord);
window.addEventListener('keydown',stopRecord);
