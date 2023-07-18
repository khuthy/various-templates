<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

				<!-- Page Wrapper -->
                <div class="page-wrapper">
                    <div class="content container-fluid">
    
                        <!-- Page Header -->
                        <dealKanbanbreadcrumb></dealKanbanbreadcrumb>
    
                        <dealkanbanpageheader></dealkanbanpageheader>
                        <!-- /Page Header -->
                        
                         <div class="row m-0">
                          <div class="col-md-12 grid-margin stretch-card kanban">
                            <div class="">
                              <div class="card-body p-0 row">
                                 <div id="sortableKanbanBoards" class="col-md-12 kanban-views p-0">
                                   
                                    <kanbancontent></kanbancontent>
                                    
                                    <kanbancontent1></kanbancontent1>
                                  
                                    <kanbancontent2></kanbancontent2>
    
                                    <kanbancontent3></kanbancontent3>
                             
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
    import deals from '../../../assets/json/main/deals.json'
    import util from '../../../assets/utils/util'
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