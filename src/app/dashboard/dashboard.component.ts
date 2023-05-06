import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  collage: string;
  mark: Number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Rahul', collage: 'MS College', mark: 794},
  {position: 2, name: 'Raja', collage: 'VK College', mark: 791},
  {position: 3, name: 'Aswin', collage: 'VK College', mark: 790},
  {position: 4, name: 'Raju', collage: 'COC College', mark: 788},
  {position: 5, name: 'Mohan', collage: 'MS College', mark: 778},
  {position: 6, name: 'Rani', collage: 'MS College', mark: 771},
  {position: 7, name: 'Das', collage: 'VK COllege', mark: 770},
  {position: 8, name: 'Unni', collage: 'COC College', mark: 761},
  {position: 9, name: 'Akhil', collage: 'COC College', mark: 756},
  {position: 10, name: 'Mithun',collage: 'MS College', mark: 754},
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}


