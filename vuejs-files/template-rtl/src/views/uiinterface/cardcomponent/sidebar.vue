<template>
    <!-- Sidebar -->
    <div class="sidebar stickyside" id="sidebar">
        <div class="sidebar-inner">
            <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
            <form action="search" class="mobile-view">
                <input class="form-control" type="text" placeholder="Search here">
                <button class="btn" type="button"><i class="fa fa-search"></i></button>
            </form>
            <div id="sidebar-menu" class="sidebar-menu">
                <ul>
                    <li> 
                        <router-link to="/index">Back To Home</router-link>
                    </li>
                    <li class="menu-title"> 
                        Components
                    </li>
                    <li> 
                        <a href="#comp_alerts" class="active">Alerts</a>
                    </li>
                    <li> 
                        <a href="#comp_breadcrumbs">Breadcrumbs</a>
                    </li>
                    <li> 
                        <a href="#comp_buttons">Buttons</a>
                    </li>
                    <li> 
                        <a href="#comp_cards">Cards</a>
                    </li>
                    <li> 
                        <a href="#comp_dropdowns">Dropdowns</a>
                    </li>
                    <li> 
                        <a href="#comp_pagination">Pagination</a>
                    </li>
                    <li> 
                        <a href="#comp_progress">Progress</a>
                    </li>
                    <li> 
                        <a href="#comp_tabs">Tabs</a>
                    </li>
                    <li> 
                        <a href="#comp_typography">Typography</a>
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
    </style>