import { Produkt  } from "./Produkt";

export class Nakladak {
    private produkty : Produkt [] =[];

  constructor(private kapacita: number) {

  }


pridejProdukty(produkty: Produkt []) {
    const noveProdukty = [...this.produkty, ...produkty];
    if (noveProdukty.length > this.kapacita) {
        console.log("Nemam dostatečnou kapacitu");
    }
    else {
    this.produkty = noveProdukty;
    }

}

vylozProdukty () {
    const produktyNaVylozeni = this.produkty;
    this.produkty =[];
    return produktyNaVylozeni;
}
}
