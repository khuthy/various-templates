<template>
<div class="row graphs">
						<div class="col-md-6">
							<div class="card h-100">
								<div class="card-body">
			                    	<h3 class="card-title">Sales Overview</h3>
									<div id="line-charts"></div>
			                	</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="card h-100">
								<div class="card-body">
									<h3 class="card-title">Completed Tasks</h3>
										<canvas id="mixed-chart" width="800" height="450"></canvas>
								</div>
							</div>
						</div>
					</div>
</template>
<script>
    import VueApexCharts from "vue3-apexcharts";
	export default {
    components: {
    apexchart: VueApexCharts,
    },
	mounted() {
        $(document).ready(function () {
        lineCharts();

    $(window).resize(function () {
          window.lineCharts.redraw();
        });
      });
        function lineCharts() {
        window.lineCharts = Morris.Line({
        element: 'line-charts',
		data: [
			{ y: '2006', a: 50, b: 90 },
			{ y: '2007', a: 75,  b: 65 },
			{ y: '2008', a: 50,  b: 40 },
			{ y: '2009', a: 75,  b: 65 },
			{ y: '2010', a: 50,  b: 40 },
			{ y: '2011', a: 75,  b: 65 },
			{ y: '2012', a: 100, b: 50 }
		],
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['Total Sales', 'Total Revenue'],
		lineColors: ['#9a55ff','#da8cff'],
		lineWidth: '3px',
		resize: true,
		redraw: true
        });
      }
       new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
      labels: ["Task 1", "Task 2", "Task 3", "Task 4"],
      datasets: [{
          label: "Completed",
          type: "line",
          borderColor: "#8e5ea2",
          data: [408,547,675,734],
          fill: false
        }, {
          label: "In progress",
          type: "line",
          borderColor: "#fe7096",
          data: [133,221,783,2478],
          fill: false
        }, {
          label: "completed",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          data: [408,547,675,734],
        }, {
          label: "Started",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          backgroundColorHover: "#fe7096",
          data: [133,221,783,2478]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: ''
      },
      legend: { display: false }
    }
});
	},
    }
</script>