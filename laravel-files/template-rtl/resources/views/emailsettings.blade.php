<?php $page="emailsettings";?>
@extends('layout.mainlayout')
@section('content')		
		<div class="page-wrapper">
			<div class="content container-fluid">
				
				@component('components.breadcrumb')                
                  @slot('title') Settings  @endslot
                  @slot('li_1') Dashboard @endslot
                  @slot('li_2') Settings @endslot
                  @slot('li_3') <i class="fa fa-cog" aria-hidden="true"></i> @endslot
              	@endcomponent
				@component('components.settings-page') 
				@endcomponent
				<div class="row">
					<div class="col-md-6">
						<div class="card">
							<div class="card-header d-flex justify-content-between align-items-center">
								<h5 class="card-title">PHP Mail</h5>
								<div class="status-toggle d-flex justify-content-between align-items-center">
									<input type="checkbox" id="status_1" class="check">
									<label for="status_1" class="checktoggle">checkbox</label>
								</div>
							</div>
							<div class="card-body pt-0">
								<form>
									<div class="settings-form">
										<div class="form-group form-placeholder">
											<label>Email From Address <span class="star-red">*</span></label>
											<input type="text" class="form-control">
										</div>
										<div class="form-group form-placeholder">
											<label>Email Password <span class="star-red">*</span></label>
											<input type="text" class="form-control">
										</div>
										<div class="form-group form-placeholder">
											<label>Emails From Name <span class="star-red">*</span></label>
											<input type="text" class="form-control">
										</div>
										<div class="form-group mb-0">
											<div class="settings-btns">
												<button type="submit" class="border-0 btn btn-primary btn-gradient-primary btn-rounded">Save</button>&nbsp;&nbsp;
												<button type="submit" class="btn btn-secondary btn-rounded">Cancel</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="card">
							<div class="card-header d-flex justify-content-between align-items-center">
								<h5 class="card-title">SMTP</h5>
								<div class="status-toggle d-flex justify-content-between align-items-center">
									<input type="checkbox" id="status_2" class="check" checked="">
									<label for="status_2" class="checktoggle">checkbox</label>
								</div>
							</div>
							<div class="card-body pt-0">
								<form>
									<div class="settings-form">
										<div class="form-group form-placeholder">
											<label>Email From Address <span class="star-red">*</span></label>
											<input type="text" class="form-control">
										</div>
										<div class="form-group form-placeholder">
											<label>Email Password <span class="star-red">*</span></label>
											<input type="text" class="form-control">
										</div>
										<div class="form-group form-placeholder">
											<label>Email Host <span class="star-red">*</span></label>
											<input type="text" class="form-control">
										</div>
										<div class="form-group form-placeholder">
											<label>Email Port <span class="star-red">*</span></label>
											<input type="text" class="form-control">
										</div>
										<div class="form-group mb-0">
											<div class="settings-btns">
												<button type="submit" class="border-0 btn btn-primary btn-gradient-primary btn-rounded">Save</button>&nbsp;&nbsp;
												<button type="submit" class="btn btn-secondary btn-rounded">Cancel</button>
											</div>
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

	<!-- /Main Wrapper -->
	@component('components.modal-popup')                
    @endcomponent
    @component('components.theme-settings')                
    @endcomponent
@endsection
	  