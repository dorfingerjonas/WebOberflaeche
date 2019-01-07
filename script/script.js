let videoStatus = false;
let imageStatus = false;
let audioStatus = false;
let textStatus = false;

function displayVideo(){

  let image = document.getElementById("imageContent");
  let video = document.getElementById("videoContent");
  let audio = document.getElementById("audioContent");
  let text = document.getElementById("textContent");
  let box = document.getElementById("box");

  box.style.opacity = 0;
  audio.style.display = "none";
  audioStatus = false;
  audio.pause();
  image.style.display = "none";
  imageStatus = false;
  text.style.display = "none";
  textStatus = false;

  video.load();

  if (videoStatus === false){

    box.style.opacity = 1;
    video.style.display = "block";
    video.play();
    videoStatus = true;

  } else if (videoStatus === true){

    box.style.opacity = 0;
    video.style.display = "none";
    video.pause();
    videoStatus = false;

  }
}

function displayImage(){

  let image = document.getElementById("imageContent");
  let video = document.getElementById("videoContent");
  let audio = document.getElementById("audioContent");
  let text = document.getElementById("textContent");
  let box = document.getElementById("box");

  box.style.opacity = 0;
  video.style.display = "none";
  videoStatus = false;
  video.pause();
  audio.style.display = "none";
  audioStatus = false;
  audio.pause();
  text.style.display = "none";
  textStatus = false;

  if (imageStatus === false){

    box.style.opacity = 1;
    image.style.display = "block";
    image.style.opacity = 1;
    imageStatus = true;

  } else if (imageStatus === true){

    image.style.display = "none";
    imageStatus = false;

  }
}

function displayAudio(){

  let image = document.getElementById("imageContent");
  let video = document.getElementById("videoContent");
  let audio = document.getElementById("audioContent");
  let text = document.getElementById("textContent");
  let box = document.getElementById("box");

  box.style.opacity = 0;
  video.style.display = "none";
  videoStatus = false;
  video.pause();
  image.style.display = "none";
  imageStatus = false;
  text.style.display = "none";
  textStatus = false;

  audio.load();

  if (audioStatus === false){

    box.style.opacity = 1;
    audio.style.display = "block";
    audioStatus = true;
    audio.play();

  } else if (audioStatus === true){

    audio.style.display = "none";
    audioStatus = false;
    audio.pause();

  }
}

function displayText(){

  let image = document.getElementById("imageContent");
  let video = document.getElementById("videoContent");
  let audio = document.getElementById("audioContent");
  let text = document.getElementById("textContent");
  let icon = document.getElementById("iconHover");
  let box = document.getElementById("box");

  box.style.opacity = 0;
  video.style.display = "none";
  videoStatus = false;
  video.pause();
  audio.style.display = "none";
  audioStatus = false;
  audio.pause();
  image.style.display = "none";
  imageStatus = false;


  if (textStatus === false){

    box.style.opacity = 1;
    text.style.display = "block";
    textStatus = true;

  } else if (textStatus === true){

    text.style.display = "none";
    textStatus = false;

  }
}
