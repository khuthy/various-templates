<template>
<div class="invoices-main-form">
											<div class="row">
												<div class="col-xl-4 col-md-6 col-sm-12 col-12">
													<div class="form-group">
														<label>Customer Name</label>
														<div class="multipleSelection">
															<div class="selectBox">
																<p class="mb-0">Select Customer</p>
																<span class="down-icon"><i data-feather="chevron-down"></i></span>
															</div>						  
															<div id="checkBoxes-one">
																<p class="checkbox-title">Customer Search</p>
																<div class="form-custom">
																	<input type="text" class="form-control bg-grey" placeholder="Enter Customer Name">
																</div>
																<div class="selectBox-cont">
																	<label class="custom_check w-100">
																		<input type="checkbox" name="username">
																		<span class="checkmark"></span>  Brian Johnson
																	</label>
																	<label class="custom_check w-100">
																		<input type="checkbox" name="username">
																		<span class="checkmark"></span>  Russell Copeland
																	</label>
																	<label class="custom_check w-100">
																		<input type="checkbox" name="username">
																		<span class="checkmark"></span>  Greg Lynch
																	</label>
																	<label class="custom_check w-100">
																		<input type="checkbox" name="username">
																		<span class="checkmark"></span> John Blair
																	</label>
																	<label class="custom_check w-100">
																		<input type="checkbox" name="username">
																		<span class="checkmark"></span> Barbara Moore
																	</label>
																	<label class="custom_check w-100">
																		<input type="checkbox" name="username">
																		<span class="checkmark"></span> Hendry Evan
																	</label>
																	<label class="custom_check w-100">
																		<input type="checkbox" name="username">
																		<span class="checkmark"></span> Richard Miles
																	</label>
																</div>
																<button type="submit" class="btn w-100 btn-primary">Apply</button>
																<button type="reset" class="btn w-100 btn-grey">Reset</button>
															</div>
														</div>
													</div>
													<div class="form-group">
														<label>Po Number</label>
														<input class="form-control" type="text" placeholder="Enter Reference Number">
													</div>
												</div>
												<div class="col-xl-5 col-md-6 col-sm-12 col-12">
													<h4 class="invoice-details-title">Invoice details</h4>
													<div class="invoice-details-box">
														<div class="invoice-inner-head">
															<span>Invoice No. <router-link to="/view-invoice">IN093439#@09</router-link></span>
														</div>
														<div class="invoice-inner-footer">
															<div class="row align-items-center">
																<div class="col-lg-6 col-md-6">
																	<div class="invoice-inner-date">
																		<span>
																			Date <input class="form-control datetimepicker" type="text" placeholder="15/02/2022">
																		</span>
																	</div>
																</div>
																<div class="col-lg-6 col-md-6">
																	<div class="invoice-inner-date invoice-inner-datepic">
																		<span>
																			Due Date <input class="form-control datetimepicker" type="text" placeholder="Select">
																		</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="col-xl-3 col-md-12 col-sm-12 col-12">
													<div class="inovices-month-info">
														<div class="form-group mb-0">
															<label class="custom_check w-100">
																<input type="checkbox" id="enableTax" name="invoice">
																<span class="checkmark"></span> Enable tax
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" id="chkYes" name="invoice">
																<span class="checkmark"></span> Recurring Invoice
															</label>
														</div>
														<div id="show-invoices">
															<div class="row">
																<div class="col-md-6">
																	<div class="form-group">
																		<select class="select">
																			<option>By month</option>
																			<option>March</option>
																			<option>April</option>
																			<option>May</option>
																			<option>June</option>
																			<option>July</option>
																		</select>
																	</div>
																</div>
																<div class="col-md-6">
																	<div class="form-group">
																		<input class="form-control" type="text" placeholder="Enter Months">
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="invoice-item">
											<div class="row">
												<div class="col-xl-4 col-lg-6 col-md-6">
													<div class="invoice-info">
														<strong class="customer-text">Invoice From <router-link class="small" to="/edit-invoice">Edit Address</router-link></strong>
														<p class="invoice-details invoice-details-two">
															Darren Elder <br>
															806  Twin Willow Lane, Old Forge,<br>
															Newyork, USA <br>
														</p>
													</div>
												</div>
												<div class="col-xl-4 col-lg-6 col-md-6">
													<div class="invoice-info">
														<strong class="customer-text">Invoice To</strong>
														<p class="invoice-details invoice-details-two">
															Walter Roberson <br>
															299 Star Trek Drive, Panama City, <br>
															Florida, 32405, USA <br>
														</p>
													</div>
												</div>
											</div>
										</div>
</template>