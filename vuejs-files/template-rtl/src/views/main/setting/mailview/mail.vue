<template>


	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-mailsidebar></layout-mailsidebar>

				<!-- Page Wrapper -->
                <div class="page-wrapper">
			
                    <!-- Page Content -->
                    <div class="content container-fluid">
    
                        <mailviewbreadcrumb></mailviewbreadcrumb>
                    
                        <!-- Page Header -->
                        <mailviewheader></mailviewheader>
                        <!-- /Page Header -->
                
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card mb-0">
                                    <div class="card-body">
                                        <div class="mailview-content">
                                            <mailheader></mailheader>
                                            <mailinner></mailinner>
                                        </div>
                                        <mailattach></mailattach>
                                        <mailfooter></mailfooter>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Page Content -->
                    
                </div>
                <!-- /Page Wrapper -->

		</diV>

          <div class="modal fade right" id="compose-mail">
          <div class="modal-dialog">
            <button type="button" class="close md-close" data-bs-dismiss="modal">&times;</button>
            <div class="modal-content">
            
              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title">Compose New Mail</h4>
                <button type="button" class="close xs-close" data-bs-dismiss="modal">&times;</button>
              </div>
              
              <!-- Modal body -->
              <div class="modal-body">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="card mb-0">
                      <div class="card-body">
                        <form>
                          <div class="form-group">
                            <input type="email" placeholder="To" class="form-control">
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <input type="email" placeholder="Cc" class="form-control">
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <input type="email" placeholder="Bcc" class="form-control">
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <input type="text" placeholder="Subject" class="form-control">
                          </div>
                          <div class="form-group">
                            <textarea rows="4" class="form-control summernote" placeholder="Enter your message here"></textarea>
                          </div>
                          <div class="form-group mb-0">
                            <div class="text-center">
                              <button class="btn btn-primary"><span>Send</span> <i class="fa fa-send m-l-5"></i></button>
                              <button class="btn btn-success m-l-5" type="button"><span>Draft</span> <i class="fa fa-floppy-o m-l-5"></i></button>
                              <button class="btn btn-danger m-l-5" type="button"><span>Delete</span> <i class="fa fa-trash-o m-l-5"></i></button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
        </div>

        <themesetting></themesetting>

	</div>

</template>

<script>
	export default {
		mounted() {
	},
    data() {
        return {
        }
    }
    }
</script>