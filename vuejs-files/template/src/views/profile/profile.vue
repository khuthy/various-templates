<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

				<!-- Page Wrapper -->
                <div class="page-wrapper">
			
                    <!-- Page Content -->
                    <div class="content container-fluid">
    
                        <profilebreadcrumb></profilebreadcrumb>
                        
                        <!-- Page Header -->
                        <div class="page-header pt-3 mb-0">
                        <profilecontent></profilecontent>
                        <div class="tab-content p-0">
                        
                            <!-- Profile Info Tab -->
                            <div id="emp_profile" class="pro-overview tab-pane fade show active">
                                
                                <profilecontent1></profilecontent1>

                                <profilecontent2></profilecontent2>

                                <profilecontent3></profilecontent3>

                            </div>
                            <!-- /Profile Info Tab -->

                        </div>

                        </div>
                        <!-- /Page Header -->   
                        
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