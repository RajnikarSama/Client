import { Component } from '@angular/core';
import { DataService } from './data.service';
import { DataStateChangeEvent, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.css']
})
export class KendoGridComponent {
  public gridData: any[] = []; // Your data source
  public pageSize = 10;
  public skip = 0;
  public sort: any[] = [];
  public globalFilter: any;
  
  constructor(public _service: DataService) {
  }

  ngOnInit(){
    this.loadData();
  }

  private loadData(): void {
    this.gridData = [];
    this._service.getStudents().subscribe(result => {
      result.forEach(student => this.gridData.push(student));
    });
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadData();
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadData();
  }

  public search(): void {
    this.skip = 0;
    this.loadData();
  }

  public onStateChange(state: any): void {
    this.skip = state.skip;
    this.pageSize = state.take;
    this.sort = state.sort;
    this.globalFilter = state.filter;
    this.loadData();
  }
}
