import { Produkt } from "./Produkt";

export enum TypRohliku {
  OBYCEJNY = "OBYCEJNY",
  GRAHAMOVY = "GARHAMOVY",
}

export class Rohlik extends Produkt {
  constructor(
    id: number,
    cena: number,
    vaha: number,
    trvanlivost: Date,
    slozeni: any,
    private typ: TypRohliku
  ) {
    super(id, cena, vaha, trvanlivost, slozeni);
  }
 
}
