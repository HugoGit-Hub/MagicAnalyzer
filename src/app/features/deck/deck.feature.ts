import {Component} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {ProgressBar} from '../../components/progress-bar/progress-bar.component';
import {BaseChartDirective} from 'ng2-charts';
import {ChartData, ChartOptions, ChartType} from 'chart.js';
import {SearchCard} from '../../components/search-card/search-card.component';

@Component({
  selector: 'deck',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ProgressBar,
    BaseChartDirective,
    AsyncPipe,
    NgForOf,
    NgIf,
    SearchCard
  ],
  templateUrl: './deck.feature.html',
  styleUrl: 'deck.feature.css'
})

export class DeckFeature{
  public pieChartType: ChartType = 'doughnut';
  public pieChartData: ChartData<'doughnut'> = {
    datasets: [{
      data: [300, 500, 200],
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
    }]
  };
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  };

  public mixedChartOptions: any = {
    responsive: true,
    scales: {
      y: {
        stacked: true,
      },
    }
  };
  public mixedChartData: any = {
    labels: ['Creatures', 'Instant', 'Ritual', 'Spell', 'Land'],
    datasets: [
      {
        type: 'line',
        label: 'Mana cost ',
        data: [7, 2, 4, 3, 0],
        borderColor: '#cc65fe',
        fill: false,
      },
      {
        type: 'bar',
        label: 'Dataset 1',
        data: [1, 2, 3, 4, 10],
        backgroundColor: '#ff6384',
        stack: 'Stack 0',
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        data: [7, 2, 3, 4, 5],
        backgroundColor: '#36a2eb',
        stack: 'Stack 0',
      },
    ]
  };
  public mixedChartType: ChartType = 'bar';
}
