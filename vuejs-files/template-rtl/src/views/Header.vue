<template>
<!-- Header -->
<div class="header" id="heading">
			
	<!-- Logo -->
	<logo></logo>
	<!-- /Logo -->
	
	<a id="toggle_btn" a href="javascript:void(0);">
		<span class="bar-icon">
			<span></span>
			<span></span>
			<span></span>
		</span>
	</a>
	
	<!-- Header Title -->
	<headerglobal></headerglobal>
	<!-- /Header Title -->
	
	<a id="mobile_btn" class="mobile_btn" href="#sidebar"><i class="fa fa-bars"></i></a>
	
	<!-- Header Menu -->
	<ul class="nav user-menu">
	
		<!-- Search -->
		<li class="nav-item">
			
		</li>
		<!-- /Search -->
	
		<!-- Flag -->
		<flag></flag>
		<!-- /Flag -->
	
		<!-- Notifications -->
		<notification></notification>
		<!-- /Notifications -->
		
		<!-- Message Notifications -->
		<message></message>
		<!-- /Message Notifications -->

		<li class="nav-item dropdown has-arrow main-drop">
			<a a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
				<span class="user-img me-1"><img src="../assets/img/profiles/avatar-21.jpg" alt="">
				<span class="status online"></span></span>
				<span class="me-1">Admin</span>
			</a>
			<div class="dropdown-menu">
				<router-link class="dropdown-item" to="/profile">My Profile</router-link>
				<router-link class="dropdown-item" to="/settings">Settings</router-link>
				<router-link class="dropdown-item" to="/">Logout</router-link>
			</div>
		</li>
	</ul>
	<!-- /Header Menu -->
	
	<!-- Mobile Menu -->
	<div class="dropdown mobile-user-menu">
		<a a href="javascript:void(0);" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
		<div class="dropdown-menu dropdown-menu-right">
			<router-link class="dropdown-item" to="/profile">My Profile</router-link>
			<router-link class="dropdown-item" to="/settings">Settings</router-link>
			<router-link class="dropdown-item" to="/">Logout</router-link>
		</div>
	</div>
	<!-- /Mobile Menu -->
	
</div>
<!-- /Header -->
</template>
<script>
    export default {
        mounted() {
			feather.replace();
       // Variables declarations
    var $wrapper = $('.main-wrapper');
    var $pageWrapper = $('.page-wrapper');
    var $sidebarOverlay = $('.sidebar-overlay');
    // Small Sidebar
	if(screen.width >= 992) {
		$(document).on('click', '#toggle_btn', function() {
			if($('body').hasClass('mini-sidebar')) {
				$('body').removeClass('mini-sidebar');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').addClass('mini-sidebar');
				$('.subdrop + ul').slideUp();
			}
			return false;
		});
		$(document).on('mouseover', function(e) {
			e.stopPropagation();
			if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
				var targ = $(e.target).closest('.sidebar').length;
				if(targ) {
					$('body').addClass('expand-menu');
					$('.subdrop + ul').slideDown();
				} else {
					$('body').removeClass('expand-menu');
					$('.subdrop + ul').slideUp();
				}
				return false;
			}
		});
	}
    // Sidebar overlay
	function sidebar_overlay($target) {
		if($target.length) {
			$target.toggleClass('opened');
			$sidebarOverlay.toggleClass('opened');
			$('html').toggleClass('menu-opened');
			$sidebarOverlay.attr('data-reff', '#' + $target[0].id);
		}
	}
	// Mobile menu sidebar overlay
	$(document).on('click', '#mobile_btn', function() {
		var $target = $($(this).attr('href'));
		sidebar_overlay($target);
		$wrapper.toggleClass('slide-nav');
		$('#chat_sidebar').removeClass('opened');
		return false;
	});
    // Mobile Menu
	$(document).on('click', '#open_msg_box', function() {
		$wrapper.toggleClass('open-msg-box');
		return false;
	});
    // Page wrapper height
	var pHeight = $(window).height();
	$pageWrapper.css('min-height', pHeight);
	$(window).resize(function() {
		var prHeight = $(window).height();
		$pageWrapper.css('min-height', prHeight);
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
       computed: {
           currentPath() {
               return this.$route.name
           }
       }
    }
    </script>