import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Cool App';
  myName = "Christian";
  itemImageUrl = 'https://raw.githubusercontent.com/heavygand/Angular_Bootcamp/enter_data/src/assets/Logo_schwarze%20Schrift_ohne%20Hintergrund.png?token=GHSAT0AAAAAABZBWMH4J7CTCHCM3XFWT2LAYZNX7UA';
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
