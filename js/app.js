import "../scss/style.scss";

$(function() {

  const style = getComputedStyle(document.body);
  let imgPath = style.getPropertyValue('--baseImg').replace("/'/", "");

  const imageDiv = $("#image");
  const confirmEyesBtn = $("#confirm-eyes");
  const removeEyesBtn = $("#remove-eyes");
  let warningMsg = $(".warning");
  let startingPoints = $(".target");

  const inputs = document.querySelectorAll('.controls input');
  

  $(imageDiv).css("backgroundImage", `url(${eval(imgPath)})`); // later, i'll think about how to get rid of eval

  $(imageDiv).on("click", () => {
    startingPoints = $(".target");
    if (startingPoints.length < 2 ) {
      const layerX = event.layerX-15;
      const layerY = event.layerY-15;
      const startingPoint = $(`<div class="target" style="top:${layerY}px; left: ${layerX}px"></div>`); // maybe some unique id will be needed in future
      $(event.target).append(startingPoint);
    } else if (startingPoints.length === 2 ) {
      $(warningMsg).text("you can only add two starting points. remove them, if you want to chane positions");
    }
  });

  $(removeEyesBtn).on("click", () => {
    $(imageDiv).find(".target").remove();
    $(warningMsg).text("");
  });




  // function handleUpdate() {
  //   const suffix = this.dataset.sizing || '';
  //   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  // }

});
