<template>
<div class="crms-title row bg-white">
                		<div class="col  p-0">
                			<h3 class="page-title m-0">
			                <span class="page-title-icon bg-gradient-primary text-white me-2">
			                  <i class="fa fa-file" aria-hidden="true"></i>
			                </span> Invoice </h3>
                		</div>
                		<div class="col p-0 text-end">
                			<ul class="breadcrumb bg-white float-end m-0 ps-0 pe-0">
								<li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
								<li class="breadcrumb-item active">Invoice</li>
							</ul>
                		</div>
                	</div>
					<div class="row align-items-center">
						<div class="col">
						</div>
						<div class="col-auto py-3">
							<router-link to="/invoices" class="invoices-links ">
								<i data-feather="list"></i>
                            </router-link>
							<router-link to="/invoice-grid" class="invoices-links active">
								<i data-feather="grid"></i>
                            </router-link>
						</div>
					</div>
</template>