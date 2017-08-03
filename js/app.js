import "../scss/style.scss";

$(function() {

  const imageDiv = $("#image");


  const style = getComputedStyle(document.body);
  let imgPath = style.getPropertyValue('--baseImg').replace("/'/", "");

  console.log(imgPath);

  $(imageDiv).css("backgroundImage", `url(${eval(imgPath)})`); // later, i'll think about how to get rid of eval
  console.log(imageDiv);

  // function handleUpdate() {
  //   const suffix = this.dataset.sizing || '';
  //   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  // }

});
