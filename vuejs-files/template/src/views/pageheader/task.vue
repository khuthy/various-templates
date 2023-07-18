<template>
<div class="page-header pt-3 mb-0 ">
						<div class="row">
							<div class="col">
								<div class="dropdown">
									<a class="dropdown-toggle recently-viewed" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> All Tasks </a>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Items I'm following</a>
			                        	<a class="dropdown-item" href="#">All Completed Tasks</a>
			                        	<a class="dropdown-item" href="#">My Delegated Tasks</a>
			                        	<a class="dropdown-item" href="#">My Completed Tasks</a>
			                        	<a class="dropdown-item" href="#">My Open Tasks</a>
			                        	<a class="dropdown-item" href="#">My Tasks</a>
			                        	<a class="dropdown-item" href="#">All Tasks</a>
									</div>
								</div>
							</div>
							<div class="col text-end">
								<ul class="list-inline-item ps-0">
					                <li class="nav-item dropdown list-inline-item add-lists">
					                    <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
					                        <div class="nav-profile-text">
					                          <i class="fa fa-th" aria-hidden="true"></i>
					                        </div>
					                    </a>
					                    <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
					                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#add-new-list">Add New List View</a>
					                    </div>
					                </li>
					                <li class="list-inline-item">
					                    <button class="add btn btn-gradient-primary font-weight-bold text-white todo-list-add-btn btn-rounded" id="add-task" data-bs-toggle="modal" data-bs-target="#add_task">New Task</button>
					                </li>
					            </ul>
							</div>
						</div>
					</div>
</template>