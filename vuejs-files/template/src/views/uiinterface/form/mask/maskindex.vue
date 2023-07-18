<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<!-- Page Header -->
					<maskbreadcrumb></maskbreadcrumb>
					<!-- /Page Header -->
					
					<div class="row">
						<div class="col-sm-12">
							<div class="card mb-0">
								<div class="card-header">
									<h4 class="card-title mb-0">Form Mask</h4>
									<p class="card-text py-3">Input masks can be used to force the user to enter data conform a specific format. Unlike validation, the user can't enter any other key than the ones specified by the mask.</p>
								</div>
								<maskcontent></maskcontent>
							</div>
						</div>
					</div>
				
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