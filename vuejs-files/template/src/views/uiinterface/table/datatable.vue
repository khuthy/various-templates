<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">

					<datatablepageheader></datatablepageheader>
					
					<div class="row">
						<div class="col-sm-12">
							<div class="card mb-0">
								<div class="card-header">
									<h4 class="card-title mb-0">Default Datatable</h4>
									<p class="card-text py-3">
										This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code> class to initialize datatables.
									</p>
								</div>
								<div class="card-body">

									<div class="table-responsive">
										<table class="datatable table table-stripped mb-0 datatables" id="datatable">
											<thead>
												<tr>
													<th>Name</th>
													<th>Position</th>
													<th>Office</th>
													<th>Age</th>
													<th>Salary</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in datatable" :key="item.id">
													<td>{{item.name}}</td>
													<td>{{item.position}}</td>
													<td>{{item.office}}</td>
													<td>{{item.age}}</td>
													<td>{{item.salary}}</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
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
    import datatable from '../../../assets/json/uiinterface/table/datatable.json'
    import util from '../../../assets/utils/util'
	export default {
		mounted() {
        util.datatable('#datatable')
	},
    data() {
        return {
            datatable: datatable
        }
    }
    }
</script>