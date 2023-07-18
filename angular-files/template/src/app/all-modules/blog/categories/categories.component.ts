import { Component, OnInit} from '@angular/core';
import { routes } from 'src/app/shared/core.index';
import { DataService } from "src/app/shared/data/data.service";
import { MatTableDataSource } from "@angular/material/table";
import { pageSelection, apiResultFormat, categories } from 'src/app/shared/models/models';
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
public routes = routes;
public categories: Array<categories> = [];
dataSource!: MatTableDataSource<categories>;

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
  this.categories = [];
  this.serialNumberArray = [];

  this.data.getCategories().subscribe((data: apiResultFormat) => {
    this.totalData = data.totalData;
    data.data.map((res: categories, index: number) => {
      const serialNumber = index + 1;
      if (index >= this.skip && serialNumber <= this.limit) {
        res.id = serialNumber;
        this.categories.push(res);
        this.serialNumberArray.push(serialNumber);
      }
    });
    this.dataSource = new MatTableDataSource<categories>(this.categories);
    this.calculateTotalPages(this.totalData, this.pageSize);
  });
}

public searchData(value: string): void {
  this.dataSource.filter = value.trim().toLowerCase();
  this.categories = this.dataSource.filteredData;
}

public sortData(sort: Sort) {
  const data = this.categories.slice();
  /* eslint-disable @typescript-eslint/no-explicit-any */
  if (!sort.active || sort.direction === '') {
    this.categories = data;
  } else {
    this.categories = data.sort((a, b) => {
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
}
