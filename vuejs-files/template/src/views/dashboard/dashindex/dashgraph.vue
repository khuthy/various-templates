<template>
<div class="col-md-6">
							<div class="card h-100">
			                  <div class="card-body">
			                  	<h3 class="card-title">Total Lead</h3>
			                     <canvas id="pie-chart" width="800" height="450"></canvas>
			                  </div>
			                </div>
						</div>
						<div class="col-md-6">
							<div class="card h-100">
			                    <div class="card-body">
			                    	<h3 class="card-title">Products Yearly Sales</h3>
			                      <canvas id="bar-chart-horizontal" width="800" height="450"></canvas>
			                    </div>
			                </div>
						</div>
</template>
<script>
	export default {
	mounted() {
    new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Asia", "Europe"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: [ "#9a55ff","#fe7096"],
        data: [2478,5267]
      }]
    },
    options: {
      title: {
        display: true,
        text: ''
      }
    }
   });
   /*horixzontal bar chart*/
   new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["2000", "2010", "2011", "2015", "2020"],
      datasets: [
        {
          label: "Products",
          backgroundColor: ["#fe7096", "#9a55ff","#3cba9f","#e8c3b9","#9a55ff"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: ''
      }
    }
   });
	},
    data() {
        return {
        }
    }
    }
</script>