import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-work2',
  templateUrl: './work2.component.html',
  styleUrls: ['./work2.component.scss']
})
export class Work2Component implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToWork3(): void {
    this.router.navigate(['work3'], {state: {isCanRoute: true}});
  }

}
