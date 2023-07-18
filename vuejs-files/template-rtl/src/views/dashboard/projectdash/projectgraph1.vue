<template>
<div class="row graphs">
						<div class="col-md-6">
							<div class="card h-100">
								<div class="card-body">
									<h3 class="card-title">Sales Statistics</h3>
									<canvas id="bar-chart-grouped" width="800" height="450"></canvas>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="card h-100">
								<div class="card-body">
			                    	<h3 class="card-title">Total Revenue</h3>
									<div id="bar-charts"></div>
			                	</div>
							</div>
						</div>

						
					</div>
</template>
<script>
	export default {
	mounted() {
    new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["0", "100", "150", "200"],
      datasets: [
        {
          label: "Total Cost",
          backgroundColor: "#fe7096",
          data: [133,221,783,2478]
        }, {
          label: "Total Revenue",
          backgroundColor: "#9a55ff",
          data: [408,547,675,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: ''
      }
    }
    });
     $(document).ready(function () {
        barCharts();
    $(window).resize(function () {
          window.barCharts.redraw();
        });
      });
    function barCharts() {
        window.barCharts = Morris.Bar({
        element: 'bar-charts',
		data: [
			{ y: '2006', a: 100, b: 90 },
			{ y: '2007', a: 75,  b: 65 },
			{ y: '2008', a: 50,  b: 40 },
			{ y: '2009', a: 75,  b: 65 },
			{ y: '2010', a: 50,  b: 40 },
			{ y: '2011', a: 75,  b: 65 },
			{ y: '2012', a: 100, b: 90 }
		],
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['Total Income', 'Total Outcome'],
		lineColors: ['#9a55ff','#da8cff'],
		lineWidth: '3px',
		barColors: ['#9a55ff','#da8cff'],
		resize: true,
		redraw: true
        });
      }
	},
    data() {
    return {
    }
    }
    }
</script>