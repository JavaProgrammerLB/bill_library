import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'bill-library';
  constructor(private router: Router) {}

  goToBookForm() {
    this.router.navigate(['/book']);
  }
}
