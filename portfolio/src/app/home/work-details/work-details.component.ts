import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import worksData from '../works.json';


interface Works {
  id: Number;
  prodTheme: String;
  prodCapa: String;
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
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit {

  works: Works[] = worksData;
  
  work: any;
  id: any;

  constructor(private activatedRoute: ActivatedRoute, private viewportScroller: ViewportScroller) {
   this.id = this.activatedRoute.snapshot.params.id;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log(this.work);
    this.work = this.works.find(x => x.id === parseInt(this.id));
    console.log(this.work);
  }

  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }
}



