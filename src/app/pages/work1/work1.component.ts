import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-work1',
  templateUrl: './work1.component.html',
  styleUrls: ['./work1.component.scss']
})
export class Work1Component implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToWork2(): void {
    this.router.navigate(['work2'], {state: {isCanRoute: true}});
  }

}
