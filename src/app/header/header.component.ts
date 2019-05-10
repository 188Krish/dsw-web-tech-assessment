import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public info = `Shop for men's oxford shoes online at DSW, where we carry a variety of dress and casual oxford styles such as wingtips

                 and cap toe shoes in leather, suede and other materials.`;

  constructor() { }

  ngOnInit() {
  }

}
