import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  standalone: true,
  selector: 'progress-bar',
  templateUrl: 'progress-bar.component.html',
  imports: [
    NgStyle
  ]
})

export class ProgressBar {
  @Input() progress: number = 0;
  @Input() color: string = "";
}
