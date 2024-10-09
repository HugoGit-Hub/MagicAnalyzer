import {ManaSymbol} from "../enums/manaSymbol";

export class ManaCost {
    UncoloredManaCost: number;

    ColoredManaCost: ManaSymbol[];

    constructor(UncoloredManaCost: number, ColoredManaCost: ManaSymbol[]) {
        this.UncoloredManaCost = UncoloredManaCost;
        this.ColoredManaCost = ColoredManaCost;
    }
}