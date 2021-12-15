import { Produkt } from "./Produkt";
import { Zakaznik } from "./Zakaznik";

export class Pekarna {
  private produkty: Produkt[] = [];
  constructor(private kapacita: number) {}

  naskladniProdukt(produkty: Produkt[]) {
    const noveProdukty = [...this.produkty, ...produkty];
    if (noveProdukty.length > this.kapacita) {
      console.log("Sklady jsou naplněny");
    }
    else {
        this.produkty = noveProdukty
    }
  }
  platit (zakaznik: Zakaznik) {
      let celkovaCena = 0;

      const kosik = zakaznik.vylozKosik();
      for (let i = 0; i< kosik.length; i++) {
          celkovaCena += kosik[i].cena;
          this.produkty = this.produkty.filter(({id:produktoveId}) => 
          produktoveId !== kosik[i].id)
          zakaznik.vlozDoBatohu(kosik[i])
      }
    zakaznik.zaplatProdukty(celkovaCena);
  }
}
