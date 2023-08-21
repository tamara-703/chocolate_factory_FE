import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SlideInterface } from '../imageSlider/types/slide.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  slides: SlideInterface[] = [
    { url: 'https://d24chjhol3kq77.cloudfront.net/trbusiness.com/wp-content/uploads/2020/01/LINDT-CNY-WITH-XZL.jpg', title: 'lindt' },
    { url: 'https://www.kinder.com/us/sites/kinder_us/files/2020-11/kinder-treattoy-homepage-2020_0.jpg?t=1688573472', title: 'kinder' },
    { url: 'https://www.candyretailer.com/blog/wp-content/uploads/2022/07/3-Musketeers-Candy-Bar-11.jpg', title: 'three musketeers' },
    {
      url: 'https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/media/images/capture361/11954521-1-eng-GB/Capture.jpg',
      title: 'galaxy'
    },
  ];

  //the dashboard component will contain navigations to the homepage component, products component, collections component, manufacturer component, about component
  //the dahsboard will also have a logo at the far right of the dashboard (navigating to home should be available when clicking on the logo)

  // constructor(private router: Router) {}

  // goToHome()
  // {
  //   this.router.navigate(['']);
  // }

  // goToCollections()
  // {
  //   this.router.navigate(['/collections'])
  // }

  // goToAbout()
  // {
  //   this.router.navigate(['about'])
  // }


}
