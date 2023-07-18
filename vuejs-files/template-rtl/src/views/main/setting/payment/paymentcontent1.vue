<template>
<div class="card-body pt-0">
									<form>
										<div class="settings-form">
											<div class="form-group">
												<p class="pay-cont">Stripe Option</p>
												<label class="custom_radio me-4">
													<input type="radio" name="budget" value="Yes" checked="">
													<span class="checkmark"></span> Sandbox
												</label>
												<label class="custom_radio">
													<input type="radio" name="budget" value="Yes">
													<span class="checkmark"></span> Live
												</label>
											</div>
											<div class="form-group form-placeholder">
												<label>Gateway Name <span class="star-red">*</span></label>
												<input type="text" class="form-control" placeholder="Stripe">
											</div>
											<div class="form-group form-placeholder">
												<label>API Key <span class="star-red">*</span></label>
												<input type="text" class="form-control" placeholder="pk_test_AealxxOygZz84AruCGadWvUV00mJQZdLvr">
											</div>
											<div class="form-group form-placeholder">
												<label>Rest Key <span class="star-red">*</span></label>
												<input type="text" class="form-control" placeholder="sk_test_8HwqAWwBd4C4E77bgAO1jUgk00hDlERgn3">
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
</template>