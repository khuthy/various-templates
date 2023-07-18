<template>

	<div id="skin-color" class="inter">

		<div class="main-wrapper">

			<layout-header></layout-header>

			<layout-navbar></layout-navbar>

			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
			
					<addinvoicepageheader></addinvoicepageheader>
					
					<div class="row">
						<div class="col-md-12">
							<div class="card invoices-add-card">
								<div class="card-body">
									<form action="#" class="invoices-form">

										<editinvoicecontent></editinvoicecontent>

										<editinvoicecontent1></editinvoicecontent1>

										<editinvoicecontent2></editinvoicecontent2>

										<editinvoicecontent3></editinvoicecontent3>

									</form>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Page Wrapper -->

		</diV>

        <modal></modal>

        <themesetting></themesetting>

	</div>

</template>

<script>
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
    data() {
        return {
        }
    }
    }
</script>