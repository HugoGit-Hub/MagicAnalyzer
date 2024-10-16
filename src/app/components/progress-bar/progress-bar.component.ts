import {Component, Input} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  standalone: true,
  selector: 'progress-bar',
  templateUrl: 'progress-bar.component.html',
  imports: [
    NgStyle,
    NgClass
  ]
})

export class ProgressBar {
  @Input() progress: number = 0;
  @Input() color: string = "";
  @Input() colorClass: string = "";
}
