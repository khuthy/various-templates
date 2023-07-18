<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<!-- Page Content -->
                <div class="content container-fluid">

                	<sociallink></sociallink>

					<settingsidebar></settingsidebar>
                    
					<div class="row">
						<div class="col-lg-6 col-md-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Social Link Settings</h5>
								</div>
								<div class="card-body pt-0">
									<form>
										<div class="settings-form">
											<div class="links-info">
												<div class="row form-row links-cont">
													<div class="form-group form-placeholder d-flex">
														<button class="btn social-icon">
															<i class="feather-facebook"></i>
														</button>
														<input type="text" class="form-control" placeholder="https://www.facebook.com">
														<a href="javascript:void(0);" class="btn trash">
															<i class="feather-trash-2"></i>
														</a>
													</div>
												</div>
											</div>
											<div class="links-info">
												<div class="row form-row links-cont">
													<div class="form-group form-placeholder d-flex">
														<button class="btn social-icon">
															<i class="feather-twitter"></i>
														</button>
														<input type="text" class="form-control" placeholder="https://www.twitter.com">
														<a href="javascript:void(0);" class="btn trash">
															<i class="feather-trash-2"></i>
														</a>
													</div>
												</div>
											</div>
											<div class="links-info">
												<div class="row form-row links-cont">
													<div class="form-group form-placeholder d-flex">
														<button class="btn social-icon">
															<i class="feather-youtube"></i>
														</button>
														<input type="text" class="form-control" placeholder="https://www.youtube.com">
														<a href="javascript:void(0);" class="btn trash">
															<i class="feather-trash-2"></i>
														</a>
													</div>
												</div>
											</div>
											<div class="links-info">
												<div class="row form-row links-cont">
													<div class="form-group form-placeholder d-flex">
														<button class="btn social-icon">
															<i class="feather-linkedin"></i>
														</button>
														<input type="text" class="form-control" placeholder="https://www.linkedin.com">
														<a href="javascript:void(0);" class="btn trash">
															<i class="feather-trash-2"></i>
														</a>
													</div>
												</div>
											</div>
										</div>
										<div class="form-group text-end">
											<a a href="javascript:void(0);" class="btn add-links">
												<i class="fa fa-plus me-1"></i> Add More
											</a>
										</div>
										<div class="form-group mb-0">
											<div class="settings-btns">
												<button type="submit" class="border-0 btn btn-primary btn-gradient-primary btn-rounded">Submit</button>
												<button type="submit" class="btn btn-secondary btn-rounded ms-1">Cancel</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
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
	export default {
	mounted() {
		$(document).on("click",".add-links",function () {
    var experiencecontent = '<div class="links-info"><div class="row form-row links-cont">' +
            '<div class="form-group form-placeholder d-flex">' +
                '<button class="btn social-icon"><i class="feather-github"></i></button>' +
                '<input type="text" class="form-control" placeholder="Social Link">' +
                '<a href="#" class="btn trash">' +
                '<i class="feather-trash-2"></i>' +
                '</a>'+
            '</div>' +
        '</div>' +
    '</div>';
    
    $(".settings-form").append(experiencecontent);
    return false;
});
$(".settings-form").on('click','.trash', function () {
    $(this).closest('.links-cont').remove();
    return false;
});

	},
    data() {
        return {
        }
    }
    }
</script>