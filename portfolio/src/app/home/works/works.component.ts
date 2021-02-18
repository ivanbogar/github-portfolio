import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

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

  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
  }

  gotoDetails(workId: any) {
    this.router.navigate(['/work/', workId]);
  }

  // gotoDetails(id: any) {
  //   this.router.navigate([id], { relativeTo: this.route });
  // }
}
