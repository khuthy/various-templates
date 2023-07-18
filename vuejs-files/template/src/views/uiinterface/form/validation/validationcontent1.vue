<template>
<div class="card-body">
									<div class="row">
										<div class="col-sm">
											<form>
												<div class="form-row">
													<div class="col-md-4 mb-3">
														<label for="validationDefault01">First Name</label>
														<input type="text" class="form-control" id="validationDefault01" placeholder="First Name" value="Mark" required>
													</div>
													<div class="col-md-4 mb-3">
														<label for="validationDefault02">Last Name</label>
														<input type="text" class="form-control" id="validationDefault02" placeholder="Last Name" value="Otto" required>
													</div>
													<div class="col-md-4 mb-3">
														<label for="validationDefaultUsername">Username</label>
														<div class="input-group">
															<span class="input-group-text" id="inputGroupPrepend2">@</span>
															<input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
														</div>
													</div>
												</div>
												<div class="form-row">
													<div class="col-md-6 mb-3">
														<label for="validationDefault03">City</label>
														<input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
													</div>
													<div class="col-md-3 mb-3">
														<label for="validationDefault04">State</label>
														<input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
													</div>
													<div class="col-md-3 mb-3">
														<label for="validationDefault05">Zip</label>
														<input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
													</div>
												</div>
												<div class="form-group">
													<div class="form-check">
														<input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
														<label class="form-check-label" for="invalidCheck2">
															Agree to terms and conditions
														</label>
													</div>
												</div>
												<button class="btn btn-primary" type="submit">Submit form</button>
											</form>
										</div>
									</div>
								</div>
</template>