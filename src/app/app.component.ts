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
  number = 0
  numberPlus5 = 5
  times2 = 10

  calculate(numberInput: number){

    this.number = numberInput
    this.numberPlus5 = this.number + 5
    this.times2 = this.numberPlus5 * 2
  }

  changeData(){

    this.title = "Something nice"
  }
}
