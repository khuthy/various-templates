import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { pageSelection, apiResultFormat, invoicesDraft } from 'src/app/shared/models/models';
import { Sort } from '@angular/material/sort';
import { DataService } from "src/app/shared/data/data.service";
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-invoices-draft',
  templateUrl: './invoices-draft.component.html',
  styleUrls: ['./invoices-draft.component.scss']
})
export class InvoicesDraftComponent implements OnInit {
  public routes = routes;
  public invoicesDraft: Array<invoicesDraft> = [];
  dataSource!: MatTableDataSource<invoicesDraft>;
  select_box_open: Array<string> = [];

  public showFilter = false;
  public searchDataValue = '';
// pagination variables
public lastIndex = 0;
public pageSize = 10;
public totalData = 0;
public skip = 0;
public limit: number = this.pageSize;
public pageIndex = 0;
public serialNumberArray: Array<number> = [];
public currentPage = 1;
public pageNumberArray: Array<number> = [];
public pageSelection: Array<pageSelection> = [];
public totalPages = 0;
//** / pagination variables

 
  constructor(private data: DataService ) { }

  ngOnInit() {
    this.getTableData();
  }
  private getTableData(): void {
    this.invoicesDraft = [];
    this.serialNumberArray = [];

    this.data.getInvoicesDraft().subscribe((data: apiResultFormat) => {
      this.totalData = data.totalData;
      data.data.map((res: invoicesDraft, index: number) => {
        const serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.invoicesDraft.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<invoicesDraft>(this.invoicesDraft);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.invoicesDraft = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.invoicesDraft.slice();
  /* eslint-disable @typescript-eslint/no-explicit-any */
    if (!sort.active || sort.direction === '') {
      this.invoicesDraft = data;
    } else {
      this.invoicesDraft = data.sort((a, b) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    }
  }

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    this.getTableData();
  }

  public PageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getTableData();
  }

  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
  }

  public openBox(val: string): void {
    if (this.select_box_open[0] != val) {
      this.select_box_open[0] = val;
    } else {
      this.select_box_open = [];
    }
  }
}
