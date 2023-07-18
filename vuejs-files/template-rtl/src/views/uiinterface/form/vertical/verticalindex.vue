<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<div class="content container-fluid">

					<!-- Page Header -->
					<vertical></vertical>
					<!-- /Page Header -->

					<div class="row">
						<div class="col-md-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title mb-0">Basic Form</h4>
								</div>
								<verticalcontent></verticalcontent>
							</div>
						</div>
						<div class="col-md-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title mb-0">Address Form</h4>
								</div>
								<verticalcontent1></verticalcontent1>
							</div>
						</div>
					</div>
					
					<div class="row formverticalcontent">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title mb-0">Two Column Vertical Form</h4>
								</div>
								<verticalcontent2></verticalcontent2>
							</div>
						</div>
					</div>
					
					<div class="row formverticalcontent">
						<div class="col-md-12">
							<div class="card mb-0">
								<div class="card-header">
									<h4 class="card-title mb-0">Two Column Vertical Form</h4>
								</div>
								<verticalcontent3></verticalcontent3>
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