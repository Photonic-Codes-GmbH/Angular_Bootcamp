import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photonic-codes',
  templateUrl: './photonic-codes.component.html',
  styleUrls: ['./photonic-codes.component.css']
})
export class PhotonicCodesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  text = "photonic-codes.com Logo:"
  itemImageUrl = 'https://github.com/heavygand/Angular_Bootcamp/raw/4b52b4c30f81795e8908a930f4d2ebb5368c3f4b/src/assets/Logo_schwarze%20Schrift_ohne%20Hintergrund.png';

}
