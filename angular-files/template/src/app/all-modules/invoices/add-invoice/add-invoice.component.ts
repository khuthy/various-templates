import { Component } from '@angular/core';
import { routes } from 'src/app/shared/core.index';
@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent  {
  public routes = routes;
  select_box_open: Array<string> = [];
  public invoiceArray = [1];
  public serviceArray = [0];
  public discountArray = [0];
  recurring = false;
  recurringText = false;
  
  public addItem():void {
    this.invoiceArray.push(1)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public deleteItem(index:any):void {
    this.invoiceArray.splice(index, 1)
  }
  public addService():void {
    this.serviceArray.push(1)
  }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public deleteService(index:any):void {
    this.serviceArray.splice(index, 1)
  }
  public addDiscount():void {
    this.discountArray.push(1)
  }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  public deleteDiscount(index:any):void {
    this.discountArray.splice(index, 1)
  }
  public openBox(val: string): void {
    if (this.select_box_open[0] != val) {
      this.select_box_open[0] = val;
    } else {
      this.select_box_open = [];
    }
  }
  showRecurring(){
    this.recurring = !this.recurring
  }
  showRecurringText(){
    this.recurringText = !this.recurringText;
  }
}

  
