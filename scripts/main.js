// Image switcher code



let myImage = document.querySelector('img');



myImage.onclick = function() {

  let mySrc = myImage.getAttribute('src');

  if(mySrc === 'images/Chrome.png') {

    myImage.setAttribute ('src','images/Internet explorer.png');

  } else {

    myImage.setAttribute ('src','images/Chrome.png');

  }

}



// Personalized welcome message code



let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');



function setUserName() {

  let myName = prompt('Please enter your name.');

  if(!myName || myName === null) {

    setUserName();

  } else {

    localStorage.setItem('name', myName);

    myHeading.innerHTML = '¿Qué navegador es mejor?, ' + myName;

  }

}



if(!localStorage.getItem('name')) {

  setUserName();

} else {

  let storedName = localStorage.getItem('name');

  myHeading.innerHTML = 'Me gusta el Chrome, ' + storedName;

}



myButton.onclick = function() {

  setUserName();

}
