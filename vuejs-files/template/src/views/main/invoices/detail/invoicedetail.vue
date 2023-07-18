<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<!-- Page Content -->
                <div class="content container-fluid">

                	<div class="row justify-content-center">
						<div class="col-xl-10">
							<div class="card invoice-info-card">
								<div class="card-body">

									<detail1></detail1>
									
									<!-- Invoice Item -->
									<div class="invoice-issues-box">
										<div class="row">
											<div class="col-lg-4 col-md-4">
												<div class="invoice-issues-date">
													<p>Issue Date : 27 Jul 2022</p>
												</div>
											</div>
											<div class="col-lg-4 col-md-4">
												<div class="invoice-issues-date">
													<p>Due Date : 27 Aug 2022</p>
												</div>
											</div>
											<div class="col-lg-4 col-md-4">
												<div class="invoice-issues-date">
													<p>Due Amount : ₹ 1,54,22 </p>
												</div>
											</div>
										</div>
									</div>
									<!-- /Invoice Item -->

									<!-- Invoice Item -->
									<invoicetable></invoicetable>
									<!-- /Invoice Item -->

									<detail2></detail2>

								</div>
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