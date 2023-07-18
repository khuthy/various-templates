<template>
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
			                    <h3 class="card-title">Total Sales</h3>
                                <apexchart
                                type="line"
                                :options="chartOptions"
                                :series="series"
                              ></apexchart>
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