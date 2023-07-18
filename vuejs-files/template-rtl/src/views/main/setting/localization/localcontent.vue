<template>
<div class="card-body pt-0">
									<form>
										<div class="settings-form">
											<div class="form-group">
												<label>Time Zone</label>
												<select class="select form-control">
													<option selected="selected">(UTC +5:30) Antarctica/Palmer</option>
													<option>(UTC+05:30) India</option> 
												</select>
											</div>
											<div class="form-group">
												<label>Date Format</label>
												<select class="select form-control">
													<option selected="selected">15 May 2016</option>
													<option>15/05/2016</option>
													<option>15.05.2016</option>
													<option>15-05-2016</option>
													<option>05/15/2016</option>
													<option>2016/05/15</option>
													<option>2016-05-15</option>
												</select>
											</div>
											<div class="form-group">
												<label>Time Format</label>
												<select class="select form-control">
													<option selected="selected">12 Hours</option>
													<option>24 Hours</option>
													<option>36 Hours</option>  
													<option>48 Hours</option>
													<option>60 Hours</option> 
												</select>
											</div>
											<div class="form-group">
												<label>Currency Symbol</label>
												<select class="select form-control">
													<option selected="selected">$</option>
													<option>₹</option>  
													<option>£</option>
													<option>€</option> 
												</select>
											</div>
											<div class="form-group mb-0">
												<div class="settings-btns">
													<button type="submit" class="border-0 btn btn-primary btn-gradient-primary btn-rounded">Update</button>
												</div>
											</div>
										</div>
									</form>
								</div>
</template>