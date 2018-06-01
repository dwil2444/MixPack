function spinRecord(e)
{
    console.log(e);
    if(e.code !== 'KeyP') return;
    const limbo = document.querySelector('.limbo');
    console.log(limbo);
    limbo.classList.add('playing');
}

function stopRecord(e)
{
    console.log(e);
    // if(e.propertyName !== 'animation') return;
    if(e.code !== 'KeyS') return;
    const limbo = document.querySelector('.limbo');
    limbo.classList.remove('playing');
}

window.addEventListener('keydown',spinRecord);
window.addEventListener('keydown',stopRecord);
