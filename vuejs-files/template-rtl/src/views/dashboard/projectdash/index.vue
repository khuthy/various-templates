<template>

	<div id="skin-color" class="skin-color inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">

					<!-- Page Header -->
					<projectdashbreadcrumb></projectdashbreadcrumb>
                	
					<!-- /Page Header -->

					<projectgraph></projectgraph>

                    <projectgraph1></projectgraph1>
					
					<projectgraph2></projectgraph2>
					
					<projectgraph3></projectgraph3>
					
					
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