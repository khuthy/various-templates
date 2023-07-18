<template>
<div class="tab-pane" id="other-reports" role="tabpanel">
		                      <div class="table-responsive card">
		                      	<div class="card-body">
		                        <h4 class="pb-3">Other Reports</h4>
			                      <table class="table table-striped custom-table datatable" id="otherreport">
			                        <thead>
			                          <tr>
			                            <th>Report Name</th>
			                            <th>Date Created</th>
			                            <th>Created By</th>
			                            <th>Scheduled</th>
			                          </tr>
			                        </thead>
			                        <tbody>
			                          <tr v-for="item in otherreport" :key="item.id">
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
    import otherreport from '../../../assets/json/main/otherreport.json'
    import util from '../../../assets/utils/util'
	export default {
		mounted() {
        util.datatable('#otherreport')
	},
    data() {
        return {
            otherreport: otherreport
        }
    }
    }
</script>