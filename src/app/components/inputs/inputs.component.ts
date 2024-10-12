import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NavbarComponent} from '../navbar/navbar.component';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Color} from '../../enums/color.enum';
import {Deck} from '../../models/deck.model';
import {CardType} from '../../enums/card-type.enum';
import {EnumHelper} from '../../helpers/enum.helper';

@Component({
  selector: 'inputs',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FormsModule, NgForOf, NgClass, NgIf],
  templateUrl: './inputs.component.html',
  styleUrl: 'inputs.component.css'
})

export class InputsComponent {
  protected readonly CardType = CardType;

  protected deck: Deck = new Deck([]);
  protected colorStates = new Map<Color, boolean>([
    [Color.Green, false],
    [Color.White, false],
    [Color.Blue, false],
    [Color.Black, false],
    [Color.Red, false],
    [Color.MultiColor, false]
  ]);

  protected toggleColor(color: Color): void {
    this.colorStates.set(color, !this.colorStates.get(color));
    if (this.colorStates.get(color) == false) {
      this.deck.removeCardsByColor(color);
    }
  }

  protected getActiveColors(): Color[] {
    return Array.from(this.colorStates.entries())
      .filter(([, isActive]: [Color, boolean]) => isActive)
      .map(([color]) => color);
  }

  protected getNotActiveColors(): Color[] {
    return Array.from(this.colorStates.entries())
      .filter(([, isActive]: [Color, boolean]) => !isActive)
      .map(([color]) => color);
  }

  protected allColorsAreActive(): boolean {
    return this.getActiveColors().length == EnumHelper.length(Color);
  }

  protected resetCardsByTypeByColorAndAddCards(type: CardType, color: Color, count: number): void {
    this.deck.resetCardsByTypeByColor(type, color);
    this.deck.addCards(type, color, count);
  }

  protected exportToJson(): void {
    let sumOfCardsInJson = JSON.stringify(this.deck.getSumOfCards(), null, 2);
    let cardsInJson = JSON.stringify(this.deck.cards, null, 2);

    let sumsOfCardsByTypes = this.createSumsOfCardsByTypesDictionary()
    let sumsOfCardsByTypesInJson = JSON.stringify(Object.fromEntries(sumsOfCardsByTypes), null, 2);

    let percentagesOfCardsByTypes = this.createPercentagesOfCardsByTypesDictionary();
    let percentagesOfCardsByTypesInJson = JSON.stringify(Object.fromEntries(percentagesOfCardsByTypes), null, 2);

    let percentagesOfCardsByColors = this.createPercentagesOfCardsByColorsDictionary();
    let percentagesOfCardsByColorsInJson = JSON.stringify(Object.fromEntries(percentagesOfCardsByColors), null, 2);

    let combineJsons = {
      "Deck": {
        "Sum of cards": JSON.parse(sumOfCardsInJson),
        "Cards Information": JSON.parse(cardsInJson),
        "Sums of Cards By Types": JSON.parse(sumsOfCardsByTypesInJson),
        "Percentages of Cards By Types": JSON.parse(percentagesOfCardsByTypesInJson),
        "Percentages of Cards By Colors": JSON.parse(percentagesOfCardsByColorsInJson)
      }
    }

    let finalJson = JSON.stringify(combineJsons, null, 2);

    const dataUri = 'data:text/json;charset=utf-8,' + encodeURIComponent(finalJson);
    const exportFileName = 'deck-cards.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    linkElement.click();
  }

  private createSumsOfCardsByTypesDictionary(): Map<CardType, number> {
    let sumsOfCardsByTypes = new Map<CardType, number>;
    for (let type of Object.values(CardType)) {
      sumsOfCardsByTypes.set(type, this.deck.getSumOfCardsByType(type));
    }

    return sumsOfCardsByTypes;
  }

  private createPercentagesOfCardsByTypesDictionary(): Map<CardType, number> {
    let percentagesOfCardsByTypes = new Map<CardType, number>;
    for (let type of Object.values(CardType)) {
      percentagesOfCardsByTypes.set(type, this.deck.getPercentageOfCardsByType(type));
    }

    return percentagesOfCardsByTypes;
  }

  private createPercentagesOfCardsByColorsDictionary(): Map<Color, number> {
    let percentagesOfCardsByColors = new Map<Color, number>;
    for (let color of Object.values(Color)) {
      percentagesOfCardsByColors.set(color, this.deck.getPercentageOfCardsByColor(color));
    }

    return percentagesOfCardsByColors;
  }
}
