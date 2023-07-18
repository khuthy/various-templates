<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

				<!-- Page Wrapper -->
                <div class="page-wrapper">
			
                    <!-- Page Content -->
                    <div class="content container-fluid">
    
                        <generalsetting></generalsetting>
    
                        <settingsidebar></settingsidebar>
                        
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title">Website Basic Details</h5>
                                    </div>
                                    <generalbasic></generalbasic>
                                </div>
                            </div>
    
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title">Address Details</h5>
                                    </div>
                                    <generaladdress></generaladdress>
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