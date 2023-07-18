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
        $(document).ready(function () {
        lineCharts();
        barCharts();

    $(window).resize(function () {
          window.lineCharts.redraw();
          window.barCharts.redraw();
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
    }
</script>