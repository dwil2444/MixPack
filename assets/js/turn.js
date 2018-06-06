let Asource;
let Bsource;
// Use separate  audio streams to enable continuous playback.
// maybe use npm audio packages
// split the audio sources for both decks
// set the audio context on opening then suspend, resume when play is hit, suspend otherwise
var i = 0;

function spinRecord(e)
{
    if(e.code !== 'KeyP') return;
    const active = document.querySelector('.active');
    console.log(active);
    active.classList.add('playing');
    if(i > 0)
    {
      context.resume();
      return;
    }
    Asource.start(0);
    i++;
}
function stopRecord(e)
{
    if(e.code !== 'KeyS' && e.code !== 'Space') return;
    const active = document.querySelector('.active');
    active.classList.remove('playing');
    context.suspend();  //This may be insufficient for audio effects such as key tuning and gain
}

window.addEventListener('keydown',spinRecord);
window.addEventListener('keydown',stopRecord);
