<template>
<!-- Sidebar -->
<div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
        <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
        <form class="mobile-view">
            <input class="form-control" type="text" placeholder="Search here">
            <router-link to="/search">
            <button class="btn" type="button"><i class="fa fa-search"></i></button>
            </router-link>
        </form>
        <div class="sidebar-menu">
            <ul>
                <li> 
                    <router-link to="/index"><i class="fa fa-home" aria-hidden="true"></i> <span>Back to Home</span></router-link>
                </li>
                  <li class="active"> 
                    <router-link to="/email"><i class="fa fa-envelope menu-icon" aria-hidden="true"></i> <span>Inbox <span class="mail-count">(21)</span></span></router-link>
                  </li>
                <li> 
                    <a href="javascript:void(0);"><i class="fa fa-star menu-icon" aria-hidden="true"></i> <span>Starred</span></a>
                  </li>
                <li> 
                    <a href="javascript:void(0);"><i class="fa fa-paper-plane menu-icon" aria-hidden="true"></i> <span>Sent Mail</span></a>
                </li>
                <li> 
                    <a href="javascript:void(0);"><i class="fa fa-trash menu-icon" aria-hidden="true"></i> <span>Trash</span></a>
                </li>
                <li> 
                    <a href="javascript:void(0);"><i class="fa fa-folder-open menu-icon" aria-hidden="true"></i> <span>Draft <span class="mail-count">(8)</span></span></a>
                </li>
                <li class="menu-title xs-hidden">Label <a href="javascript:void(0);"><i class="fa fa-plus"></i></a></li>
                <li class="xs-hidden"> 
                    <a href="javascript:void(0);"><i class="fa fa-circle text-success mail-label"></i> Work</a>
                </li>
                <li class="xs-hidden"> 
                    <a href="javascript:void(0);"><i class="fa fa-circle text-danger mail-label"></i> Office</a>
                </li>
                <li class="xs-hidden"> 
                    <a href="javascript:void(0);"><i class="fa fa-circle text-warning mail-label"></i> Personal</a>
                </li>
            </ul>
        </div>
        </perfect-scrollbar>
    </div>
</div>
<!-- /Sidebar -->
</template>
<script>
import {PerfectScrollbar}  from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
   export default {
	   components: {
   PerfectScrollbar ,
 },
 mounted() {
	 $('#sidebar-menu a').on('click', function (e) {
	   if ($(this).parent().hasClass('submenu')) {
		 e.preventDefault();
	   }
	   if (!$(this).hasClass('subdrop')) {
		 $('ul', $(this).parents('ul:first')).slideUp(350);
		 $('a', $(this).parents('ul:first')).removeClass('subdrop');
		 $(this).next('ul').slideDown(350);
		 $(this).addClass('subdrop');
	   } else if ($(this).hasClass('subdrop')) {
		 $(this).removeClass('subdrop');
		 $(this).next('ul').slideUp(350);
	   }
	 });
	 $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');

   },
   computed: {
	   currentpage() {
		 return this.$route.path;
	   },
	 },
 data() {
	 return {
	   settings: {
suppressScrollX: true,
},
	   activeClass: 'active',
	 };
			 //  isactive : true
   },
   methods: {
   scrollHanle(evt) {
	 console.log(evt)
   }
 },
}
</script>
<style>
	  .scroll-area {
      position: relative;
      margin: auto;
      height: calc(100vh - 60px);
      background-color: transparent !important;
  }
.sidebar-menu ul ul a.active {
   color: #fff;
   background-color: #9a55ff;
   text-decoration: underline;
}
.sidebar-menu ul li a.active {
   color: #fff;
   background-color: #9a55ff;
}
</style>