@extends('layout.mainlayout')
@section('content')		
<!-- Page Wrapper -->
<div class="page-wrapper">
			
            <!-- Page Content -->
            <div class="content container-fluid">
                
                @component('components.breadcrumb')                
                    @slot('title') Components  @endslot
                    @slot('li_1') Dashboard @endslot
                    @slot('li_2') Components @endslot
                    @slot('li_3') <i class="la la-puzzle-piece"></i> @endslot
                @endcomponent
                
                <!-- Alerts -->
                <section class="comp-section" id="comp_alerts">
                    <h3 class="section-title">Alerts</h3>
                    <div>
                        <div class="alert alert-primary alert-dismissible fade show" role="alert">
                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Warning!</strong> There was a problem with your <a href="#" class="alert-link">network connection</a>.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Error!</strong> A <a href="#" class="alert-link">problem</a> has been occurred while submitting your data.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Success!</strong> Your <a href="#" class="alert-link">message</a> has been sent successfully.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div class="alert alert-info alert-dismissible fade show" role="alert">
                            <strong>Note!</strong> Please read the <a href="#" class="alert-link">comments</a> carefully.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div class="alert alert-light alert-dismissible fade show" role="alert">
                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div class="alert alert-dark alert-dismissible fade show" role="alert">
                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                </section>
                <!-- /Alerts -->
                
                <!-- Breadcrumbs -->
                <section class="comp-section" id="comp_breadcrumbs">
                    <h3 class="section-title">Breadcrumbs</h3>
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page">Home</li>
                            </ol>
                        </nav>

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Products</li>
                            </ol>
                        </nav>

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Products</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Accessories</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                <!-- /Breadcrumbs -->
                
                <!-- Buttons -->
                <section class="comp-section comp-buttons" id="comp_buttons">
                    <h3 class="section-title">Buttons</h3>
                    <div>
                        <h4 class="card-title">Default Button</h4>
                        <button type="button" class="btn btn-primary">Primary</button>
                        <button type="button" class="btn btn-secondary">Secondary</button>
                        <button type="button" class="btn btn-success">Success</button>
                        <button type="button" class="btn btn-danger">Danger</button>
                        <button type="button" class="btn btn-warning">Warning</button>
                        <button type="button" class="btn btn-info">Info</button>
                        <button type="button" class="btn btn-light">Light</button>
                        <button type="button" class="btn btn-dark">Dark</button>
                        <button type="button" class="btn btn-link">Link</button>
                        <hr>
                        <h4 class="card-title">Button Sizes</h4>
                        <p>
                            <button type="button" class="btn btn-primary btn-lg">Primary</button>
                            <button type="button" class="btn btn-secondary btn-lg">Secondary</button>
                            <button type="button" class="btn btn-success btn-lg">Success</button>
                            <button type="button" class="btn btn-danger btn-lg">Danger</button>
                            <button type="button" class="btn btn-warning btn-lg">Warning</button>
                            <button type="button" class="btn btn-info btn-lg">Info</button>
                            <button type="button" class="btn btn-light btn-lg">Light</button>
                            <button type="button" class="btn btn-dark btn-lg">Dark</button>
                        </p>
                        <p>
                            <button type="button" class="btn btn-primary">Primary</button>
                            <button type="button" class="btn btn-secondary">Secondary</button>
                            <button type="button" class="btn btn-success">Success</button>
                            <button type="button" class="btn btn-danger">Danger</button>
                            <button type="button" class="btn btn-warning">Warning</button>
                            <button type="button" class="btn btn-info">Info</button>
                            <button type="button" class="btn btn-light">Light</button>
                            <button type="button" class="btn btn-dark">Dark</button>
                        </p>
                        <p>
                            <button type="button" class="btn btn-primary btn-sm">Primary</button>
                            <button type="button" class="btn btn-secondary btn-sm">Secondary</button>
                            <button type="button" class="btn btn-success btn-sm">Success</button>
                            <button type="button" class="btn btn-danger btn-sm">Danger</button>
                            <button type="button" class="btn btn-warning btn-sm">Warning</button>
                            <button type="button" class="btn btn-info btn-sm">Info</button>
                            <button type="button" class="btn btn-light btn-sm">Light</button>
                            <button type="button" class="btn btn-dark btn-sm">Dark</button>
                        </p>
                        <hr>
                        <h4 class="card-title">Button Groups</h4>
                        <br>
                        <div class="btn-toolbar">
                            <div class="btn-group btn-group-lg">
                                <button type="button" class="btn btn-primary">Left</button>
                                <button type="button" class="btn btn-primary">Middle</button>
                                <button type="button" class="btn btn-primary">Right</button>
                            </div>
                        </div>
                        <br>
                        <div class="btn-toolbar">
                            <div class="btn-group">
                                <button type="button" class="btn btn-primary">Left</button>
                                <button type="button" class="btn btn-primary">Middle</button>
                                <button type="button" class="btn btn-primary">Right</button>
                            </div>
                        </div>
                        <br>
                        <div class="btn-toolbar">
                            <div class="btn-group btn-group-sm">
                                <button type="button" class="btn btn-primary">Left</button>
                                <button type="button" class="btn btn-primary">Middle</button>
                                <button type="button" class="btn btn-primary">Right</button>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Buttons -->
                
                <!-- Cards -->
                <section class="comp-section comp-cards" id="comp_cards">
                    <h3 class="section-title">Cards</h3>
                
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4 d-flex">
                            <div class="card flex-fill">
                                <img alt="" src="{{ URL::asset('/assets/img/video-call.jpg')}}" class="card-img-top">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Card with image and links</h5>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a class="card-link" href="#">Card link</a>
                                    <a class="card-link" href="#">Another link</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 d-flex">
                            <div class="card flex-fill">
                                <img alt="" src="{{ URL::asset('/assets/img/video-call.jpg')}}" class="card-img-top">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Card with image and button</h5>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a class="btn btn-primary" href="#">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 d-flex">
                            <div class="card flex-fill">
                                <img alt="" src="{{ URL::asset('/assets/img/video-call.jpg')}}" class="card-img-top">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Card with image and list</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4 d-flex">
                            <div class="card flex-fill">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Card with links</h5>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a class="card-link" href="#">Card link</a>
                                    <a class="card-link" href="#">Another link</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 d-flex">
                            <div class="card flex-fill">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Card with button</h5>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a class="btn btn-primary" href="#">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 d-flex">
                            <div class="card flex-fill">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Card with list</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4 d-flex">
                            <div class="card flex-fill">
                                <div class="card-header">
                                    This is my header
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                <div class="card-footer text-muted">
                                    This is my footer
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 d-flex">
                            <div class="card flex-fill">
                                <div class="card-header">
                                    <ul role="tablist" class="nav nav-tabs card-header-tabs float-end">
                                        <li class="nav-item">
                                            <a href="#tab-1" data-bs-toggle="tab" class="nav-link active">Active</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#tab-2" data-bs-toggle="tab" class="nav-link">Link</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#tab-3" data-bs-toggle="tab" class="nav-link disabled">Disabled</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-body">
                                    <div class="tab-content pt-0">
                                        <div role="tabpanel" id="tab-1" class="tab-pane fade show active">
                                            <h5 class="card-title">Card with tabs</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a class="btn btn-primary" href="#">Go somewhere</a>
                                        </div>
                                        <div role="tabpanel" id="tab-2" class="tab-pane fade text-center">
                                            <h5 class="card-title">Card with tabs</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a class="btn btn-primary" href="#">Go somewhere</a>
                                        </div>
                                        <div role="tabpanel" id="tab-3" class="tab-pane fade">
                                            <h5 class="card-title">Card with tabs</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a class="btn btn-primary" href="#">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-12 col-md-6 col-lg-4 d-flex">
                            <div class="card flex-fill">
                                <div class="card-header">
                                    <ul role="tablist" class="nav nav-pills card-header-pills float-end">
                                        <li class="nav-item">
                                            <a href="#tab-4" data-bs-toggle="tab" class="nav-link active">Active</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#tab-5" data-bs-toggle="tab" class="nav-link">Link</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#tab-6" data-bs-toggle="tab" class="nav-link disabled">Disabled</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-body">
                                    <div class="tab-content">
                                        <div role="tabpanel" id="tab-4" class="tab-pane fade show active">
                                            <h5 class="card-title">Card with pills</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a class="btn btn-primary" href="#">Go somewhere</a>
                                        </div>
                                        <div role="tabpanel" id="tab-5" class="tab-pane fade text-center">
                                            <h5 class="card-title">Card with pills</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a class="btn btn-primary" href="#">Go somewhere</a>
                                        </div>
                                        <div role="tabpanel" id="tab-6" class="tab-pane fade">
                                            <h5 class="card-title">Card with pills</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a class="btn btn-primary" href="#">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- /Cards -->
                
                <!-- Dropdowns -->
                <section class="comp-section comp-dropdowns" id="comp_dropdowns">
                    <h3 class="section-title">Dropdowns</h3>
                    <div>
                        <h4 class="card-title">Dropdowns within Text</h4>
                        <div class="dropdown">
                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                            </div>
                        </div>
                        <hr>
                        <h4 class="card-title">Dropdowns within Buttons</h4>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        <hr>
                        <h4 class="card-title">Split button dropdowns</h4>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary">Action</button>
                            <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-secondary">Action</button>
                            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-info">Action</button>
                            <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-success">Action</button>
                            <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-warning">Action</button>
                            <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-danger">Action</button>
                            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- /Dropdowns -->

                <!-- Pagination -->
                <section class="comp-section" id="comp_pagination">
                    <h3 class="section-title">Pagination</h3>
                        <div class="pagination-box">
                            <div>
                                <ul class="pagination">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active">
                                        <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="pagination pagination-lg">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active">
                                        <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <ul class="pagination pagination-sm">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active">
                                        <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </section>
                <!-- /Pagination -->
                
                <!-- Progress -->
                <section class="comp-section" id="comp_progress">
                    <h3 class="section-title">Progress</h3>
                    <div class="progress-example">
                        <h5 class="text-muted">Large Progress Bars</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div>
                                    <div class="progress progress-lg">
                                        <div class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-lg">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-lg">
                                        <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-lg">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-lg">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="progress progress-lg">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-lg">
                                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-lg">
                                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-lg">
                                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-lg">
                                    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-muted">Default Progress Bars</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-muted">Medium Progress Bars</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div>
                                    <div class="progress progress-md">
                                        <div class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-md">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-md">
                                        <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-md">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-md">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="progress progress-md">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-md">
                                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-md">
                                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-md">
                                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-md">
                                    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-muted">Small Progress Bars</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="progress progress-sm">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-sm">
                                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-sm">
                                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-sm">
                                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-sm">
                                    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-muted">Extra Small Progress Bars</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar w-75" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="progress progress-xs">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-xs">
                                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-xs">
                                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-xs">
                                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress progress-xs">
                                    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- /Progress -->
                
                <!-- Tabs -->
                <section class="comp-section" id="comp_tabs">
                    <h3 class="section-title">Tabs</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Basic tabs</h4>
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item"><a class="nav-link active" href="#basictab1" data-bs-toggle="tab">Home</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#basictab2" data-bs-toggle="tab">Profile</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#basictab3" data-bs-toggle="tab">Messages</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane show active" id="basictab1">
                                            Tab content 1
                                        </div>
                                        <div class="tab-pane" id="basictab2">
                                            Tab content 2
                                        </div>
                                        <div class="tab-pane" id="basictab3">
                                            Tab content 3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Basic justified tabs</h4>
                                    <ul class="nav nav-tabs nav-justified">
                                        <li class="nav-item"><a class="nav-link active" href="#basic-justified-tab1" data-bs-toggle="tab">Home</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#basic-justified-tab2" data-bs-toggle="tab">Profile</a></li>
                                        <li class="nav-item dropdown">
                                            <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">Dropdown</a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a class="dropdown-item" href="#basic-justified-tab3" data-bs-toggle="tab">Dropdown 1</a>
                                                <a class="dropdown-item" href="#basic-justified-tab4" data-bs-toggle="tab">Dropdown 2</a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane show active" id="basic-justified-tab1">
                                            Tab content 1
                                        </div>
                                        <div class="tab-pane" id="basic-justified-tab2">
                                            Tab content 2
                                        </div>
                                        <div class="tab-pane" id="basic-justified-tab3">
                                            Tab content 3
                                        </div>
                                        <div class="tab-pane" id="basic-justified-tab4">
                                            Tab content 4
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Top line tabs</h4>
                                    <ul class="nav nav-tabs nav-tabs-top">
                                        <li class="nav-item"><a class="nav-link active" href="#top-tab1" data-bs-toggle="tab">Home</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#top-tab2" data-bs-toggle="tab">Profile</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#top-tab3" data-bs-toggle="tab">Messages</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane show active" id="top-tab1">
                                            Tab content 1
                                        </div>
                                        <div class="tab-pane" id="top-tab2">
                                            Tab content 2
                                        </div>
                                        <div class="tab-pane" id="top-tab3">
                                            Tab content 3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Top line justified</h4>
                                    <ul class="nav nav-tabs nav-tabs-top nav-justified">
                                        <li class="nav-item"><a class="nav-link active" href="#top-justified-tab1" data-bs-toggle="tab">Home</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#top-justified-tab2" data-bs-toggle="tab">Profile</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#top-justified-tab3" data-bs-toggle="tab">Messages</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane show active" id="top-justified-tab1">
                                            Tab content 1
                                        </div>
                                        <div class="tab-pane" id="top-justified-tab2">
                                            Tab content 2
                                        </div>

                                        <div class="tab-pane" id="top-justified-tab3">
                                            Tab content 3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="card-title">Bottom line tabs</h6>
                                    <ul class="nav nav-tabs nav-tabs-bottom">
                                        <li class="nav-item"><a class="nav-link active" href="#bottom-tab1" data-bs-toggle="tab">Home</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#bottom-tab2" data-bs-toggle="tab">Profile</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#bottom-tab3" data-bs-toggle="tab">Messages</a></li>
                                    </ul>

                                    <div class="tab-content">
                                        <div class="tab-pane show active" id="bottom-tab1">
                                            Tab content 1
                                        </div>
                                        <div class="tab-pane" id="bottom-tab2">
                                            Tab content 2
                                        </div>
                                        <div class="tab-pane" id="bottom-tab3">
                                            Tab content 3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="card-title">Bottom line justified</h6>
                                    <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                                        <li class="nav-item"><a class="nav-link active" href="#bottom-justified-tab1" data-bs-toggle="tab">Home</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#bottom-justified-tab2" data-bs-toggle="tab">Profile</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#bottom-justified-tab3" data-bs-toggle="tab">Messages</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane show active" id="bottom-justified-tab1">
                                            Tab content 1
                                        </div>
                                        <div class="tab-pane" id="bottom-justified-tab2">
                                            Tab content 2
                                        </div>
                                        <div class="tab-pane" id="bottom-justified-tab3">
                                            Tab content 3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Solid tabs</h4>
                                    <ul class="nav nav-tabs nav-tabs-solid">
                                        <li class="nav-item"><a class="nav-link active" href="#solid-tab1" data-bs-toggle="tab">Home</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#solid-tab2" data-bs-toggle="tab">Profile</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#solid-tab3" data-bs-toggle="tab">Messages</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane show active" id="solid-tab1">
                                            Tab content 1
                                        </div>
                                        <div class="tab-pane" id="solid-tab2">
                                            Tab content 2
                                        </div>
                                        <div class="tab-pane" id="solid-tab3">
                                            Tab content 3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Solid justified</h4>
                                    <ul class="nav nav-tabs nav-tabs-solid nav-justified">
                                        <li class="nav-item"><a class="nav-link active" href="#solid-justified-tab1" data-bs-toggle="tab">Home</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#solid-justified-tab2" data-bs-toggle="tab">Profile</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#solid-justified-tab3" data-bs-toggle="tab">Messages</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane show active" id="solid-justified-tab1">
                                            Tab content 1
                                        </div>
                                        <div class="tab-pane" id="solid-justified-tab2">
                                            Tab content 2
                                        </div>
                                        <div class="tab-pane" id="solid-justified-tab3">
                                            Tab content 3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Solid Rounded</h4>
                                    <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                                        <li class="nav-item"><a class="nav-link active" href="#solid-rounded-tab1" data-bs-toggle="tab">Home</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#solid-rounded-tab2" data-bs-toggle="tab">Profile</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#solid-rounded-tab3" data-bs-toggle="tab">Messages</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane show active" id="solid-rounded-tab1">
                                            Tab content 1
                                        </div>
                                        <div class="tab-pane" id="solid-rounded-tab2">
                                            Tab content 2
                                        </div>
                                        <div class="tab-pane" id="solid-rounded-tab3">
                                            Tab content 3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Rounded justified</h4>
                                    <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                                        <li class="nav-item"><a class="nav-link active" href="#solid-rounded-justified-tab1" data-bs-toggle="tab">Home</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#solid-rounded-justified-tab2" data-bs-toggle="tab">Profile</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#solid-rounded-justified-tab3" data-bs-toggle="tab">Messages</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane show active" id="solid-rounded-justified-tab1">
                                            Tab content 1
                                        </div>
                                        <div class="tab-pane" id="solid-rounded-justified-tab2">
                                            Tab content 2
                                        </div>
                                        <div class="tab-pane" id="solid-rounded-justified-tab3">
                                            Tab content 3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- /Tabs -->

                <!-- Typography -->
                <section class="comp-section" id="comp_typography">
                    <h3 class="section-title">Typography</h3>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Headings</h4>
                                    <h1>h1. Bootstrap heading</h1>
                                    <h2>h2. Bootstrap heading</h2>
                                    <h3>h3. Bootstrap heading</h3>
                                    <h4>h4. Bootstrap heading</h4>
                                    <h5>h5. Bootstrap heading</h5>
                                    <h6>h6. Bootstrap heading</h6>
                                </div>
                            </div>
                            
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Blockquotes</h4>
                                    <blockquote>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    </blockquote>
                                    <blockquote class="blockquote">
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Text elements</h4>
                                    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                                    <p><del>This line of text is meant to be treated as deleted text.</del></p>
                                    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                                    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                                    <p><u>This line of text will render as underlined</u></p>
                                    <p><small>This line of text is meant to be treated as fine print.</small></p>
                                    <p><strong>This line rendered as bold text.</strong></p>
                                    <p><em>This line rendered as italicized text.</em></p>
                                    <p class="text-monospace">This is in monospace</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Coloured Link</h4>
                                    <p class="text-primary">.text-primary</p>
                                    <p class="text-secondary">.text-secondary</p>
                                    <p class="text-success">.text-success</p>
                                    <p class="text-danger">.text-danger</p>
                                    <p class="text-warning">.text-warning</p>
                                    <p class="text-info">.text-info</p>
                                    <p class="text-light bg-dark">.text-light</p>
                                    <p class="text-dark">.text-dark</p>
                                    <p class="text-muted">.text-muted</p>
                                    <p class="text-white bg-dark">.text-white</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Coloured text</h4>
                                    <p><a href="#" class="text-primary">Primary link</a></p>
                                    <p><a href="#" class="text-secondary">Secondary link</a></p>
                                    <p><a href="#" class="text-success">Success link</a></p>
                                    <p><a href="#" class="text-danger">Danger link</a></p>
                                    <p><a href="#" class="text-warning">Warning link</a></p>
                                    <p><a href="#" class="text-info">Info link</a></p>
                                    <p><a href="#" class="text-light bg-dark">Light link</a></p>
                                    <p><a href="#" class="text-dark">Dark link</a></p>
                                    <p><a href="#" class="text-muted">Muted link</a></p>
                                    <p><a href="#" class="text-white bg-dark">White link</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-0">
                                <div class="card-body">
                                    <h4 class="card-title">Bullet Lists</h4>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Consectetur adipiscing elit</li>
                                        <li>Integer molestie lorem at massa</li>
                                        <li>Facilisis in pretium nisl aliquet</li>
                                        <li>Nulla volutpat aliquam velit
                                            <ul>
                                                <li>Phasellus iaculis neque</li>
                                                <li>Purus sodales ultricies</li>
                                                <li>Vestibulum laoreet porttitor sem</li>
                                                <li>Ac tristique libero volutpat at</li>
                                            </ul>
                                        </li>
                                        <li>Faucibus porta lacus fringilla vel</li>
                                        <li>Aenean sit amet erat nunc</li>
                                        <li>Eget porttitor lorem</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-0">
                                <div class="card-body">
                                    <h4 class="card-title">Bullet Lists</h4>
                                    <ol>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Consectetur adipiscing elit</li>
                                        <li>Integer molestie lorem at massa</li>
                                        <li>Facilisis in pretium nisl aliquet</li>
                                        <li>Nulla volutpat aliquam velit
                                            <ul>
                                                <li>Phasellus iaculis neque</li>
                                                <li>Purus sodales ultricies</li>
                                                <li>Vestibulum laoreet porttitor sem</li>
                                                <li>Ac tristique libero volutpat at</li>
                                            </ul>
                                        </li>
                                        <li>Faucibus porta lacus fringilla vel</li>
                                        <li>Aenean sit amet erat nunc</li>
                                        <li>Eget porttitor lorem</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-0">
                                <div class="card-body">
                                    <h4 class="card-title">Unstyled Lists</h4>
                                    <ul class="list-unstyled">
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Consectetur adipiscing elit</li>
                                        <li>Integer molestie lorem at massa</li>
                                        <li>Facilisis in pretium nisl aliquet</li>
                                        <li>Nulla volutpat aliquam velit
                                            <ul>
                                                <li>Phasellus iaculis neque</li>
                                                <li>Purus sodales ultricies</li>
                                                <li>Vestibulum laoreet porttitor sem</li>
                                                <li>Ac tristique libero volutpat at</li>
                                            </ul>
                                        </li>
                                        <li>Faucibus porta lacus fringilla vel</li>
                                        <li>Aenean sit amet erat nunc</li>
                                        <li>Eget porttitor lorem</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- /Typography -->
                
            </div>
            <!-- /Page Content -->
            
        </div>
        <!-- /Page Wrapper -->

    </div>
    <!-- /Main Wrapper -->
    @component('components.modal-popup')                
    @endcomponent
    @component('components.theme-settings')                
    @endcomponent
@endsection