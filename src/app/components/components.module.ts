import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';

import { MatTableModule } from "@angular/material/table";
import {CdkTableModule} from '@angular/cdk/table';
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [TableComponent, HomeComponent],
  imports: [
    CommonModule,
    MatTableModule,

  ],
  exports:[
    TableComponent,
    HomeComponent
  ]
})
export class ComponentsModule { }
