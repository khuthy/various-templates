<template>
    <div class="tab-pane" id="task-reports" role="tabpanel">
        <div class="table-responsive card">
            <div class="card-body">
              <h4 class="pb-3">Task Reports</h4>
                <table class="table table-striped custom-table datatable" id="taskreport">
                  <thead>
                    <tr>
                      <th>Report Name</th>
                      <th>Date Created</th>
                      <th>Created By</th>
                      <th>Scheduled</th>
                    </tr>
                  </thead>
                  <tbody>
                   <tr v-for="item in taskreport" :key="item.id">
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
    import taskreport from '../../../assets/json/main/taskreport.json'
    import util from '../../../assets/utils/util'
	export default {
		mounted() {
        util.datatable('#taskreport')
	},
    data() {
        return {
            taskreport: taskreport
        }
    }
    }
</script>