import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import worksData from '../works.json';


interface Works {
  id: Number;
  prodTheme: String;
  imageUrl: String;
  prodCategory: String;
  prodName: String;
  prodDesc: String;
  prodDescFull: String;
  prodRole: String;
  prodClient: String;
  prodTools: String;
  prodContent: String;
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  works: Works[] = worksData;

  constructor(private router: Router, private route: ActivatedRoute, private viewportScroller: ViewportScroller) { }
  
  ngOnInit() {
  }

  gotoDetails(workId: any) {
    this.router.navigate(['/work/', workId]);
  }

  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }

  // gotoDetails(id: any) {
  //   this.router.navigate([id], { relativeTo: this.route });
  // }
}
