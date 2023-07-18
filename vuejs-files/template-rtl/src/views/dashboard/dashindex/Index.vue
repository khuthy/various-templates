<template>

	<div>

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">

					<!-- Page Header -->
					<dashindex></dashindex>
					<!-- /Page Header -->

					<div class="row graphs">
						<dashgraph></dashgraph>
					</div>
					<div class="row graphs">
						<dashgraph1></dashgraph1>
					</div>
					<div class="row graphs">
						<dashgraph2></dashgraph2>
					</div>
					<div class="row graphs">
						<dashgraph3></dashgraph3>
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