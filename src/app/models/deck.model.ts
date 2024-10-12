import {Card} from './card.model';
import {CardType} from '../enums/card-type.enum';
import {Color} from '../enums/color.enum';

export class Deck {
  private _cards: Card[];

  get cards(): Card[] {
    return this._cards
  }

  set cards(cards: Card[]) {
    this._cards = cards;
  }

  constructor(cards: Card[]) {
    this._cards = cards;
  }

  public addCards(type: CardType, color: Color, count: number): void {
    for (let i = 0; i < count; i++) {
      this._cards.push(new Card(type, color));
    }
  }

  public resetCardsByTypeByColor(type: CardType, color: Color): void {
    this._cards = this._cards.filter(card => !(card.type === type && card.color === color));
  }

  public removeCardsByColor(color: Color): void {
    this._cards = this._cards.filter(card => !(card.color === color));
  }

  public getColors(): Color[] {
    const colors: Color[] = [];

    for (const card of this.cards) {
      if (colors.includes(card.color)) {
        continue;
      }

      colors.push(card.color);
    }

    return colors;
  }

  public getSumOfCards(): number {
    return this._cards.length;
  }

  public getSumOfColors(): number {
    return this.getColors().length;
  }

  public getSumOfCardsByType(type: CardType): number {
    return this._cards.filter(card => card.type == type).length;
  }

  public getSumOfCardsByColor(color: Color): number {
    return this._cards.filter(card => card.color == color).length;
  }

  public getSumOfCardsByTypeByColor(type: CardType, color: Color): number {
    return this._cards.filter(card => card.type == type && card.color == color).length;
  }

  public getPercentageOfCardsByType(type: CardType): number {
    if (this.sumOfCardsEqualZero()) {
      return 0;
    }

    let sumOfCardsByType = this.getSumOfCardsByType(type);
    let value = (sumOfCardsByType * 100) / this.getSumOfCards();

    return this.formatDecimalsAfterComma(value);
  }

  public getPercentageOfCardsByColor(color: Color): number {
    if (this.sumOfCardsEqualZero()) {
      return 0;
    }

    let sumOfCardsByColor = this.getSumOfCardsByColor(color);
    let value = (sumOfCardsByColor * 100) / this.getSumOfCards();

    return this.formatDecimalsAfterComma(value);
  }

  private sumOfCardsEqualZero(): boolean {
    return this.getSumOfCards() == 0;
  }

  private formatDecimalsAfterComma(value: number) {
    return value % 1 == 0 ? value : Number(value.toFixed(2));
  }
}
