const calendarSwipe = () => {
  const month = document.querySelector('.calendar-title');
  const day = document.querySelector('day');




  let monthInput = document.querySelector('#day_date_2i');
  let dayInput = document.querySelector('#day_date_3i')

let monthOption = document.querySelector(`option[value='${monthInput}'`)
let dayOption = document.querySelector(`option[value='${dayInput}'`)
monthOption.selected = true
dayOption.selected = true

}







  const days = document.querySelectorAll('.day-link');
  days.forEach((day)=> {
    day.addEventListener('click', (event)=>{
      let selectedDate = event.target;
      days.forEach((day)=> {
        day.classList.remove('active');
      })
      selectedDate.classList.add('active');
      console.log(selectedDate);
    })
  })
