import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/data/products.json';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  imageList:any = [];
  productData: typeof data;
  constructor() { }

  ngOnInit() {
    console.log(data)
    this.productData = data;
  }

  goTop() {
    window.scroll(0,0);
  }

}
