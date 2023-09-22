function startTimer(duration, displayH, displayM, displayS) {
  var timer = duration,
    hours,
    minutes,
    seconds;

  setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    displayH.textContent = hours;
    displayM.textContent = minutes;
    displayS.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}
window.onload = function () {
  var duration = 60 * 29.5; //Conversão para segundos
  var displayH = document.querySelector("#hours"); //Elemento para exibir o timer
  var displayM = document.querySelector("#minutes"); //Elemento para exibir o timer
  var displayS = document.querySelector("#seconds"); //Elemento para exibir o timer

  startTimer(duration, displayH, displayM, displayS); //Incia a função
};
