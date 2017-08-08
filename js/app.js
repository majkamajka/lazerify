import "../scss/style.scss";

$(function() {

//variables

  const style = getComputedStyle(document.body);
  let imgPath = style.getPropertyValue('--baseImg').replace("/'/", "");

  const imageDiv = $("#image");
  const startEyesBtn = $("#start-eyes");
  const confirmEyesBtn = $("#confirm-eyes");
  const removeEyesBtn = $("#remove-eyes");
  let warningMsg = $(".warning");
  let startingPoints = $(".starting-point");
  const lazerOne = $(".lazer.one");
  const lazerTwo = $(".lazer.two");
  const startTargetBtn = $("#start-target");
  const confirmTargetBtn = $("#confirm-target");
  const removeTargetBtn = $("#remove-target");
  let lazerTarget = $(".lazer-target");



  const inputs = document.querySelectorAll("#lazer-props input");


// everything else

  $(imageDiv).css("backgroundImage", `url("${eval(imgPath)}")`); // later, i'll think about how to get rid of eval

  $(startEyesBtn).on("click", () => {
    $(imageDiv).on("click", () => {
      startingPoints = $(".starting-point");
      console.log(startingPoints.length);
      if (startingPoints.length === 0) {
        const layerX1 = event.layerX-15;
        const layerY1 = event.layerY-15;
        document.documentElement.style.setProperty("--lazerOneX", `${layerX1+2}px`);
        document.documentElement.style.setProperty("--lazerOneY", `${layerY1+20}px`);
        const startingPoint = $(`<div class="starting-point" style="top:${layerY1}px; left: ${layerX1}px"></div>`); // maybe some unique id will be needed in future
        $(event.target).append(startingPoint);

      } else if (startingPoints.length === 1) {
        const layerX2 = event.layerX-15;
        const layerY2 = event.layerY-15;
        document.documentElement.style.setProperty("--lazerTwoX", `${layerX2+2}px`);
        document.documentElement.style.setProperty("--lazerTwoY", `${layerY2+20}px`);
        const startingPoint = $(`<div class="starting-point" style="top:${layerY2}px; left: ${layerX2}px"></div>`); // maybe some unique id will be needed in future
        $(event.target).append(startingPoint);

      } else if (startingPoints.length === 2 ) {
        $(warningMsg).text("you can only add two starting points. remove them, if you want to chane positions");
      };
    });
  });

  $(startTargetBtn).on("click", () => {
    $(imageDiv).on("click", () => {
      lazerTarget = $(".lazer-target");
      if (lazerTarget.length === 0) {
        const layerX1 = event.layerX-15;
        const layerY1 = event.layerY-15;
        document.documentElement.style.setProperty("--targetX", `${layerX1+2}px`);
        document.documentElement.style.setProperty("--targetY", `${layerY1+20}px`);
        const target = $(`<div class="lazer-target" style="top:${layerY1}px; left: ${layerX1}px"></div>`); // maybe some unique id will be needed in future
        $(event.target).append(target);
      } else {
        $(warningMsg).text("you can only add one target. remove, if you want to change it");
      };
    });
  })



  $(removeEyesBtn).on("click", () => {
    $(imageDiv).find(".starting-point").remove();
    $(lazerOne).css("display", "none");
    $(lazerTwo).css("display", "none");
    $(warningMsg).text("");
    startingPoints = 0;
  });

  $(confirmEyesBtn).on("click", () => {
    startingPoints = $(".starting-point");
    console.log(startingPoints.length);
    if (startingPoints.length === 1) {
      $(lazerOne).css("display", "inline-block");
    } else if (startingPoints.length === 2) {
      $(lazerOne).css("display", "inline-block");
      $(lazerTwo).css("display", "inline-block");
    };
    startingPoints = 0;
    $(imageDiv).find(".starting-point").remove();
    $(warningMsg).text("");
  });


  function handleUpdate() {
    const prefix = this.dataset.prefix || '';
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, prefix + this.value + suffix);
  };

  $(inputs).on("mousemove", handleUpdate);


});





// switch (startingPoints.length) {
//   case 0:
//     const layerX1 = event.layerX-15;
//     const layerY1 = event.layerY-15;
//     document.documentElement.style.setProperty("--lazerOneX", `${layerX1+2}px`);
//     document.documentElement.style.setProperty("--lazerOneY", `${layerY1+20}px`);
//     const startingPoint = $(`<div class="target" style="top:${layerY1}px; left: ${layerX1}px"></div>`); // maybe some unique id will be needed in future
//     $(event.target).append(startingPoint);
//     break;
//
//   case 1:
//     const layerX2 = event.layerX-15;
//     const layerY2 = event.layerY-15;
//     document.documentElement.style.setProperty("--lazerTwoX", `${layerX2+2}px`);
//     document.documentElement.style.setProperty("--lazerTwoY", `${layerY2+20}px`);
//     const startingPoint = $(`<div class="target" style="top:${layerY2}px; left: ${layerX2}px"></div>`); // maybe some unique id will be needed in future
//     $(event.target).append(startingPoint);
//
//   case 2:
//     $(warningMsg).text("you can only add two starting points. remove them, if you want to chane positions");
// }
