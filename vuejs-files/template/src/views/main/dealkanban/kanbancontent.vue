<template>
    <div class="panel panel-primary kanban-col m-0">
        <div class="panel-heading bg-transparent p-0">
            <h4>Not Contacted (1)</h4>
            <!-- <i class="fa fa-2x fa-plus-circle pull-right"></i> -->
        </div>
        <div class="panel-body slimScrollDiv">
            <div id="TODO" class="kanban-centered">

                <article class="kanban-entry grab" id="item1" draggable="true">
                    <div class="kanban-entry-inner">
                        <div class="kanban-label card bg-gradient-danger card-img-holder text-white h-100" data-bs-toggle="modal" data-bs-target="#leads-details">
                            <img src="../../../assets/img/circle.png" class="card-img-absolute" alt="circle-image">
                            <h2 data-bs-toggle="modal" data-bs-target="#leads">Anne Lynch</h2>
                           
                            <ul class="list-unstyled">
                              <li>VB of Sales</li>
                              <li>Howwe-Blanda LLC</li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article class="kanban-entry grab" id="item2" draggable="true">
                    <div class="kanban-entry-inner">
                        <div class="kanban-label card bg-gradient-info card-img-holder text-white h-100" data-bs-toggle="modal" data-bs-target="#leads-details">
                            <img src="../../../assets/img/circle.png" class="card-img-absolute" alt="circle-image">
                            <h2 data-bs-toggle="modal" data-bs-target="#leads">David Mathews</h2>
                            
                            <ul class="list-unstyled">
                              <li>Finance Director</li>
                              <li>Ebert and Sons</li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article class="kanban-entry grab" id="item4" draggable="true">
                    <div class="kanban-entry-inner">
                        <div class="kanban-label card bg-gradient-success card-img-holder text-white h-100" data-bs-toggle="modal" data-bs-target="#leads-details">
                            <img src="../../../assets/img/circle.png" class="card-img-absolute" alt="circle-image">
                           <h2 data-bs-toggle="modal" data-bs-target="#leads">Douglas Baker</h2>
                           
                            <ul class="list-unstyled">
                              <li>Finance Director</li>
                              <li>Ebert and Sons</li>
                            </ul>
                        </div>
                    </div>
                </article>

            </div>
        </div>
      
    </div>
</template>