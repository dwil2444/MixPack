
function playAudio(fileName)
{//make file name from word passed by caller
    var audio = new Audio("./assets/music/" + fileName + ".mp3");
    audio.play();
}
//alert("File: " + audio.src);

function loadSong(ev)
{
  console.log('File(s) dropped');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log('... file[' + i + '].name = ' + file.name);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
    }
    playAudio(files[0].name);
  }
  // Pass event to removeDragData for cleanup
  removeDragData(ev)
}

function removeDragData(ev)
{
  console.log(ev);
}

function dragOverHandler(ev)
{
  console.log('File(s) in drop zone');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}


window.addEventListener('drag',loadSong);
