// var slider = document.getElementById("myRange");    // use this script to change the crossfader
//                                                     // configure crossfader to adjust volume
// slider.oninput = function()
// {
// }

/* Script to highlight deck by clicking */


/* Script to identify a song by name  */

function switchDeck(e)
{
    if(e.code !== 'KeyW') return;
    const decks = document.querySelectorAll('.limbo');
    const firstDeck = decks[0].classList;
    const secondDeck = decks[1].classList;
    if(firstDeck.contains('active'))
    {
        firstDeck.remove('active');
        secondDeck.add('active');
    }
    else
    {
        secondDeck.remove('active');
        firstDeck.add('active');
    }
}

window.addEventListener('keydown',switchDeck);
