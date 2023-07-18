<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<!-- Page Content -->
                <div class="content container-fluid">

                	<taxsetting></taxsetting>

					<div class="row mt-4">
						
                        <banksidebar></banksidebar>
						
						<div class="col-xl-9 col-md-8">
							<div class="card invoices-settings-card">
								<div class="card-header px-3">
									<h5 class="card-title">Tax Settings</h5>
								</div>
								<taxcontent></taxcontent>
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