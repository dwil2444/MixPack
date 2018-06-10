let aSource;
let bSource;   // these are AudioBufferSourceNodes, use these to manipulate gain
// Use separate  audio streams to enable continuous playback.
// maybe use npm audio packages
// split the audio sources for both decks
// set the audio context on opening then suspend, resume when play is hit, suspend otherwise
var i = 0;
var j = 0;

function spinRecord(e)
{
    if(e.code !== 'KeyP') return;
    const active = document.querySelector('.active');
    loadRecord(active.id);
    active.classList.add('playing');

}
function stopRecord(e)
{
    if(e.code !== 'KeyS' && e.code !== 'Space') return;
    const active = document.querySelector('.active');
    active.classList.remove('playing');
    if(active.id == 'leftDeck')
    {
      leftContext.suspend();  //This may be insufficient for audio effects such as key tuning and gain
    }
    else
    {
      rightContext.suspend();
    }
}

function loadRecord(id)
{
  if(id == 'leftDeck')
  {
      if(i > 0)
      {
        leftContext.resume();
        return;
      }
      aSource.start(0);
      i++;
  }
  else
  {
    if(j > 0)
    {
      rightContext.resume();
      return;
    }
    bSource.start(0);
    j++;
  }
}

window.addEventListener('keydown',spinRecord);
window.addEventListener('keydown',stopRecord);
