<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<!-- Page Header -->
					<validation></validation>
					<!-- /Page Header -->
					
					<!-- Row -->
					<div class="row">
						<div class="col-sm-12">
						
							<!-- Custom Boostrap Validation -->
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Custom Bootstrap Form Validation</h5>
									<p class="card-text pt-3">For custom Bootstrap form validation messages, you’ll need to add the <code>novalidate</code> boolean attribute to your form. For server side validation <a class="py-3" href="https://getbootstrap.com/docs/4.1/components/forms/#server-side" target="_blank">read full documentation</a>.</p>
								</div>
								<validationcontent></validationcontent>
							</div>
							<!-- /Custom Boostrap Validation -->
							
							<!-- Default Browser Validation -->
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Browser Defaults</h5>
									<p class="card-text py-3">Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below.</p>
								</div>
								<validationcontent1></validationcontent1>
							</div>
							<!-- /Default Browser Validation -->

							<!-- Server Side Validation -->
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Server Side</h5>
									<p class="card-text py-3">We recommend using client side validation, but in case you require server side, you can indicate invalid and valid form fields with <code>.is-invalid</code> and <code>.is-valid</code>. Note that <code>.invalid-feedback</code> is also supported with these classes.</p>
								</div>
								<validationcontent2></validationcontent2>
							</div>
							<!-- /Server Side Validation -->
							
							<!-- Supported Elements -->
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Supported Elements</h5>
									<p class="card-text">Form validation styles are also available for bootstrap custom form controls.</p>
								</div>
								<validationcontent3></validationcontent3>
							</div>
							<!-- /Supported Elements -->
							
							<!-- Validation Tooltips -->
							<div class="card mb-0">
								<div class="card-header">
									<h5 class="card-title mb-0">Tooltips</h5>
									<p class="card-text">You can swap the <code>.{valid|invalid}-feedback</code> classes for <code>.{valid|invalid}-tooltip</code> classes to display validation feedback in a styled tooltip.</p>
								</div>
								<validationcontent4></validationcontent4>
							</div>
							<!-- /Validation Tooltips -->
							
						</div>
					</div>
					<!-- /Row -->
				
				</div>			
			</div>
			<!-- /Page Wrapper -->

		</diV>

        <modal></modal>

        <themesetting></themesetting>

	</div>

</template>

<script>
	export default {
		mounted() {
	},
    data() {
        return {
        }
    }
    }
</script>