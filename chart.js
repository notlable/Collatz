btnChart.addEventListener('click', () => {

    new Chart(document.getElementById('myChart'), {
        type: 'line',
        data: {
            labels: arrayLabels,
            datasets: [
                {
                    label: 'Collatz chart',
                    backgroundColor: ['red', 'blue'],
                    data: arrayPush,

                }
            ],

        },
        options: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Stopien',
                fontColor: '#111',
                fontSize: 20,
                padding: 20,
            }
        }
    });
});