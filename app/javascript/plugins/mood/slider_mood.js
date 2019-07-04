import './slider_mood.scss'
import CircleSlider from "circle-slider";

const sliderMood = () => {
  const options = {
    snap: 45,
    clockwise: true,
    startPos: "top",
  };

  const feeling = document.querySelector('#feeling');

  let moodText = 'Great';
  const cs = new CircleSlider("#mslider", options);
  const mood = document.querySelector(".slider-mood");
  mood.innerText = moodText;
  cs.on("sliderMove", (angle) => {

    if (angle > 0 && angle <= 60) {
      moodText = 'Great'
    }
    else if (angle > 61 && angle <= 120){
      moodText = 'Good'
    }
    else if (angle > 121 && angle <= 180){
      moodText = 'Okay'
    }
    else if (angle > 181 && angle <= 240){
      moodText = 'Sad'
    }
    else if (angle > 241 && angle <= 300){
      moodText = 'Angry'
    }
    else if (angle > 301 && angle <= 360){
      moodText = 'Anxious'
    }
    mood.textContent = moodText;
    feeling.value = moodText;
  })
  cs.on("sliderUp", (angle) => {
    let option = document.querySelector(`option[value='${moodText}']`);
    option.selected =true
  })
}

export { sliderMood }
