import {CardType} from '../enums/card-type.enum';
import {Color} from '../enums/color.enum';

export class Card {
  private readonly _type: CardType;
  private readonly _color: Color;

  get type(): CardType {
    return this._type;
  }

  get color(): Color {
    return this._color;
  }

  constructor(type: CardType, color: Color) {
    this._type = type;
    this._color = color;
  }
}
