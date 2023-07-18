<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<!-- Page Header -->
					<horizontal></horizontal>
					<!-- /Page Header -->
					
					<div class="row formverticalcontent">
						<horizontalcontent></horizontalcontent>
					</div>
					<div class="row formverticalcontent">
						<horizontalcontent1></horizontalcontent1>
					</div>
					<div class="row formverticalcontent">
						<div class="col-md-12">
							<div class="card mb-0">
								<div class="card-header">
									<h4 class="card-title mb-0">Two Column Horizontal Form</h4>
								</div>
								<horizontalcontent2></horizontalcontent2>
							</div>
						</div>
					</div>
				
				</div>			
			</div>
			<!-- /Main Wrapper -->

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