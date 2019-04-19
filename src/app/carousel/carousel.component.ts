import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  images = [1, 2, 3].map(() => `../../assets/images?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }

}
