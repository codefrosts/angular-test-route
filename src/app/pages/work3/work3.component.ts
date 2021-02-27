import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-work3',
  templateUrl: './work3.component.html',
  styleUrls: ['./work3.component.scss']
})
export class Work3Component implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  goToWork2(): void {
    this.router.navigate(['work2'], {state: {isCanRoute: true}});
  }

  goToWork4(): void {
    this.router.navigate(['work4'], {state: {isCanRoute: true}});
  }
}
