<template>
<div class="tab-pane active" id="personal-reports" role="tabpanel">
		                      <div class="table-responsive">
		                      	<div class="card">
		                      		<div class="card-body">
				                        <h4 class="pb-3">My Personal Reports</h4>
					                      <table class="table table-striped custom-table datatable" id="personalreport">
					                        <thead>
					                          <tr>
					                            <th>Report Name</th>
					                            <th>Date Created</th>
					                            <th>Created By</th>
					                            <th>Scheduled</th>
					                          </tr>
					                        </thead>
					                        <tbody>
					                          <tr v-for="item in personalreport" :key="item.id">
					                            <td>{{item.name}}</td>
					                            <td>{{item.date}}</td>
					                            <td>{{item.name1}}</td>
					                            <td>{{item.status}}</td>
					                          </tr>
					                        </tbody>
					                      </table>
					                  	</div>
					                 </div>
			                    </div>
</div>
</template>
<script>
    import personalreport from '../../../assets/json/main/personalreport.json'
    import util from '../../../assets/utils/util'
	export default {
		mounted() {
        util.datatable('#personalreport')
	},
    data() {
        return {
            personalreport: personalreport
        }
    }
    }
</script>