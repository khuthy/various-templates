<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<!-- Page Content -->
                <div class="content container-fluid">


                	<invoicegrid></invoicegrid>
					
					<!-- Report Filter -->
					<div class="card report-card">
						<div class="card-body pb-0">
							<div class="row">
								<div class="col-md-12">
									<ul class="app-listing">
										<li>
											<div class="multipleSelection">
												<div class="selectBox">
													<p class="mb-0"><i data-feather="user-plus" class="me-1 select-icon"></i> Select User</p>
													<span class="down-icon"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
												</div>						  
												<div id="checkBoxes">
													<form action="#">
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
													</form>
												</div>
											</div>
										</li>
										<li>
											<div class="multipleSelection">
												<div class="selectBox">
													<p class="mb-0"><i data-feather="calendar" class="me-1 select-icon"></i> Select Date</p>
													<span class="down-icon"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
												</div>						  
												<div id="checkBoxes">
													<form action="#">
														<p class="checkbox-title">Date Filter</p>
														<div class="selectBox-cont selectBox-cont-one h-auto">
															<div class="date-picker">
																<div class="form-custom cal-icon">
																	<input class="form-control datetimepicker" type="text" placeholder="From">
																</div>
															</div>
															<div class="date-picker pe-0">
																<div class="form-custom cal-icon">
																	<input class="form-control datetimepicker" type="text" placeholder="To">
																</div>
															</div>
															<div class="date-list">
																<ul>
																	<li><a href="javascript:void(0);" class="btn date-btn">Today</a></li>
																	<li><a href="javascript:void(0);" class="btn date-btn">Yesterday</a></li>
																	<li><a href="javascript:void(0);" class="btn date-btn">Last 7 days</a></li>
																	<li><a href="javascript:void(0);" class="btn date-btn">This month</a></li>
																	<li><a href="javascript:void(0);" class="btn date-btn">Last month</a></li>
																</ul>
															</div>
														</div>
													</form>
												</div>
											</div>
										</li>
										<li>
											<div class="multipleSelection">
												<div class="selectBox">
													<p class="mb-0"><i data-feather="book-open" class="me-1 select-icon"></i> Select Status</p>
													<span class="down-icon"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
												</div>						  
												<div id="checkBoxes">
													<form action="#">
														<p class="checkbox-title">By Status</p>
														<div class="selectBox-cont">
															<label class="custom_check w-100">
																<input type="checkbox" name="name" checked>
																<span class="checkmark"></span> All Invoices
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="name">
																<span class="checkmark"></span> Paid
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="name">
																<span class="checkmark"></span> Overdue
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="name">
																<span class="checkmark"></span> Draft
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="name">
																<span class="checkmark"></span> Recurring
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="name">
																<span class="checkmark"></span> Cancelled
															</label>
														</div>
														<button type="submit" class="btn w-100 btn-primary">Apply</button>
														<button type="reset" class="btn w-100 btn-grey">Reset</button>
													</form>
												</div>
											</div>
										</li>
										<li>
											<div class="multipleSelection">
												<div class="selectBox">
													<p class="mb-0"><i data-feather="bookmark" class="me-1 select-icon"></i> By Category</p>
													<span class="down-icon"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
												</div>						  
												<div id="checkBoxes">
													<form action="#">
														<p class="checkbox-title">Category</p>
														<div class="form-custom">
															<input type="text" class="form-control bg-grey" placeholder="Enter Category Name">
														</div>
														<div class="selectBox-cont">
															<label class="custom_check w-100">
																<input type="checkbox" name="category">
																<span class="checkmark"></span> Advertising
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="category">
																<span class="checkmark"></span> Food
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="category">
																<span class="checkmark"></span> Marketing
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="category">
																<span class="checkmark"></span> Repairs
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="category">
																<span class="checkmark"></span> Software
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="category">
																<span class="checkmark"></span> Stationary
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="category">
																<span class="checkmark"></span> Travel
															</label>
														</div>
														<button type="submit" class="btn w-100 btn-primary">Apply</button>
														<button type="reset" class="btn w-100 btn-grey">Reset</button>
													</form>
												</div>
											</div>
										</li>
										<li>
											<div class="report-btn">
												<a href="javascript:void(0);" class="btn">
													<img src="../../../../assets/img/invoices-icon5.svg" alt="" class="me-2">
													Generate report
												</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					
					<!-- /Report Filter -->
					<div class="card invoices-tabs-card">
						<div class="card-body card-body pt-0 pb-0">
							<div class="invoices-main-tabs">
								<div class="row align-items-center">
									<div class="col-lg-8 col-md-8">
										
									</div>
									<div class="col-lg-4 col-md-4">
										<div class="invoices-settings-btn">
											<router-link to="/invoices-settings" class="invoices-settings-icon">
												<i data-feather="settings"></i>
                                            </router-link>
											<router-link to="/add-invoice" class="btn">
												<i data-feather="plus-circle"></i> New Invoice
                                            </router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6 col-lg-4 col-xl-3 d-flex" v-for="item in invoicegrid" :key="item.id">
							<div class="card invoices-grid-card w-100">
								<div class="card-header d-flex justify-content-between align-items-center">
									<router-link to="/view-invoice" class="invoice-grid-link">{{item.no}}</router-link>
									<div class="dropdown dropdown-action">
										<a href="javascript:void(0);" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-ellipsis-v"></i></a>
										<div class="dropdown-menu dropdown-menu-end">
											<router-link class="dropdown-item" to="/edit-invoice"><i class="far fa-edit me-2"></i>Edit</router-link>
											<router-link class="dropdown-item" to="/view-invoice"><i class="far fa-eye me-2"></i>View</router-link>
											<a class="dropdown-item" a href="javascript:void(0);"><i class="far fa-trash-alt me-2"></i>Delete</a>
										</div>
									</div>
								</div>
								<div class="card-middle">
									<h2 class="card-middle-avatar">
										<router-link to="/profile"><img class="avatar avatar-sm me-2 avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image"> {{item.name}}</router-link>
									</h2>
								</div>
								<div class="card-body">
									<div class="row align-items-center">
										<div class="col">
											<span><i class="far fa-money-bill-alt"></i> {{item.amt}}</span>
											<h6 class="mb-0">{{item.cost}}</h6>
										</div>
										<div class="col-auto">
											<span><i class="far fa-calendar-alt"></i> {{item.amt1}}</span>
											<h6 class="mb-0">{{item.cost1}}</h6>
										</div>
									</div>
								</div>
								<div class="card-footer">
									<div class="row align-items-center">
										<div class="col-auto">
											<span class="badge bg-success-dark">{{item.status}}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-12">
							<div class="invoice-load-btn">
								<a href="javascript:void(0);" class="btn">
									<span class="spinner-border text-primary"></span> Load more
								</a>
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
    import invoicegrid from '../../../../assets/json/invoices/invoicegrid.json'
    const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
	export default {
	mounted() {
        $(function() {
    $("input[name='invoice']").click(function() {
        if ($("#chkYes").is(":checked")) {
            $("#show-invoices").show();
        } else {
            $("#show-invoices").hide();
        }
    });
});
$(document).on("click",".add-links1",function () {
    var experiencecontent = '<div class="links-cont">' +
        '<div class="service-amount">' +
            '<a href="javascript:void(0);" class="service-trash1"><i class="fa fa-minus-circle me-1"></i>Service Charge</a> <span>$ 4</span' +
        '</div>' +
    '</div>';
    
    $(".links-info-one").append(experiencecontent);
    return false;
});
$(document).on("click",".add-links-one",function () {
		var experiencecontent = '<div class="links-cont-discount">' +
			'<div class="service-amount">' +
				'<a href="javascript:void(0);" class="service-trash-one"><i class="fa fa-minus-circle me-1"></i>Offer new</a> <span>$ 4 %</span' +
			'</div>' +
		'</div>';
		
        $(".links-info-discount").append(experiencecontent);
        return false;
    });
    // Checkbox Select
	
$('.app-listing .selectBox').on("click", function() {
    $(this).parent().find('#checkBoxes').fadeToggle();
    $(this).parent().parent().siblings().find('#checkBoxes').fadeOut();
});

$('.invoices-main-form .selectBox').on("click", function() {
    $(this).parent().find('#checkBoxes-one').fadeToggle();
    $(this).parent().parent().siblings().find('#checkBoxes-one').fadeOut();
});

//Checkbox Select

if($('.SortBy').length > 0) {
    var show = true;
    var checkbox1 = document.getElementById("checkBox");
    $('.selectBoxes').on("click", function() {
        
        if (show) {
            checkbox1.style.display = "block";
            show = false;
        } else {
            checkbox1.style.display = "none";
            show = true;
        }
    });		
}

// Invoices Checkbox Show

$(function() {
    $("input[name='invoice']").click(function() {
        if ($("#chkYes").is(":checked")) {
            $("#show-invoices").show();
        } else {
            $("#show-invoices").hide();
        }
    });
});
if ($('.select').length > 0) {
        $('.select').select2({
            minimumResultsForSearch: -1,
            width: '100%'
        });
    }
    if ($('.datetimepicker').length > 0) {
        $('.datetimepicker').datetimepicker({
            format: 'DD/MM/YYYY',
            icons: {
                up: "fa fa-angle-up",
                down: "fa fa-angle-down",
                next: 'fa fa-angle-right',
                previous: 'fa fa-angle-left'
            }
        });
    }
	},
    methods:{
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
    },
    data() {
        return {
            invoicegrid: invoicegrid
        }
    }
    }
</script>