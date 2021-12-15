import { Produkt } from "./Produkt";

export class Zakaznik {
  private kosik: Produkt[] = [];
  private batoh: Produkt[] = [];

  constructor(private penize: number) {}

  zaplatProdukty(celkovaCena) {
    if (celkovaCena > this.penize) {
      console.log("Nemáš dostatek peněz");
    } else {
      this.penize -= celkovaCena;
      console.log("Penize byly odečteny");
    }
  }
  vylozKosik() {
    const vylozKosik = this.kosik;
    this.kosik = [];
    return vylozKosik;
  }
  vlozProdukt (produkt:Produkt) {
    this.kosik.push(produkt);
  }
  vlozProdukty (produkty:Produkt []) {
    this.kosik = [...this.kosik, ...produkty];
  }
  vlozDoBatohu (produkt:Produkt) {
      this.batoh.push(produkt);
  }
}


