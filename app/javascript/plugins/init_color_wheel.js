import "reinvented-color-wheel/css/reinvented-color-wheel.min.css";
import ReinventedColorWheel from "reinvented-color-wheel";

// create a new color picker
const initColorWheel = () => {
  let exerciseValue;
  // let btn = btnQuery
  let newElement = document.createElement('div');
  setTimeout(function(){
    let insideEl = document.querySelector(".reinvented-color-wheel--sv-space")
    newElement.setAttribute("class", 'color-number');
    insideEl.parentElement.replaceChild(newElement, insideEl)

  }, 1)
var colorWheel = new ReinventedColorWheel({
  // appendTo is the only required property. specify the parent element of the color wheel.
  appendTo: document.querySelector("#color-wheel"),

  // followings are optional properties and their default values.

  // initial color (can be specified in hsv / hsl / rgb / hex)
  hsv: [0, 100, 100],
  // hsl: [0, 100, 50],
  // rgb: [255, 0, 0],
  // hex: "#ff0000",

  // appearance
  wheelDiameter: 200,
  wheelThickness: 20,
  handleDiameter: 16,
  wheelReflectsSaturation: false,

  // handler
  onChange: function (color) {
    // the only argument is the ReinventedColorWheel instance itself.
    console.log("hsv:", color.hsv[0], color.hsv[1], color.hsv[2]);
    let formVal = color.hsv[0] / 3;
    console.log(formVal)
    newElement.innerHTML = formVal;
  }

});
  // btn.addEventListener('click', e => {
  //   e.preventDefault();
  //   fetch(btn.dataset.url, {
  //     method: 'POST'
  //     body: {
  //       exercise: formVal
  //     }
  //   }).then(response => response.json()).then(data => console.log(data))
  // })
}


export { initColorWheel };
