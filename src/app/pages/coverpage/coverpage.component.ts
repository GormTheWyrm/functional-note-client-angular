import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coverpage',
  templateUrl: './coverpage.component.html',
  styleUrls: ['./coverpage.component.css']
})
export class CoverpageComponent implements OnInit {
  //mostly using this variable as an example of interpolation one way binding.
  author:string = "Geordin Soucie";
  //I should add some porperty binding to this page... for the sake of learning it properly
  //... ... ...

  constructor() { }

  ngOnInit(): void {
  }

}
