import {ManaSymbol} from "../enums/manaSymbol";
import {ManaCost} from "./manaCost";
import {CardFormat} from "../enums/cardFormat";
import { PurchaseUris } from "../enums/purchaseUris";
import {ImageUris} from "../enums/imageUris";
import {Currency} from "../enums/currency";

export class Card {
    id: string;

    Name: string;

    ReleaseDate: Date;

    ImageUris: ImageUris;

    ManaCost: ManaCost;

    Type: string;

    Text: string;

    Colors: ManaSymbol[];

    Keywords: string[];

    Legalities: {[format in CardFormat]: boolean};

    SetName: string;

    SetType: string;

    Rarity: string;

    Prices: {[currency in Currency]: string};

    PurchaseUris: {[purchase in PurchaseUris]: string};

    constructor(
        id: string,
        Name: string,
        ReleaseDate: Date,
        ImageUris: ImageUris,
        ManaCost: ManaCost,
        Type: string,
        Text: string,
        Colors: ManaSymbol[],
        Keywords: string[],
        Legalities: {[format in CardFormat]: boolean},
        SetName: string,
        SetType: string,
        Rarity: string,
        Prices: {[currency in Currency]: string},
        PurchaseUris: {[purchase in PurchaseUris]: string},
    ) {
        this.id = id;
        this.Name = Name;
        this.ReleaseDate = ReleaseDate;
        this.ImageUris = ImageUris;
        this.ManaCost = ManaCost;
        this.Type = Type;
        this.Text = Text;
        this.Colors = Colors;
        this.Keywords = Keywords;
        this.Legalities = Legalities;
        this.SetName = SetName;
        this.SetType = SetType;
        this.Rarity = Rarity;
        this.Prices = Prices;
        this.PurchaseUris = PurchaseUris;
    }
}