import { Component, OnInit } from '@angular/core';
import { GlobalService } from './common/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private global: GlobalService,
    private router: Router) {

  }
  ngOnInit() {
    if (this.global.username) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['Login']);
    }
  }
}
