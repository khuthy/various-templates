<template>

	<div id="skin-color whilet-theme" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<!-- Page Content -->
                <div class="content container-fluid">

                	<activitybreadcrumb></activitybreadcrumb>

                	<activitypageheader></activitypageheader>

					<!-- Content Starts -->
					<div class="row">
						<div class="col-md-12">
							<div class="card mb-0">
								<div class="card-body">
									<div class="table-responsive activity-tables">
										<table class="table table-striped table-nowrap custom-table mb-0 datatable" id="activities">
											<thead>
												<tr>
													<th class="checkBox">Done</th>
													<th>Subject</th>
													<th>Deal</th>
													<th>Contact Person</th>
													<th>Email</th>
													<th>Phone</th>
													<th>Companies</th>
													<th class="text-left">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in activities" :key="item.id">
													<td>
														<label class="container-checkbox">
													  		<input type="checkbox">
													  		<span class="checkmark"></span>
														</label>
													</td>
													<td><a a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_activity">{{item.subject}}</a></td>
													<td><a a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#company-details">{{item.Deal}}</a></td>
													<td>{{item.contactperson}}</td>
													<td>{{item.email}}</td>
													<td>{{item.phone}}</td>
													<td><a a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#company-details">{{item.companies}}</a></td>
													
													<td>
														<div class="dropdown dropdown-action text-center">
															<a a href="javascript:void(0);" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
															<div class="dropdown-menu dropdown-menu-right h-100">
																<a class="dropdown-item" a href="javascript:void(0);">Edit</a>
								                               
															</div>
														</div>
													</td>
						                            
												</tr>
											</tbody>
										</table>
									</div>
								</div>
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

<script>
    import activities from '../../assets/json/main/activities.json'
    import util from '../../assets/utils/util'
	export default {
		mounted() {
        util.datatable('#activities')
	},
    data() {
        return {
            activities: activities
        }
    }
    }
</script>