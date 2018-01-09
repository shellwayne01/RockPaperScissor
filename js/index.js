var buttons = document.getElementsByClassName('choice');

// Add event listener
for(var i=0; i<buttons.length; i++){
  buttons[i].addEventListener("click", response);
}

// The event
function response(e)
{
  // Chooses PC results
  var pcChoices = ["rock", "paper", "scissor"];
  var index = Math.floor(Math.random() * 3);
  document.getElementById('Presult').innerText = pcChoices[index];  
  if(index == 0)
    {
      document.getElementById('Pimg').src = "https://www.gobigrock.com/wp-content/uploads/2016/10/Fieldstone.png"; 
    }
  else if(index == 1)
    {
      document.getElementById('Pimg').src =  "https://n6-img-fp.akamaized.net/free-vector/paper-sheets-with-clip_1232-27.jpg?size=338&ext=jpg"
    }
  else{
    document.getElementById('Pimg').src = "https://images-na.ssl-images-amazon.com/images/I/713QA7eqzFL._SL1500_.jpg";
  }
  
  
  // Chooses (Shows) User Results
  var btn = e.target || e.srcElement;
  if(btn.innerText === "Scissor"){
    document.getElementById('Uresult').innerText = 'scissor';
    document.getElementById('Uimg').src = "https://images-na.ssl-images-amazon.com/images/I/713QA7eqzFL._SL1500_.jpg";
  }
  else if(btn.innerText === "Rock"){
  document.getElementById('Uresult').innerText = 'rock';  
  document.getElementById('Uimg').src = "https://www.gobigrock.com/wp-content/uploads/2016/10/Fieldstone.png"; 
    }
  else{
  document.getElementById('Uresult').innerText = 'paper';
  document.getElementById('Uimg').src =  "https://n6-img-fp.akamaized.net/free-vector/paper-sheets-with-clip_1232-27.jpg?size=338&ext=jpg"
  }
}