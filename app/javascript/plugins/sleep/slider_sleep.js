import './slider_sleep.scss'
import CircleSlider from "circle-slider";

const sliderSleep = () => {
  const options = {
    snap: 45,
    clockwise: true,
    startPos: "top",
  };
  const hours = document.querySelector('#hours');

  let sleepHours = 'Hours';
  const cs = new CircleSlider("#sslider", options);
  const sleep = document.querySelector('.slider-sleep');
  sleep.innerText = sleepHours;

  cs.on("sliderMove", (angle) => {
    if (angle > 0 && angle <= 30) {
      sleepHours = '1'
    }
    else if (angle > 31 && angle <= 60) {
      sleepHours = '2'
    }
     else if (angle > 61 && angle <= 90) {
      sleepHours = '3'
    }
     else if (angle > 91 && angle <= 120) {
      sleepHours = '4'
    }
     else if (angle > 121 && angle <= 150) {
      sleepHours = '5'
    }
     else if (angle > 151 && angle <= 180) {
      sleepHours = '6'
    }
     else if (angle > 181 && angle <= 210 ) {
      sleepHours = '7'
    }
     else if (angle > 211 && angle <= 240) {
      sleepHours = '8'
    }
     else if (angle > 241 && angle <= 270) {
      sleepHours = '9'
    }
     else if (angle > 271 && angle <= 300) {
      sleepHours = '10'
    }
     else if (angle > 301 && angle <= 330) {
      sleepHours = '11'
    }
     else if (angle > 331 && angle <= 360) {
      sleepHours = '12'
    }
    sleep.textContent = sleepHours;
    hours.value = sleepHours;
})
  cs.on("sliderUp", (angle) => {
    let option = document.querySelector(`option[value='${sleepHours}']`);
    option.selected =true
  })
}

export { sliderSleep }























