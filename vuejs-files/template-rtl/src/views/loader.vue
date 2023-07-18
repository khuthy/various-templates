<template>
    <!-- Loader -->
		<div id="loader-wrapper">	
			<div class="loader">
			  <div class="dot"></div>
			  <div class="dot"></div>
			  <div class="dot"></div>
			  <div class="dot"></div>
			  <div class="dot"></div>
			</div>
		</div>
</template>
<script>
export default {
    name: 'App',
	beforeCreate() {
        $(window).on('load', function () {
        $('#loader').delay(100).fadeOut('slow');
        $('#loader-wrapper').delay(500).fadeOut('slow');
        $('body').delay(500).css({'overflow': 'visible'});
    });
	},
}
</script>
