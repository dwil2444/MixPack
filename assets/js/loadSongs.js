
function playAudio(fileName,element)  // attach the filename to the src tag in html document.
{//make file name from extension passed by caller
    console.log(fileName);
    console.log(element);
    var attr = element.attributes;
    const audioTag = document.querySelector(`audio[data-key="${attr[2].nodeValue}"]`);

    var audio = new Audio("./assets/music/" + fileName);  // replace this with method that gets complete file name, perhaps use nodejs to make a server
    audioTag.setAttribute("src",audio.src);
    audio.currentTime = 0;
    alert('Song Loaded');
    //audio.play();
    alert(audio.src);
}
//alert("File: " + audio.src);

function loadSong(ev)
{
  ev.preventDefault();
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
        playAudio(file.name,active);
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
  removeDragData(ev)// Pass event to removeDragData for cleanup
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
