$(function () {
  //write your code here
  let startRace = $("#startRace");
  let startOver = $("#startOver");
  let counterHtml = $("#counter");

  let carOne = $("#carOne");
  let carTwo = $("#carTwo");
  let resultCarOne = $("#statsOne");
  let resultCarTwo = $("#statsTwo");
  let finishFlag = $("#finishFlag");
  let timeCounter = 4;

  counterHtml.hide();
  finishFlag.hide();


  let maxWidth = $(window).width() - carOne.width() - 20;
  let randomOne = Math.floor(Math.random() * 10000);
  let randomTwo = Math.floor(Math.random() * 10000);

  function carOnePlace() {
    if (randomOne < randomTwo) {
      return "first";
    } else {
      return "second";
    }
  }

  function carTwoPlace() {
    if (randomTwo < randomOne) {
      return "first";
    } else {
      return "second";
    }
  }


  startRace.on("click", function () {
    startRace.prop("disabled", true);
    startOver.prop("disabled", true);

    counterHtml.show();

    let interval = setInterval(function () {
      timeCounter--;
      counterHtml.text(timeCounter);
      if (timeCounter == 0) {
        stopCountDown();
        counterHtml.hide();

        carOne.animate(
          {
            marginLeft: maxWidth,
          },
          randomOne,
          function () {
            finishFlag.show();
            startOver.prop("disabled", false);
            resultCarOne.prepend(
              `
            <p>Finished in: <span style="color:#ffebf7; font-weight:bold;">${randomOne < randomTwo ? 'first' : "second"}</span> place with a time of: <span style="color:#ffebf7; font-weight:bold;">
            ${randomOne}</span> milliseconds!</p>
            `
            );
          }
        );

        carTwo.animate(
          {
            marginLeft: maxWidth,
          },
          randomTwo,
          function () {
            finishFlag.show();
            startOver.prop("disabled", false);
            resultCarTwo.prepend(
              `
            <p>Finished in: <span style="color:#ba0000; font-weight:bold;">${randomOne > randomTwo ? 'first' : "second"}</span> place with a time of: <span style="color:#ba0000; font-weight:bold;">
            ${randomTwo}</span> milliseconds!</p>
            `
            );
          }
        );
      }
      localStorage.setItem("resultOne", carOnePlace());
      localStorage.setItem("timingOne", randomOne);

      localStorage.setItem("resultTwo", carTwoPlace());
      localStorage.setItem("timingTwo", randomTwo);
    }, 1000);
    function stopCountDown() {
      clearInterval(interval);
      return false;
    }
  });


  startOver.on("click", function () {
    startRace.prop("disabled", false);

    finishFlag.hide();
    carOne.animate({ marginLeft: "0px" });
    carTwo.animate({ marginLeft: "0px" });
    counterHtml.text("");
    randomOne = Math.floor(Math.random() * 1500);
    randomTwo = Math.floor(Math.random() * 1500);
    timeCounter = 4;
  });

  let previousResults = $("#previousResults");
  let previousResultOne = localStorage.getItem("resultOne");
  let previousTimingOne = localStorage.getItem("timingOne");
  let previousResultTwo = localStorage.getItem("resultTwo");
  let previousTimingTwo = localStorage.getItem("timingTwo");

  if (
    previousResultOne &&
    previousTimingOne &&
    previousResultTwo &&
    previousTimingTwo
  ) {
    previousResults.html(
      `
      <h3>Results from the previous time you played this game:</h3>
      <p class="text-white">
      <span style="color:#ffebf7; font-weight:bold;">Car1</span> finished in <span style="color:#ffebf7; font-weight:bold;">${previousResultOne}</span> place, with a time of 
      <span style="color:#ffebf7; font-weight:bold;">${previousTimingOne}</span> milliseconds!
      </p>
      <p class="text-white">
      <span style="color:#ba0000; font-weight:bold;">Car2</span> finished in <span style="color:#ba0000; font-weight:bold;">${previousResultTwo}</span> place, with a time of 
      <span style="color:#ba0000; font-weight:bold;">${previousTimingTwo}</span> milliseconds!
      </p>
      `
    );
  }
});