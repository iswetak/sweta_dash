import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import {MatTableDataSource} from '@angular/material/table';
import { TableDTO, TableInfo } from  '../interface';
import { FormControl } from '@angular/forms';
// import { MatPaginator } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable, of } from 'rxjs';
import { map,tap,catchError } from 'rxjs/operators';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-analyze-user',
  templateUrl: './analyze-user.component.html',
  styleUrls: ['./analyze-user.component.css']
})
export class AnalyzeUserComponent implements OnInit {

  dataSource: MatTableDataSource<TableDTO>;
  tableInfo : TableInfo;
  apiError : String
  user: string;
  triggerPct : number = 2.0;

  displayedColumns = ["select","ID","name","date_registred","opt_in","channel_type"];
  displayedColumnsNames = ["select","ID","name","date_registred","opt_in","channel_type"];

  selection = new SelectionModel<TableDTO>(true, []);

  
  @ViewChild(MatPaginatorModule,{static: false}) paginator: MatPaginatorModule;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router : Router,private coursesService: ApiService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
  }

  userSelected(log:TableDTO){
    // this.user = log.user;
    this.ngAfterViewInit();

  }

  selectedType = 'opentype';
  onChange(event) {
    this.selectedType = event.target.value;
  }

  ngAfterViewInit() {
   
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: TableDTO): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ID + 1}`;
  }

}