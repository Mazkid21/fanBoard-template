// Load google charts
google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Sales', 'Hours per Day'],
    ['Denver', 8],
    ['Chicago', 2],
    ['Dayton', 4],
    ['Fort Worth', 2],
    ['San Antonio', 8]
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    'title': 'Sales by City',
    'width': 550,
    'height': 400
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
