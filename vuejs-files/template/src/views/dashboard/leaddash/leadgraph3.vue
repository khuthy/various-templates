<template>
<div class="row graphs">
                            <div class="col-md-6 mb-0"> 
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h3 class="card-title">Yearly Projects</h3>
                                      <canvas id="bar-chart" width="800" height="550"></canvas>
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