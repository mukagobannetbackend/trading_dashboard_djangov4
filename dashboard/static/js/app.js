const ctx = document.getElementById('chart');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr'],
        datasets: [{
            label: 'Equity',
            data: [9000,10000,11000,12000],
        }]
    }
});
