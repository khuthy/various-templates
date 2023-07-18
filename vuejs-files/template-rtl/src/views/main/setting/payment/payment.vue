<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<!-- Page Content -->
                <div class="content container-fluid">

                	<paymentbreadcrumb></paymentbreadcrumb>

					<settingsidebar></settingsidebar>
					
					<div class="row">
						<div class="col-md-6">
							<div class="card">
								<div class="card-header d-flex justify-content-between align-items-center">
									<h5 class="card-title">Paypal</h5>
									<div class="status-toggle d-flex justify-content-between align-items-center">
										<input type="checkbox" id="status_1" class="check">
										<label for="status_1" class="checktoggle">checkbox</label>
									</div>
								</div>
								<paymentcontent></paymentcontent>
							</div>
						</div>
						<div class="col-md-6">
							<div class="card">
								<div class="card-header d-flex justify-content-between align-items-center">
									<h5 class="card-title">Stripe</h5>
									<div class="status-toggle d-flex justify-content-between align-items-center">
										<input type="checkbox" id="status_2" class="check" checked="">
										<label for="status_2" class="checktoggle">checkbox</label>
									</div>
								</div>
								<paymentcontent1></paymentcontent1>
							</div>
						</div>
					</div>
                </div>
				<!-- /Page Content -->
				
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