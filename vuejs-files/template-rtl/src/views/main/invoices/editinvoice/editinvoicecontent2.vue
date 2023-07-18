<template>
<div class="invoice-add-table">
											<h4>Item Details</h4>
											<div class="table-responsive">
												<table class="table table-striped table-nowrap  mb-0 no-footer add-table-items">
													<thead>
														<tr>
															<th>Items</th>
															<th>Category</th>
															<th>Quantity</th>
															<th>Price</th>
															<th>Amount</th>
															<th>Discount</th>
															<th>Actions</th>
														</tr>
													</thead>
													<tbody>
														<tr class="add-row">
															<td>
																<input type="text" class="form-control" placeholder="Item Name">
															</td>
															<td>
																<input type="text" class="form-control" placeholder="Category Name">
															</td>
															<td>
																<input type="text" class="form-control" placeholder="2">
															</td>
															<td>
																<input type="text" class="form-control" placeholder="$10">
															</td>
															<td>
																<input type="text" class="form-control" placeholder="$20">
															</td>
															<td>
																<input type="text" class="form-control" placeholder="4%">
															</td>
															<td class="add-remove text-end">
																<a a href="javascript:void(0);" class="add-btns me-2"><i class="fas fa-plus-circle"></i></a> 
																<a href="javascript:void(0);" class="copy-btn me-2"><i class="fas fa-copy"></i></a>
																<a a href="javascript:void(0);" class="remove-btn"><i class="fa fa-trash"></i></a>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
</template>