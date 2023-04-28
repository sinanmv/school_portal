import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
// userdefine events
@Output() toggle =new EventEmitter();
  sidetoggle(){

    this.toggle.emit()
  }
}
