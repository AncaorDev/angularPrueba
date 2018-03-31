import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  usuario_nuevo:any;

  userSelect(event) {
    this.usuario_nuevo = event;
    console.log(event);
  }
}
