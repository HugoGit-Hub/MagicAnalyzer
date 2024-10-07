import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [
    NgOptimizedImage,
    RouterLink
  ]
})

export class NavbarComponent {
}
