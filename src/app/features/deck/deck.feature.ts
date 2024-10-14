import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Chart, registerables} from 'chart.js';

@Component({
  selector: 'deck',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './deck.feature.html',
  styleUrl: 'deck.feature.css'
})

export class DeckFeature{ }
