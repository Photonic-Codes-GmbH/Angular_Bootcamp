import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Cool App';
  myName = "Christian";
  itemImageUrl = '../assets/Logo_schwarze Schrift_ohne Hintergrund.png';

  changeData(){

    this.title = "Something nice"
  }
}
