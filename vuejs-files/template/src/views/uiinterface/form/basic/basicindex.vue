<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
                <div class="content container-fluid">
				
					<!-- Page Header -->
					<basicinput></basicinput>
					<!-- /Page Header -->
					
					<div class="row">
						<div class="col-lg-12">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title mb-0">Basic Inputs</h4>
								</div>
								
								<basiccontent></basiccontent>
							</div>
							<div class="card mb-0">
								<div class="card-header">
									<h4 class="card-title mb-0">Input Sizes</h4>
								</div>
								<basiccontent1></basiccontent1>
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