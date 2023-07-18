<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

				<!-- Page Wrapper -->
                <div class="page-wrapper">
			
                    <!-- Page Content -->
                    <div class="content container-fluid">
    
                        <dealsbreadcrumb></dealsbreadcrumb>
                        
                        <dealspageheader></dealspageheader>
                        
                        <!-- Content Starts -->
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card mb-0">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-striped table-nowrap custom-table mb-0 datatable" id="deals">
                                                <thead>
                                                    <tr>
                                                        <th class="checkBox">
                                                            <label class="container-checkbox">
                                                                  <input type="checkbox">
                                                                  <span class="checkmark"></span>
                                                            </label>
                                                        </th>
                                                        <th>Deal Name</th>
                                                        <th>Company</th>
                                                        <th>Pipeline</th>
                                                        <th>Forecast Close Date</th>
                                                        <th>User Responsible</th>
                                                        <th>Deal Value</th>
                                                        <th></th>
                                                        <th class="text-end">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in deals" :key="item.id">
                                                        <td class="checkBox">
                                                            <label class="container-checkbox">
                                                                  <input type="checkbox">
                                                                  <span class="checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <a href="javascript:void(0);"><span class="person-circle-a person-circle">{{item.no}}</span></a>
                                                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deal-details">{{item.dealname}}</a>
                                                        </td>
                                                        <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#company-details">{{item.company}}</a></td>
                                                        <td>
                                                            <div class="pipeline-small flat ">
                                                                <a class="won noselect tipped-top" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="stage: Prospecting">
                                                                  <span class="stretched-link" data-bs-toggle="modal" data-bs-target="#deal-details"></span>
                                                                </a>
                                                                <a class="won noselect tipped-top planning" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="stage: Qualification">
                                                                  <span class="stretched-link" data-bs-toggle="modal" data-bs-target="#deal-details"></span>
                                                                </a>
                                                                <a class="won noselect tipped-top" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="stage: Needs Analysis">
                                                                  <span class="stretched-link" data-bs-toggle="modal" data-bs-target="#deal-details"></span>
                                                                </a>
                                                                <a class="won noselect tipped-top planning" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="stage: Proposal">
                                                                  <span class="stretched-link" data-bs-toggle="modal" data-bs-target="#deal-details"></span>
                                                                </a>
                                                                <a class="won noselect tipped-top" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="stage: Negotiation">
                                                                  <span class="stretched-link" data-bs-toggle="modal" data-bs-target="#deal-details"></span>
                                                                </a>
                                                                <a class="won noselect tipped-top" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="stage: Closed Won">
                                                                  <span class="stretched-link" data-bs-toggle="modal" data-bs-target="#deal-details"></span>
                                                                </a>
                                                            </div>
                                                        </td>
                                                        <td>{{item.forecastclosedate}}</td>
                                                        <td>{{item.userresponsible}}</td>
                                                        <td>{{item.dealvalue}}</td>
                                                        <td class="checkBox"><i class="fa fa-star" aria-hidden="true"></i></td>
                                                        <td class="text-center">
                                                            <div class="dropdown dropdown-action">
                                                                <a href="javascript:void(0);" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                                <div class="dropdown-menu dropdown-menu-right">
                                                                    <a class="dropdown-item" href="#">Edit This Deal</a>
                                                                    <a class="dropdown-item" href="#">Change Deal Image</a>
                                                                    <a class="dropdown-item" href="#">Clone This Deal</a>
                                                                    <a class="dropdown-item" href="#">Delete This Deal</a>
                                                                    <a class="dropdown-item" href="#">Change Record Owner</a>
                                                                    <a class="dropdown-item" href="#">Generate Merge Document</a>
                                                                    <a class="dropdown-item" href="#">Print This Deal</a>
                                                                    <a class="dropdown-item" href="#">Add New Task For Deal</a>
                                                                    <a class="dropdown-item" href="#">Add New Event For Deal</a>
                                                                    <a class="dropdown-item" href="#">Add Activity Set To Deal</a>
                                                                    <a class="dropdown-item" href="#">Convert To Deal</a>
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
    import deals from '../../assets/json/main/deals.json'
    import util from '../../assets/utils/util'
	export default {
		mounted() {
        util.datatable('#deals')
	},
    data() {
        return {
            deals: deals
        }
    }
    }
</script>