<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title mb-0">Two Column Horizontal Form</h4>
            </div>
            <div class="card-body">
                <h4 class="card-title">Personal Information</h4>
                <form action="#">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">First Name</label>
                                <div class="col-lg-8">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Last Name</label>
                                <div class="col-lg-8">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Gender</label>
                                <div class="col-lg-8">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" id="gender_male" value="option1" checked>
                                        <label class="form-check-label" for="gender_male">
                                        Male
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" id="gender_female" value="option2">
                                        <label class="form-check-label" for="gender_female">
                                        Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Blood Group</label>
                                <div class="col-lg-8">
                                    <select class="select">
                                        <option>Select</option>
                                        <option value="1">A+</option>
                                        <option value="2">O+</option>
                                        <option value="3">B+</option>
                                        <option value="4">AB+</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Username</label>
                                <div class="col-lg-8">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Email</label>
                                <div class="col-lg-8">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Password</label>
                                <div class="col-lg-8">
                                    <input type="password" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Repeat Password</label>
                                <div class="col-lg-8">
                                    <input type="password" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 class="card-title">Address</h4>
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Address Line 1</label>
                                <div class="col-lg-8">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Address Line 2</label>
                                <div class="col-lg-8">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">State</label>
                                <div class="col-lg-8">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">City</label>
                                <div class="col-lg-8">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Country</label>
                                <div class="col-lg-8">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label">Postal Code</label>
                                <div class="col-lg-8">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-end">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>