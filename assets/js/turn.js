
// Use separate  audio streams to enable continuous playback.
// maybe use npm audio packages
var i = 0;

function spinRecord(e)
{
    if(e.code !== 'KeyP') return;
    const active = document.querySelector('.active');
    console.log(active);
    // var attr  = active.attributes;
    // console.log(attr);
    // const audioTag = document.querySelector(`audio[data-key="${attr[2].nodeValue}"]`);
    // console.log(audioTag);
    // audio = new Audio(audioTag.getAttribute("src"));
    // audio.currentTime = 0;
    // audio.play();
    active.classList.add('playing');
    if(i > 0)
    {
      context.resume();
      return;
    }
    // audioTag.classList.add('audioRunning');
    Asource.start(0);
    i++;
}
function stopRecord(e)
{
    if(e.code !== 'KeyS' && e.code !== 'Space') return;
    const active = document.querySelector('.active');
    // var attr  = active.attributes;
    // console.log(attr);
    // const audioTag = document.querySelector('.audioRunning');
    // audioTag.classList.remove('audioRunning');
    // audio.currentTime = 0;
    // audio.pause();
    active.classList.remove('playing');
    context.suspend();
}

window.addEventListener('keydown',spinRecord);
window.addEventListener('keydown',stopRecord);
