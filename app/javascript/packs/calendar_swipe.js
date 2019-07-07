import $ from 'jquery';

const calendarSwipe = () => {
  const month = document.querySelector('.calendar-title');
  const day = document.querySelector('day');


  let yearInput = document.querySelector('#day_date_1i');
  let monthInput = document.querySelector('#day_date_2i');
// let yearOption = document.querySelector(`option[value='${yearInput}'`)
// let monthOption = document.querySelector(`option[value='${monthInput}'`)
// let dayOption = document.querySelector(`option[value='${dayInput}'`)

// yearOption.selected = true
// monthOption.selected = true
// dayOption.selected = true

}

  var d = new Date();
  var n = d.getDate();
  var today = $(`a:contains('${n}')`);
  today.addClass('week-active')


  let dayInput = document.querySelector('#day_date_3i');

  const days = document.querySelectorAll('.day-link');
  days.forEach((day)=> {
    day.addEventListener('click', (event)=>{
      // selected.removeAttribute('selected');
      // day.innerHTML.setAttribute('selected');

      let selectedDate = event.target;

      days.forEach((day)=> {
      day.classList.remove('week-active');
        let remove = dayInput.options[dayInput.options.selectedIndex].removeAttribute('selected');
      })
      selectedDate.classList.add('week-active');
      let options = dayInput.selectedOptions;
      let day = selectedDate.innerHTML

      let selected = options.selectedOptions;
      let selectedNode = dayInput.options[day - 1].setAttribute('selected', true);
      console.log(selected);
      // console.log(selectedDate);
    })
  })
