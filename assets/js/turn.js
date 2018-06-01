function spinRecord(e)
{
    if(e.code !== 'KeyP') return;
    const active = document.querySelector('.active');
    console.log(active);
    active.classList.add('playing');
}

function stopRecord(e)
{
    if(e.code !== 'KeyS' && e.code !== 'Space') return;
    const active = document.querySelector('.active');
    active.classList.remove('playing');
}

window.addEventListener('keydown',spinRecord);
window.addEventListener('keydown',stopRecord);
