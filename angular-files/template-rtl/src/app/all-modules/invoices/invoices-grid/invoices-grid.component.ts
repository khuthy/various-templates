import { Component } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
import { DataService } from "src/app/shared/data/data.service";
import { invoicesgrid } from 'src/app/shared/models/models';
@Component({
  selector: 'app-invoices-grid',
  templateUrl: './invoices-grid.component.html',
  styleUrls: ['./invoices-grid.component.scss']
})
export class InvoicesGridComponent {
  select_box_open: Array<string> = [];

  public routes = routes;
  public invoicesGrid : invoicesgrid[] = [];
  public url = "invoicesGrid";


  constructor(private data: DataService) { 
    this.invoicesGrid = this.data.invoicesGrid;
  }

 
  public openBox(val: string): void {
    if (this.select_box_open[0] != val) {
      this.select_box_open[0] = val;
    } else {
      this.select_box_open = [];
    }
  }
}
