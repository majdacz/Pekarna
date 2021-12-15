import { Produkt } from "./Produkt";

export enum TypKoblihy {
  MARMELADOVA = "MARMELADOVA",
  NUGATOVA = "NUGATOVA",
}

export class Kobliha extends Produkt {
  constructor(
    id: number,
    cena: number,
    vaha: number,
    trvanlivost: Date,
    slozeni: any,
    private typ: TypKoblihy
  ) {
    super(id, cena, vaha, trvanlivost, slozeni);
  }
}
