import Chart from 'chart.js';

  var ctx = document.getElementById('myChart');
  let moods = JSON.parse(ctx.dataset.finalMoods)

  console.log(moods)
    var myBubbleChart = new Chart(ctx, {
        type: 'bubble',
        data: {
          // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              // labels  : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              data: moods,
              backgroundColor: [
                  'rgba(255, 99, 132, .6)', // angry
                  'rgba(255, 159, 64, .6)', // anxious
                  'rgba(255, 206, 86, .6)', // Good
                  'rgba(75, 192, 192, .6)', // great
                  'rgba(153, 102, 255, .6)', // okay
                  'rgba(54, 162, 235, .6)' // sad
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1,
          }]
        },

        options: {
          responsive: true,
          maintainAspectRatio: true,
          showLines: false,
          scales: {
            yAxes: [{
              gridLines: {
                display:false,
                drawBorder: false,
              },
              ticks: {
                display: false //this will remove only the label
              }
            }],
            xAxes: [{
              gridLines: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                display: false //this will remove only the label
              }
            }]
          },
          legend: {
            display: false,
            position: 'bottom',
          }
        }

    });



    {
        // X Value
        x: 10;

        // Y Value
        y: 20;

        // Bubble radius in pixels (not scaled).
        r: 5
    }







