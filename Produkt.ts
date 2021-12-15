export abstract class Produkt {
  protected constructor(
    protected _id: number,
    protected _cena: number,
    protected vaha: number,
    protected trvanlivost: Date,
    protected slozeni: any
  ) {}
  get cena() {
    return this._cena;
  }
  get id() {
    return this._id;
  }
}
