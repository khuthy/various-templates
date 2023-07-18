<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<!-- Page Content -->
                <div class="content container-fluid">

                <companiesbreadcrumb></companiesbreadcrumb>
					
					<companiespageheader></companiespageheader>
					
					<!-- Content Starts -->
					<div class="row">
						<div class="col-md-12">
							<div class="card mb-0">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-striped table-nowrap custom-table mb-0 datatable" id="companies">
											<thead>
												<tr>
													<th class="checkBox">
														<label class="container-checkbox">
														  	<input type="checkbox">
														  	<span class="checkmark"></span>
														</label>
													</th>
													<th>Company</th>
													<th>Phone</th>
													<th>Billing Street</th>
													<th>Billing City</th>
													<th>Billing State</th>
													<th>Billing Country</th>
													<th></th>
													<th class="text-end">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in companies" :key="item.id">
													<td class="checkBox">
														<label class="container-checkbox">
														  	<input type="checkbox">
														  	<span class="checkmark"></span>
														</label>
													</td>
													<td>
														<a href="javascript:void(0);" class="avatar"><img alt="" :src="loadImg(item.img)"></a>
														<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#company-details">{{item.company}}</a>
													</td>
													<td>{{item.phone}}</td>
													<td>
                                                        {{item.billingstreet}}	
													</td>
													<td>{{item.billingcity}}</td>
													<td>{{item.billingstate}}</td>
													<td>{{item.billingcountry}}</td>
						                            <td class="checkBox"><i class="fa fa-star" aria-hidden="true"></i></td>
						                            <td class="text-center">
														<div class="dropdown dropdown-action">
															<a href="javascript:void(0);" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
															<div class="dropdown-menu dropdown-menu-right">
																<a class="dropdown-item" href="#">Edit This Company</a>
								                                <a class="dropdown-item" href="#">Change Organization Image</a>
								                                <a class="dropdown-item" href="#">Delete This Organization</a>
								                                <a class="dropdown-item" href="#">Change Record Owner</a>
								                                <a class="dropdown-item" href="#">Generate Merge Document</a>
								                                <a class="dropdown-item" href="#">Print This Organization</a>
								                                <a class="dropdown-item" href="#">Add New Task For Organization</a>
								                                <a class="dropdown-item" href="#">Add New Event For Organization</a>
								                                <a class="dropdown-item" href="#">Add Activity Set To Organization</a>
								                                <a class="dropdown-item" href="#">Add New Contact For Organization</a>
								                                <a class="dropdown-item" href="#">Add New Opportunity For Organization</a>
								                                <a class="dropdown-item" href="#">Add New Opportunity For Organization</a>
								                                <a class="dropdown-item" href="#">Add New Project For Organization</a>
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
    import companies from '../../assets/json/main/companies.json'
    import util from '../../assets/utils/util'
    const images = require.context('../../assets/img', false, /\.png$|\.jpg$/)
	export default {
		mounted() {
        util.datatable('#companies')
	},
    methods:{
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
    },
    data() {
        return {
            companies: companies
        }
    }
    }
</script>