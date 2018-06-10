var leftContext = new AudioContext;
var rightContext = new AudioContext;
window.addEventListener('load', contextInit, false);

function contextInit()
{
  try
  {
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    leftContext = new AudioContext();
    rightContext = new AudioContext();
  }
  catch(e)
  {
    alert('Web Audio API is not supported in this browser');
  }
}
//maybe create 2 audiocontexts although 1 should be enough


/*
1. Give each deck an id
2.
*/
