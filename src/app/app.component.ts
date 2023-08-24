import { Component } from '@angular/core';
import { SlideInterface } from './imageSlider/types/slide.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1-chocolatefactory';

  // constructor(private router: Router) {}

  // isActiveRouter(url: string) : boolean {

  //   return this.router.url === url;

  // }
}
