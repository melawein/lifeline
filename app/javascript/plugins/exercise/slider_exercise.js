import './slider_exercise.scss'
import CircleSlider from "circle-slider";

const sliderExercise = () => {
  const options = {
    snap: 45,
    clockwise: true,
    startPos: "top",
  };

  const time = document.querySelector('#exercise_time');

  let exerciseTime = 'Minutes';

  const cs = new CircleSlider("#eslider", options);
  const exercise = document.querySelector('.slider-exercise');
  exercise.innerText = exerciseTime;
  cs.on("sliderMove", (angle) => {
    if (angle > 0 && angle <= 30) {
      exerciseTime = '10'
    }
    else if (angle > 31 && angle <= 60) {
      exerciseTime = '20'
    }
     else if (angle > 61 && angle <= 90) {
      exerciseTime = '30'
    }
     else if (angle > 91 && angle <= 120) {
      exerciseTime = '40'
    }
     else if (angle > 121 && angle <= 150) {
      exerciseTime = '50'
    }
     else if (angle > 151 && angle <= 180) {
      exerciseTime = '60'
    }
     else if (angle > 181 && angle <= 210 ) {
      exerciseTime = '70'
    }
     else if (angle > 211 && angle <= 240) {
      exerciseTime = '80'
    }
     else if (angle > 241 && angle <= 270) {
      exerciseTime = '90'
    }
     else if (angle > 271 && angle <= 300) {
      exerciseTime = '100'
    }
     else if (angle > 301 && angle <= 330) {
      exerciseTime = '110'
    }
     else if (angle > 331 && angle <= 360) {
      exerciseTime = '120'
    }
    exercise.textContent = exerciseTime;
    time.value = exerciseTime;
  })
  cs.on("sliderUp", (angle) => {
    let option = document.querySelector(`option[value='${exerciseTime}']`);
    option.selected =true
  })
}

export { sliderExercise }


















