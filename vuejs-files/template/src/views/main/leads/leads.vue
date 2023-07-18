<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<!-- Page Content -->
                <div class="content container-fluid">

                	<leadbreadcrumb></leadbreadcrumb>
					
					<!-- Page Header -->
					<leadheader></leadheader>
					<!-- /Page Header -->
					
					<!-- Content Starts -->
					<div class="row">
						<div class="col-md-12">
							<div class="card mb-0">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-striped table-nowrap custom-table mb-0 datatable" id="leads">
											<thead>
												<tr>
													<th>
														<label class="container-checkbox">
														  	<input type="checkbox">
														  	<span class="checkmark"></span>
														</label>
													</th>
													<th>Full Name</th>
													<th>Title</th>
													<th>Company</th>
													<th>Phone</th>
													<th>Email Address</th>
													<th>Lead Status</th>
													<th>Lead Created</th>
													<th>Lead Owner</th>
													<th></th>
													<th class="text-end">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in leads" :key="item.id">
													<td class="checkBox">
														<label class="container-checkbox">
														  	<input type="checkbox">
														  	<span class="checkmark"></span>
														</label>
													</td>
													<td>
														<a href="javascript:void(0);"><span class="person-circle-a person-circle">{{item.no}}</span></a>
														<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#leads-details">{{item.dealname}}</a>
													</td>
													<td>{{item.company}}</td>
													<td>
                                                        {{item.name1}}		
													</td>
													<td>{{item.no1}}</td>
													<td>{{item.email}}</td>
													<td>{{item.status}}	</td>
													<td>{{item.date}}</td>
													<td>{{item.name2}}</td>
						                            <td class="checkBox"><i class="fa fa-star" aria-hidden="true"></i></td>
						                            <td class="text-center">
														<div class="dropdown dropdown-action">
															<a href="javascript:void(0);" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
															<div class="dropdown-menu dropdown-menu-right">
																<a class="dropdown-item" href="#">Edit This Lead</a>
								                                <a class="dropdown-item" href="#">Change Lead Image</a>
								                                <a class="dropdown-item" href="#">Delete This Lead</a>
								                                <a class="dropdown-item" href="#">Email This Lead</a>
								                                <a class="dropdown-item" href="#">Clone This Lead</a>
								                                <a class="dropdown-item" href="#">Change Record Owner</a>
								                                <a class="dropdown-item" href="#">Generate Merge Document</a>
								                                <a class="dropdown-item" href="#">Change Lead to Contact</a>
								                                <a class="dropdown-item" href="#">Convert Lead</a>
								                                <a class="dropdown-item" href="#">Print This Lead</a>
								                                <a class="dropdown-item" href="#">Merge Into Lead</a>
								                                <a class="dropdown-item" href="#">SmartMerge Lead</a>
								                                <a class="dropdown-item" href="#">Add Activity Set To Lead</a>
								                                <a class="dropdown-item" href="#">Add New Event For Lead</a>
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
    import leads from '../../../assets/json/main/leads.json'
    import util from '../../../assets/utils/util'
	export default {
		mounted() {
        util.datatable('#leads')
	},
    data() {
        return {
            leads: leads
        }
    }
    }
</script>