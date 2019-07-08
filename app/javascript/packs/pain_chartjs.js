import Chart from 'chart.js';

  var ctx = document.getElementById('myChart-pain');
  console.log(ctx.dataset)
  let pains = JSON.parse(ctx.dataset.finalPains)

    var myBubbleChart = new Chart(ctx, {
        type: 'bubble',
        data: {
          // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              // labels  : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              data: pains,
              backgroundColor: [
                  'rgba(165, 70, 87, .8)', // angry
                  'rgba(255, 77, 128, .8)', // anxious
                  'rgba(102, 0, 0, .8)', // Good
                  'rgba(218, 85, 82, .8)', // great

              ],
              borderColor: [
                  // 'rgba(255, 99, 132, 1)',
                  // 'rgba(255, 159, 64, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(255, 206, 86, 1)',

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







