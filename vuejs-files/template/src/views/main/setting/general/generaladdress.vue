<template>
    <div class="card-body pt-0">
        <form>
            <div class="settings-form">
                <div class="form-group">
                    <label>Address Line 1 <span class="star-red">*</span></label>
                    <input type="text" class="form-control" placeholder="Enter Address Line 1">
                </div>
                <div class="form-group">
                    <label>Address Line 2 <span class="star-red">*</span></label>
                    <input type="text" class="form-control" placeholder="Enter Address Line 2">
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>City <span class="star-red">*</span></label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>State/Province <span class="star-red">*</span></label>
                            <select class="select form-control">
                                <option selected="selected">Select</option>
                                <option>California</option>
                                <option>Tasmania</option>  
                                <option>Auckland</option>
                                <option>Marlborough</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Zip/Postal Code <span class="star-red">*</span></label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Country <span class="star-red">*</span></label>
                            <select class="select form-control">
                                <option selected="selected">Select</option>
                                <option>India</option>
                                <option>London</option>  
                                <option>France</option>
                                <option>USA</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group mb-0">
                    <div class="settings-btns">
                        <button type="submit" class="border-0 btn btn-primary btn-gradient-primary btn-rounded">Update</button>&nbsp;&nbsp;
                        <button type="submit" class="btn btn-secondary btn-rounded">Cancel</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>