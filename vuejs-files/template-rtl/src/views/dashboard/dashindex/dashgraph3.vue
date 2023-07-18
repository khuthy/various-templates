<template>
<div class="col-md-6 mb-0">
							<div class="card h-100">
								<div class="card-body">
									<h3 class="card-title">Sales Statistics</h3>
									<canvas id="bar-chart-grouped" width="800" height="450"></canvas>
								</div>
							</div>
						</div>
						<div class="col-md-6 mb-0">
							<div class="card h-100">
								<div class="card-body">
									<h3 class="card-title">Completed Tasks</h3>
									<canvas id="mixed-chart" width="800" height="450"></canvas>
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
    data() {
    return {
    }
    }
    }
</script>