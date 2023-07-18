<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<!-- Page Header -->
					<basictable></basictable>
					<!-- /Page Header -->
					
					<div class="row">
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title mb-0">Basic Table</h4>
								</div>
								<basiccontenttable4></basiccontenttable4>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title mb-0">Striped Rows</h4>
								</div>
								<basiccont></basiccont>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title mb-0">Bordered Table</h4>
								</div>
								<basiccontenttable2></basiccontenttable2>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title mb-0">Hover Rows</h4>
								</div>
								<basiccontenttable3></basiccontenttable3>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title mb-0">Contextual Classes</h4>
								</div>
								<basiccontenttable10></basiccontenttable10>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title mb-0">Responsive Tables</h4>
								</div>
								<basiccontenttable5></basiccontenttable5>
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