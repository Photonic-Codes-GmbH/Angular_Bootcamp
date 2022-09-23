import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Cool App';
  myName = "Christian";
  itemImageUrl = 'https://github.com/heavygand/Angular_Bootcamp/raw/4b52b4c30f81795e8908a930f4d2ebb5368c3f4b/src/assets/Logo_schwarze%20Schrift_ohne%20Hintergrund.png';

  changeData(){

    this.title = "Something nice"
  }
}
