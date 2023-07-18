<template>
<div class="card-body">
									<form class="needs-validation" novalidate>
										<div class="form-row">
											<div class="col-md-4 mb-3">
												<label for="validationTooltip01">First Name</label>
												<input type="text" class="form-control" id="validationTooltip01" placeholder="First Name" value="Mark" required>
												<div class="valid-tooltip">
													Looks good!
												</div>
											</div>
											<div class="col-md-4 mb-3">
												<label for="validationTooltip02">Last Name</label>
												<input type="text" class="form-control" id="validationTooltip02" placeholder="Last Name" value="Otto" required>
												<div class="valid-tooltip">
													Looks good!
												</div>
											</div>
											<div class="col-md-4 mb-3">
												<label for="validationTooltipUsername">Username</label>
												<input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" required>
												<div class="invalid-tooltip">
													Please choose a unique and valid username.
												</div>
											</div>
										</div>
										<div class="form-row">
											<div class="col-md-6 mb-3">
												<label for="validationTooltip03">City</label>
												<input type="text" class="form-control" id="validationTooltip03" placeholder="City" required>
												<div class="invalid-tooltip">
													Please provide a valid city.
												</div>
											</div>
											<div class="col-md-3 mb-3">
												<label for="validationTooltip04">State</label>
												<input type="text" class="form-control" id="validationTooltip04" placeholder="State" required>
												<div class="invalid-tooltip">
													Please provide a valid state.
												</div>
											</div>
											<div class="col-md-3 mb-3">
												<label for="validationTooltip05">Zip</label>
												<input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>
												<div class="invalid-tooltip">
													Please provide a valid zip.
												</div>
											</div>
										</div>
										<button class="btn btn-primary" type="submit">Submit form</button>
									</form>
								</div>
</template>