var counter=1;
setInterval(function()
{
  document.getElementById('radiobutton'+ counter).checked = true;
  counter++;
  if(counter > 5)
  counter =  1;
},5000);