<template>
<div class="card-body pt-0">
									<form>
										<div class="settings-form">
											<div class="form-group">
												<p class="pay-cont">Paypal Option</p>
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
												<label>Braintree Tokenization key <span class="star-red">*</span></label>
												<input type="text" class="form-control" placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8">
											</div>
											<div class="form-group form-placeholder">
												<label>Braintree Merchant ID <span class="star-red">*</span></label>
												<input type="text" class="form-control" placeholder="pd6gznv7zbrx9hb8">
											</div>
											<div class="form-group form-placeholder">
												<label>Braintree Public key <span class="star-red">*</span></label>
												<input type="text" class="form-control" placeholder="h8bydrz7gcjkp7d4">
											</div>
											<div class="form-group form-placeholder">
												<label>Braintree Private key <span class="star-red">*</span></label>
												<input type="text" class="form-control" placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8">
											</div>
											<div class="form-group form-placeholder">
												<label>Paypal APP ID <span class="star-red">*</span></label>
												<input type="text" class="form-control" placeholder="pd6gznv7zbrx9hb8">
											</div>
											<div class="form-group form-placeholder">
												<label>Paypal Secret Key <span class="star-red">*</span></label>
												<input type="text" class="form-control" placeholder="h8bydrz7gcjkp7d4">
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