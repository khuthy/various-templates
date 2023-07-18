<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<!-- Page Content -->
                <div class="content container-fluid">

                	<contactbreacrumb></contactbreacrumb>
					
					<contactpageheader></contactpageheader>
					
					<!-- Content Starts -->
					<div class="row">
						<div class="col-md-12">
							<div class="card mb-0">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-striped table-nowrap custom-table mb-0 datatable" id="contact">
											<thead>
												<tr>
													<th class="checkBox">
														<label class="container-checkbox">
														  	<input type="checkbox">
														  	<span class="checkmark"></span>
														</label>
													</th>
													<th>Full Name</th>
													<th>Title</th>
													<th>Phone</th>
													<th>Email</th>
													<th>Tag List</th>
													<th></th>
													<th class="text-end">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in contact" :key="item.id">
													<td class="checkBox">
														<label class="container-checkbox">
														  	<input type="checkbox">
														  	<span class="checkmark"></span>
														</label>
													</td>
													<td>
														<a href="javascript:void(0);" class="avatar"><img alt="" :src="loadImg(item.img)"></a>
														<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#system-user">{{item.name}}</a>
													</td>
													<td>{{item.title}}</td>
													<td>
														{{item.phone}}
													</td>
													<td>{{item.email}}	</td>
													<td><span class="badge badge-gradient-success">Sample_data</span></td>
						                            <td class="checkBox"><i class="fa fa-star" aria-hidden="true"></i></td>
						                            <td class="text-center">
														<div class="dropdown dropdown-action">
															<a href="javascript:void(0);" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
															<div class="dropdown-menu dropdown-menu-right">
																<a class="dropdown-item" href="#">Edit This Contact</a>
								                                <a class="dropdown-item" href="#">Change Contact Image</a>
								                                <a class="dropdown-item" href="#">Delete This Contact</a>
								                                <a class="dropdown-item" href="#">Clone This Contact</a>
								                                <a class="dropdown-item" href="#">Change Record Owner</a>
								                                <a class="dropdown-item" href="#">Generate Merge Document</a>
								                                <a class="dropdown-item" href="#">Change Contact To Lead</a>
								                                <a class="dropdown-item" href="#">Print This Contact</a>
								                                <a class="dropdown-item" href="#">Email This Contact</a>
								                                <a class="dropdown-item" href="#">Add New Task For Contact</a>
								                                <a class="dropdown-item" href="#">Add New Event For Contact</a>
								                                <a class="dropdown-item" href="#">Add Activity Set To Contact</a>
								                                <a class="dropdown-item" href="#">Add New Deal For Contact</a>
								                                <a class="dropdown-item" href="#">Add New Project For Contact</a>
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
    import contact from '../../assets/json/main/contact.json'
    import util from '../../assets/utils/util'
    const images = require.context('../../assets/img/profiles', false, /\.png$|\.jpg$/)
	export default {
		mounted() {
        util.datatable('#contact')
	},
    methods:{
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
    },
    data() {
        return {
            contact: contact
        }
    }
    }
</script>