// import $ from 'jquery';
// var d = new Date();
// var n = d.getDate();
// var today;
// $(`a:contains('${n}')`).each(function( index ) {
//   if ($( this ).text().trim() == n) {
//     today = $( this )
//     console.log(today)
//   }
// });

// today.addClass('active')

const days = document.querySelectorAll('.day-link');
days.forEach((day)=> {
  day.addEventListener('click', (event)=>{
    let selectedDate = event.target;
    days.forEach((day)=> {
      day.classList.remove('active');
    })
    selectedDate.classList.add('active');
    // console.log(selectedDate);
  })
})

