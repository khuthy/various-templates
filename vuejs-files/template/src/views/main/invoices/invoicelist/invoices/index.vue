<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<!-- Page Content -->
                <div class="content container-fluid">

                	<recurringbreadcrumb></recurringbreadcrumb>

					<recurringfilter></recurringfilter>

					<invoicecard></invoicecard>

					<invoicewidget></invoicewidget>

					<div class="row">
						<div class="col-sm-12">
							<div class="card card-table"> 
								<div class="card-body p-4">
									<div class="table-responsive">
										<table class="table table-striped table-nowrap custom-table mb-0 datatable" id="invoicelist">
											<thead class="thead-light">
												<tr>
												   <th>Invoice ID</th>
												   <th>Category</th>
												   <th>Created on</th>
												   <th>Invoice to</th>
												   <th>Amount</th>
												   <th>Due date</th>
												   <th>Status</th>
												   <th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in invoicelist" :key="item.id">
													<td>
														<label class="custom_check">
															<input type="checkbox" name="invoice">
															<span class="checkmark"></span> 
														</label>
														<router-link to="/view-invoice" class="invoice-link">{{item.no}}</router-link>
													</td>
													<td>{{item.ctgry}}</td>
													<td>{{item.date}}</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/profile"><img class="avatar avatar-sm me-2 avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image"> {{item.name}}</router-link>
														</h2>
													</td>
													<td class="text-primary">{{item.amt}}</td>
													<td>{{item.cost}}</td>
													<td><span class="badge bg-success-light">{{item.status}}</span></td>
													<td class="text-end">
														<div class="dropdown dropdown-action">
															<a href="javascript:void(0);" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-ellipsis-v"></i></a>
															<div class="dropdown-menu dropdown-menu-end">
																<router-link class="dropdown-item" to="/edit-invoice"><i class="far fa-edit me-2"></i>Edit</router-link>
																<router-link class="dropdown-item" to="/view-invoice"><i class="far fa-eye me-2"></i>View</router-link>
																<a class="dropdown-item" a href="javascript:void(0);"><i class="far fa-trash-alt me-2"></i>Delete</a>
																<a class="dropdown-item" a href="javascript:void(0);"><i class="far fa-check-circle me-2"></i>Mark as sent</a>
																<a class="dropdown-item" a href="javascript:void(0);"><i class="far fa-paper-plane me-2"></i>Send Invoice</a>
																<a class="dropdown-item" a href="javascript:void(0);"><i class="far fa-copy me-2"></i>Clone Invoice</a>
															</div>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
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
    import invoicelist from '../../../../../assets/json/invoices/invoicelist.json'
    import util from '../../../../../assets/utils/util'
    const images = require.context('../../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
	export default {
	mounted() {
        util.datatable('#invoicelist')
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
            invoicelist: invoicelist
        }
    }
    }
</script>