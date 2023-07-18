<template>
 <div class="row">
                                    <div class="col-md-6 d-flex">
                                        <div class="card profile-box flex-fill">
                                            <div class="card-body">
                                                <h3 class="card-title">Bank information</h3>
                                                <ul class="personal-info">
                                                    <li>
                                                        <div class="title">Bank name</div>
                                                        <div class="text">ICICI Bank</div>
                                                    </li>
                                                    <li>
                                                        <div class="title">Bank account No.</div>
                                                        <div class="text">159843014641</div>
                                                    </li>
                                                    <li>
                                                        <div class="title">IFSC Code</div>
                                                        <div class="text">ICI24504</div>
                                                    </li>
                                                    <li>
                                                        <div class="title">PAN No</div>
                                                        <div class="text">TC000Y56</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-flex">
                                        <div class="card profile-box flex-fill">
                                            <div class="card-body">
                                                <h3 class="card-title">Family Informations <a href="javascript:void(0);" class="edit-icon" data-bs-toggle="modal" data-bs-target="#family_info_modal"><i class="fa fa-pencil"></i></a></h3>
                                                <div class="table-responsive">
                                                    <table class="table table-nowrap">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Relationship</th>
                                                                <th>Date of Birth</th>
                                                                <th>Phone</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Leo</td>
                                                                <td>Brother</td>
                                                                <td>Feb 16th, 2019</td>
                                                                <td>9876543210</td>
                                                                <td class="text-end">
                                                                    <div class="dropdown dropdown-action">
                                                                        <a aria-expanded="false" data-bs-toggle="dropdown" class="action-icon dropdown-toggle" href="#"><i class="material-icons">more_vert</i></a>
                                                                        <div class="dropdown-menu dropdown-menu-right">
                                                                            <a href="javascript:void(0);" class="dropdown-item"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                                            <a href="javascript:void(0);" class="dropdown-item"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
</template>