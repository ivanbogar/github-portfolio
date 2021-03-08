import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  images: string[] = ['../assets/images/avatar.png', '../assets/images/avatar2.png','../assets/images/avatar3.png','../assets/images/avatar4.png','../assets/images/avatar5.png','../assets/images/avatar6.png'];

  backgroundImage: string = '';

  constructor() { }

  ngOnInit(): void {
    let ran = Math.round((Math.random()*100)%5);
    console.log(ran, Math.random()*100)
    this.backgroundImage = this.images[ran];
  }

}