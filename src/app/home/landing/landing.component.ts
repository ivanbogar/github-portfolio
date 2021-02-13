import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  images: string[] = ['../../assets/images/avatar.png', '../../assets/images/avatar2.png','../../assets/images/avatar3.png','../../assets/images/avatar4.png','../../assets/images/avatar5.png','../../assets/images/avatar6.png'];

  backgroundImage: string = '';

  constructor() { }

  ngOnInit(): void {
    let ran = Math.round((Math.random()*100)%5);
    console.log(ran, Math.random()*100)
    this.backgroundImage = this.images[ran];
  }

}