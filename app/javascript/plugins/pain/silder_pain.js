import CircleSlider from "circle-slider";

function sliderPain(){
  const options = {
    snap: 45,
    clockwise: true,
    startPos: "top",
  };

  const cs = new CircleSlider("#pslider");

  const symptom = document.querySelector("#symptom");

  let painText = 'Head';
  const pain = document.querySelector(".slider-pain");
  pain.innerText = painText;
  cs.on("sliderMove", (angle) => {

    if (angle > 0 && angle <= 90) {
      painText = 'Head'
    }
    else if (angle > 91 && angle <= 180) {
      painText = 'Stomach'
    }
    else if (angle > 181 && angle <= 270) {
      painText = 'Back'
    }
    else if (angle > 271 && angle <= 360) {
      painText = 'Chest'
    }
    pain.textContent = painText;
    symptom.value = painText;
  })
  cs.on("sliderUp", (angle) => {
    let option = document.querySelector(`option[value='${painText}']`);
    option.selected =true
  })
}

export { sliderPain };
