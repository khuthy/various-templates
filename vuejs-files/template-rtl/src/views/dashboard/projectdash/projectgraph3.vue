<template>
<div class="row graphs">
						<div class="col-md-6 mb-0"> 
							<div class="card h-100">
			                  <div class="card-body">
			                  	<h3 class="card-title">Total Lead</h3>
			                     <canvas id="pie-chart" width="800" height="450"></canvas>
			                  </div>
			                </div>
							
						</div>
						<div class="col-md-6 mb-0">
							
							<div class="card h-100 mb-0">
			                    <div class="card-body">
			                    	<h3 class="card-title">Total Sales</h3>
                                    <apexchart
                                    type="line"
                                    :options="chartOptions"
                                    :series="series"
                                  ></apexchart>
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
	},
    data: function() {
    return {

    chartOptions: {
           
         chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            colors: ["#9a55ff"],
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Product Trends by Month',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
     
          },
     series: [{
              name: "Product",
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          }],
        }
      }
    }
</script>