import { Component, OnInit, Input } from '@angular/core';
import { TableColumn } from './table-column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  private _columns: TableColumn[] = [];
  public columnNames: string[] = [];
  @Input() set columns(cols: TableColumn[]) {
    this._columns = cols;
    this.columnNames = cols.map((item: TableColumn) => item.caption);
  }
  get columns(): TableColumn[] {
    return this._columns;
  }
  @Input() data: any[] = [];

  constructor() {}
}
