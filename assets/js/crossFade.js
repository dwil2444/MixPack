var CrossfadeSample = {playing:false};

CrossfadeSample.crossfade = function(element)
{
  var x = parseInt(element.value) / parseInt(element.max);
  var gain1 = Math.cos(x * 0.5*Math.PI);
  var gain2 = Math.cos((1.0 - x) * 0.5*Math.PI);
  aSource.gainNode.gain.value = gain1;
  bSource.gainNode.gain.value = gain2;
};
