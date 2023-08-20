import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  interval,
  Observable,
  startWith,
  Subject,
  switchMap,
  timer,
} from 'rxjs';
import { SlideInterface } from '../imageSlider/types/slide.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {
  @Input() slides: SlideInterface[] = [];


  //  {url:string, title:string}[] = [
  //   { url: 'https://d24chjhol3kq77.cloudfront.net/trbusiness.com/wp-content/uploads/2020/01/LINDT-CNY-WITH-XZL.jpg', title: 'lindt' },
  //      { url: 'https://www.kinder.com/us/sites/kinder_us/files/2020-11/kinder-treattoy-homepage-2020_0.jpg?t=1688573472', title: 'kinder' },
  //      { url: 'https://www.candyretailer.com/blog/wp-content/uploads/2022/07/3-Musketeers-Candy-Bar-11.jpg', title: 'three musketeers' },
  //      {
  //        url: 'https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/media/images/capture361/11954521-1-eng-GB/Capture.jpg',
  //        title: 'galaxy'
  //      },
  //  ];

  // constructor(private slides: {url:string; title:string}[])
  // {
  //   this.slides = [
  //     { url: 'https://d24chjhol3kq77.cloudfront.net/trbusiness.com/wp-content/uploads/2020/01/LINDT-CNY-WITH-XZL.jpg', title: 'lindt' },
  //     { url: 'https://www.kinder.com/us/sites/kinder_us/files/2020-11/kinder-treattoy-homepage-2020_0.jpg?t=1688573472', title: 'kinder' },
  //     { url: 'https://www.candyretailer.com/blog/wp-content/uploads/2022/07/3-Musketeers-Candy-Bar-11.jpg', title: 'three musketeers' },
  //     {
  //       url: 'https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/media/images/capture361/11954521-1-eng-GB/Capture.jpg',
  //       title: 'galaxy'
  //     },
  //   ];
  // }

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

}
