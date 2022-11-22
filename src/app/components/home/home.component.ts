import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public myData = [
    { name: 'Felipe', mail: 'felipe@gmai.com' },
    { name: 'Cecilia', mail: 'cecilia@gmail.com' },
  ];

  public myColumns = [
    { caption: 'Name', field: 'name' },
    { caption: 'Mail', field: 'mail' },
  ];

  serviceData$!: Observable<AgeConstraint>;

  constructor() {
    this.serviceData$ = serviceName.getAllWho();
  }
}
