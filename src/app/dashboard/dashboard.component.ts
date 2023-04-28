import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  collage: string;
  mark: Number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'student', collage: 'collage', mark: 800},
  {position: 2, name: 'student', collage: 'collage', mark: 800},
  {position: 3, name: 'student', collage: 'collage', mark: 800},
  {position: 4, name: 'student', collage: 'collage', mark: 800},
  {position: 5, name: 'student', collage: 'collage', mark: 800},
  {position: 6, name: 'student', collage: 'collage', mark: 800},
  {position: 7, name: 'student', collage: 'collage', mark: 800},
  {position: 8, name: 'student', collage: 'collage', mark: 800},
  {position: 9, name: 'student', collage: 'collage', mark: 800},
  {position: 10, name: 'student',collage: 'collage', mark: 800},
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


