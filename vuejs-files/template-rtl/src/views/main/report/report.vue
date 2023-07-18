<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<!-- Page Content -->
                <div class="content container-fluid">

                	<reportbreadcrumb></reportbreadcrumb>
					
					<!-- Page Header -->
					<reportpageheader></reportpageheader>
					<!-- /Page Header -->
					
					<!-- Content Starts -->
					<div class="row m-0">
						<div class="col-md-12 p-0">
			              	<div class="card">
			              		<div class="card-body">
			                		<p class="m-0">Welcome to Advanced Reporting! Need help? Check out our <a href="javascript:void(0);">articles</a> or watch the <a href="javascript:void(0);">video</a>.</p>
			                	</div>
			              	</div>
			            </div>
					</div>
					<div class="row all-reports m-0">

		                <reportsidebar></reportsidebar>

		                <div class="col-md-8 pe-0 Reports">
		                  <div class="tab-content pt-0">

		                    <personalreport></personalreport>

                            <sharedreport></sharedreport>

		                    <allreport></allreport>

		                    <taskreport></taskreport>

		                    <contactreport></contactreport>

		                    <companyreport></companyreport>

		                    <leadreport></leadreport>

		                    <dealreport></dealreport>

		                    <projectreport></projectreport>
		                    
                            <otherreport></otherreport>

		                  </div>
		                </div>
		              </div>
					<!-- /Content End -->
					
                </div>
				<!-- /Page Content -->
				
            </div>
			<!-- /Page Wrapper -->

		</diV>

        <modal></modal>

        <themesetting></themesetting>

	</div>

</template>
