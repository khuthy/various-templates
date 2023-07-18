<template>
<div class="col-md-6"> 
							<div class="card h-100">
			                    <div class="card-body">
			                      <h3 class="card-title">Yearly Projects</h3>
			                      <canvas id="bar-chart" width="800" height="550"></canvas>
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
</template>
<script>
	export default {
	mounted() {
        new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["2006", "2010", "2011", "2012", "2018"],
      datasets: [
        {
          label: "Projects",
          backgroundColor: ["#fe7096", "#9a55ff","#fe7096","#e8c3b9","#9a55ff"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Projects Yearly Sales'
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