import Chart from 'chart.js';



var ctx = document.getElementById('myChart-exercise');
let times = JSON.parse(ctx.dataset.times)
let days = JSON.parse(ctx.dataset.days)

console.log(times)
console.log(days)

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: days,
        datasets: [{
            label: '# of Votes',
            data: times,
            backgroundColor: [
                'rgba(255, 206, 86, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(255, 206, 86, 0.4)',

            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
          legend: {
            display: false,
            position: 'bottom',
          },
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false,
            position: 'bottom',
          },
        tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                var label = data.labels[tooltipItem.index];
                var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
                return label;
              }
            }
          }
    }
});
