<template>
<!-- Page Header -->
<div class="page-header invoices-page-header">
    <div class="row align-items-center">
        <div class="col">
            <ul class="breadcrumb invoices-breadcrumb">
                <li class="breadcrumb-item invoices-breadcrumb-item">
                    <router-link to="/invoices">
                        <i class="fa fa-chevron-left"></i> Back to Invoice List
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="col-auto">
            <div class="invoices-create-btn">
                <a class="invoices-preview-link" href="#" data-bs-toggle="modal" data-bs-target="#invoices_preview"><i class="fa fa-eye"></i> Preview</a>
                <a  href="#" data-bs-toggle="modal" data-bs-target="#delete_invoices_details" class="btn delete-invoice-btn">
                    Delete Invoice
                </a>
                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#save_invocies_details" class="btn save-invoice-btn ms-1">
                    Save Draft
                </a>
            </div>
        </div>
    </div>
</div>
<!-- /Page Header -->
</template>