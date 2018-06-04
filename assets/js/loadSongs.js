
var context = new AudioContext();

function playAudio(file,element)
{
    var reader = new FileReader();
    reader.addEventListener('load', function(e)
    {
            var data = e.target.result
            context.decodeAudioData(data, function(buffer)
            {
                Asource = playSound(buffer);
                console.log(Asource);
            });
        });
        reader.readAsArrayBuffer(file)
}

var playSound = function(buffer)
{
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    return source;
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
