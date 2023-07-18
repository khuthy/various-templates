<template>
<div class="tab-pane" id="company-reports" role="tabpanel">
		                      <div class="table-responsive card">
		                      	<div class="card-body">
		                        <h4 class="pb-3">Company Reports</h4>
			                      <table class="table table-striped custom-table datatable" id="companyreport">
			                        <thead>
			                          <tr>
			                            <th>Report Name</th>
			                            <th>Date Created</th>
			                            <th>Created By</th>
			                            <th>Scheduled</th>
			                          </tr>
			                        </thead>
			                        <tbody>
			                          <tr v-for="item in companyreport" :key="item.id">
			                            <td><a href="javascript:void(0);">{{item.name}}</a></td>
				                            <td>{{item.date}}</td>
				                            <td>{{item.name1}}</td>
				                            <td>{{item.status}}</td>
			                          </tr>
			                        </tbody>
			                      </table>
			                  	</div>
		                    </div>
		                    </div>
</template>
<script>
    import companyreport from '../../../assets/json/main/companyreport.json'
    import util from '../../../assets/utils/util'
	export default {
		mounted() {
        util.datatable('#companyreport')
	},
    data() {
        return {
            companyreport: companyreport
        }
    }
    }
</script>