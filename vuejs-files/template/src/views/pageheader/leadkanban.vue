<template>
<div class="page-header  mb-0 ">
						<div class="row">
							<div class="col">

								<div class="dropdown">
									<a class="dropdown-toggle recently-viewed" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> All Leads</a>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Recently Viewed</a>
				                        <a class="dropdown-item" href="#">Items I'm following</a>
				                        <a class="dropdown-item" href="#">All Leads</a>
				                        <a class="dropdown-item" href="#">All Closed Leads</a>
				                        <a class="dropdown-item" href="#">All Open Leads</a>
				                        <a class="dropdown-item" href="#">Converted Leads</a>
				                        <a class="dropdown-item" href="#">My Open Leads</a>
				                        <a class="dropdown-item" href="#">Todays Leads</a>
									</div>
								</div>
							</div>
							<div class="col text-end">
								<ul class="list-inline-item ps-0">
									
					                <li class="dropdown list-inline-item add-lists">
										<a class="dropdown-toggle recently-viewed pe-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
											<div class="nav-profile-text">
					                          <i class="fa fa-cog" aria-hidden="true"></i>
					                        </div>
										</a>
										<div class="dropdown-menu">
											<a class="dropdown-item" href="#">Choose Columns</a>
					                        <a class="dropdown-item" href="#">Group Columns</a>
					                        <a class="dropdown-item" href="#">Sharing Settings</a>
					                        <a class="dropdown-item" href="#">Rename</a>
					                        <a class="dropdown-item" href="#">Clone</a>
					                        <a class="dropdown-item" href="#">Delete</a>
										</div>
									</li>
									<li class="dropdown list-inline-item add-lists">
										<a class="dropdown-toggle recently-viewed pe-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
											<div class="nav-profile-text">
					                          <i class="fa fa-th" aria-hidden="true"></i>
					                        </div>
										</a>
										<div class="dropdown-menu">
											<router-link class="dropdown-item" to="/leads">List View</router-link>
					                        <router-link class="dropdown-item" to="/kanban-view">Kanban View</router-link>
					                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#add-new-list">Add New List View</a>
										</div>
									</li>
					                
					                <li class="list-inline-item">
					                    <button class="add btn btn-gradient-primary font-weight-bold text-white todo-list-add-btn btn-rounded" id="add-task" data-bs-toggle="modal" data-bs-target="#add_lead">New Lead</button>
					                </li>
					            </ul>
							</div>
						</div>
					</div>
</template>