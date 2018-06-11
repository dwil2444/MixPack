
/*
3. Connect the audiobuffersourcenodes to all relevant effects before connecting them to their destination.
*/
function playAudio(file,element)
{
    // query the active deck and remove playing class
    const actives = document.querySelectorAll('.limbo');
    actives.forEach(function(limbo)
    {
      if(!(limbo.classList.contains('.playing')))
      {
        if(limbo.id == element.id)
        {
          limbo.classList.remove('playing');
        }
      }
    });
    const active = document.querySelector('.active');
    if(active.classList.contains('playing'))
    {
      if(active.id == element.id)
      {
          active.classList.remove('playing');
      }

    }
    var reader = new FileReader();
    reader.readAsArrayBuffer(file);  // loads an array buffer representing the file's data into the result tag
    reader.addEventListener('load', function(e)
    {
      var data = e.target.result
      if(element.id == 'leftDeck')
      {
          context.decodeAudioData(data, function(buffer)    //second argument is a callback function containing the decoded data
          {
            if(i>0)
            {
                i = 0;
                aSource.stop();
            }
            aSource = loadBuffer(buffer,element.id);
          });
      }
      else
      {
          context.decodeAudioData(data, function(buffer)    //second argument is a callback function containing the decoded data
          {
            if(j>0)
            {
                j = 0;
                bSource.stop();
            }
            bSource = loadBuffer(buffer,element.id);
          });
      }
    });

}

var loadBuffer = function(buffer,id)
{
    var source = context.createBufferSource();
    var gainNode = context.createGain ? context.createGain() : context.createGainNode();
    source.loop = true; //remove this later
    source.buffer = buffer;
    source.connect(gainNode);
    gainNode.connect(context.destination);
    return{
      source: source,
      gainNode: gainNode
    };
}

function loadSong(ev)
{
  ev.preventDefault();
  ev.stopPropagation();
  console.log('File(s) dropped');
  const classes = (ev.path[0].classList.value);
  const active = document.querySelector(`img[class="${classes.toString()}"]`);
  // Prevent default behavior (Prevent file from being opened)
  if (ev.dataTransfer.items)
  {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++)
    {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === 'file')
      {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log('... file[' + i + '].name = ' + file.name);
        console.log(file);
        console.log('file above');
        playAudio(file,active);
      }
    }
  }
  else
  {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++)
    {
      console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
    }
  }
  //removeDragData(ev)// Pass event to removeDragData for cleanup
}

function removeDragData(ev)  // fill this in later
{
  console.log(ev);
}

function dragOverHandler(ev)
{
  console.log('File(s) in drop zone');
  ev.preventDefault();// Prevent default behavior (Prevent file from being opened)
}


window.addEventListener('drag',loadSong);
