import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage: number = 1;
  @Input() total: number = 0;
  @Input() limit: number = 10;
  @Input() data: any[] = [];

  @Output() changePage = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit(): void {
    const pageCount = Math.ceil(this.total / this.limit);
    this.pages = this.range(1,pageCount);
    console.log(this.pages);
    console.log(this.total);
    console.log(this.limit);
    console.log(this.data);
  }

  range(start: number, end: number) : number[] {

    return [...Array(end).keys()].map(element => element + start);
  }


}
