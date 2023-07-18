<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<!-- Page Content -->
                <div class="content container-fluid">

                	<task></task>
					
					<!-- Page Header -->
					<taskheader></taskheader>
					<!-- /Page Header -->


					<!-- Content Starts -->
					<div class="row">
						<div class="col-md-12">
							<div class="card mb-0">
								<div class="card-body">
								<div class="table-responsive">
									<table class="table table-striped table-nowrap custom-table mb-0 datatable" id="task">
										<thead>
											<tr>
												<th class="checkBox">
													<label class="container-checkbox">
													  	<input type="checkbox">
													  	<span class="checkmark"></span>
													</label>
												</th>
												<th>Task Name</th>
												<th>Percent Complete Indicator</th>
												<th>Responsible User</th>
												<th>Due Date</th>
												<th>Task Owner</th>
												<th>Status</th>
												<th></th>
												<th></th>
												<th class="text-end">Actions</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="item in task" :key="item.id">
												<td class="checkBox">
													<label class="container-checkbox">
													  <input type="checkbox">
													  <span class="checkmark"></span>
													</label>
												</td>
												<td>
													<a href="javascript:void(0);" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#task-details-modal">{{item.name}}</a>
												</td>
												<td>
													<div class="progress">
						                                <div class="progress-bar bg-gradient-danger" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
						                            </div>
												</td>
												<td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#system-user">{{item.company}}</a></td>
												<td>{{item.date}}</td>
												<td>{{item.company1}}</td>
												<td><label class="badge badge-gradient-danger">{{item.status}}</label></td>
												<td>
					                              <label class="container-checkbox">
													  	<input type="checkbox">
													  	<span class="checkmark"></span>
													</label>
					                            </td>
					                            <td class="checkBox"><i class="fa fa-star" aria-hidden="true"></i></td>
					                            <td class="text-center">
													<div class="dropdown dropdown-action">
														<a href="javascript:void(0);" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
														<div class="dropdown-menu dropdown-menu-right">
															<a class="dropdown-item" href="#">Edit this task</a>
							                                <a class="dropdown-item" href="#">Complete This Task</a>
							                                <a class="dropdown-item" href="#">Complete Task &amp; Clone</a>
							                                <a class="dropdown-item" href="#">Change Record Owner</a>
							                                <a class="dropdown-item" href="#">Delete This Tasks</a>
							                                <a class="dropdown-item" href="#">Clone This Tasks</a>
							                                <a class="dropdown-item" href="#">Print This Tasks</a>
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
    import task from '../../assets/json/main/task.json'
    import util from '../../assets/utils/util'
	export default {
		mounted() {
        util.datatable('#task')
	},
    data() {
        return {
            task: task
        }
    }
    }
</script>