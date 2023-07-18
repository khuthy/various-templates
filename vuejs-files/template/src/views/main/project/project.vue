<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

				<!-- Page Wrapper -->
                <div class="page-wrapper">
			
                    <!-- Page Content -->
                    <div class="content container-fluid">
    
                        <projects></projects>
                        
                        <!-- Page Header -->
                        <projectheader></projectheader>
                        <!-- /Page Header -->
                        
                        <!-- Content Starts -->
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card mb-0">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-striped table-nowrap custom-table mb-0 datatable" id="project">
                                                <thead>
                                                    <tr>
                                                        <th class="checkBox">
                                                            <label class="container-checkbox">
                                                                  <input type="checkbox">
                                                                  <span class="checkmark"></span>
                                                            </label>
                                                        </th>
                                                        <th>Project Name</th>
                                                        <th>Project Status</th>
                                                        <th>User Responsible</th>
                                                        <th>Project category</th>
                                                        <th>Pipeline</th>
                                                        <th>Project Created</th>
                                                        <th></th>
                                                        <th class="text-end">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in project" :key="item.id">
                                                        <td class="checkBox">
                                                            <label class="container-checkbox">
                                                                  <input type="checkbox">
                                                                  <span class="checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <a href="javascript:void(0);"><span class="person-circle-a person-circle">{{item.no}}</span></a>
                                                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#project-details">{{item.name}} </a>
                                                        </td>
                                                        <td>{{item.status}}</td>
                                                        
                                                        <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#system-user">{{item.name1}}</a></td>
                                                        <td>{{item.call}}</td>
                                                        <td>
                                                            <div class="pipeline-small flat pipeline-project">
                                                                <a class="won noselect tipped-top planing" data-bs-toggle="tooltip" data-bsplacement="top" title="" data-bsoriginal-title="Pipeline: Deal Pipeline, stage: plan">&nbsp;
                                                                  <span class="stretched-link" data-bs-toggle="modal" data-bs-target="#project-details"></span>
                                                                </a>
                                                                <a class="won noselect tipped-top planing" data-bs-toggle="tooltip" data-bsplacement="top" title="" data-bsoriginal-title="Pipeline: Deal Pipeline, stage: plan">
                                                                  <span class="stretched-link" data-bs-toggle="modal" data-bs-target="#project-details"></span>
                                                                </a>
                                                                <a class="won noselect tipped-top" data-bs-toggle="tooltip" data-bsplacement="top" title="" data-bsoriginal-title="Pipeline: Deal Pipeline">
                                                                  <span class="stretched-link" data-bs-toggle="modal" data-bs-target="#project-details"></span>
                                                                </a>
                                                                <a class="won noselect tipped-top" data-bs-toggle="tooltip" data-bsplacement="top" title="" data-bsoriginal-title="Pipeline: Deal Pipeline">
                                                                  <span class="stretched-link" data-bs-toggle="modal" data-bs-target="#project-details"></span>
                                                                </a>
                                                              </div>
                                                        </td>
                                                        
                                                        <td>{{item.date}}	</td>
                                                        <td class="checkBox"><i class="fa fa-star" aria-hidden="true"></i></td>
                                                        <td class="text-center">
                                                            <div class="dropdown dropdown-action">
                                                                <a href="javascript:void(0);" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                                <div class="dropdown-menu dropdown-menu-right">
                                                                    <a class="dropdown-item" href="#">Edit This Project</a>
                                                                    <a class="dropdown-item" href="#">Change Project Image</a>
                                                                    <a class="dropdown-item" href="#">Clone This Project</a>
                                                                    <a class="dropdown-item" href="#">Delete This Project</a>
                                                                    <a class="dropdown-item" href="#">Change Record Owner</a>
                                                                    <a class="dropdown-item" href="#">Generate Merge Document</a>
                                                                    <a class="dropdown-item" href="#">Print This Project</a>
                                                                    <a class="dropdown-item" href="#">Add New Task For Project</a>
                                                                    <a class="dropdown-item" href="#">Add New Event For Project</a>
                                                                    <a class="dropdown-item" href="#">Add Activity Set To Project</a>
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
    import project from '../../../assets/json/main/project.json'
    import util from '../../../assets/utils/util'
	export default {
		mounted() {
        util.datatable('#project')
	},
    data() {
        return {
            project: project
        }
    }
    }
</script>