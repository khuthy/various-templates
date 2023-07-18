<template>
    <div class="panel panel-primary kanban-col me-0">
        <div class="panel-heading bg-secondary bg-transparent p-0">
            <h4 class="closed">Closed Lost (4)</h4>
            <!-- <i class="fa fa-2x fa-plus-circle pull-right"></i> -->
        </div>
        <div class="panel-body slimScrollDiv">
            <div id="closed" class="kanban-centered">

                <article class="kanban-entry grab" id="item7" draggable="true">
                    <div class="kanban-entry-inner">

                        <div class="kanban-label card bg-gradient-warning card-img-holder text-white h-100" data-bs-toggle="modal" data-bs-target="#leads-details">
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