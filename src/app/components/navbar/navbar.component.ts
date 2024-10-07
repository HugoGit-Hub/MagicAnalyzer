import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [
    NgOptimizedImage
  ]
})

export class NavbarComponent {
}
