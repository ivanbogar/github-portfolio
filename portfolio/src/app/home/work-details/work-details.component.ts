import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit {

  products = [
    {
      id: 10,
      prodName: 'iPhone X',
      prodDesc: 'New iPhone X with 5.5 inch screen, 256GB Internal Memory, 16GB RAM',
      prodPrice: 989
    },
    {
      id: 11,
      prodName: 'Pixel 2 XL',
      prodDesc: 'New Google Pixel 2 XL with 5.5 inch screen, 256GB Internal Memory, 16GB RAM',
      prodPrice: 788
    },
    {
      id: 12,
      prodName: 'Samsung S10',
      prodDesc: 'New Samsung S10 with 5.5 inch screen, 256GB Internal Memory, 16GB RAM',
      prodPrice: 989
    }
  ];
  product: any;
  id: any;

  constructor(private activatedRoute: ActivatedRoute) {
   this.id = this.activatedRoute.snapshot.params.id;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log(this.product);
    this.product = this.products.find(x => x.id === parseInt(this.id));
    console.log(this.product);
  }

}



