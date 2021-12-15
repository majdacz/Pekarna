import { Kobliha, TypKoblihy } from "./kobliha";
import { Nakladak } from "./Nakladak";
import { Pekarna } from "./Pekarna";
import { Rohlik, TypRohliku } from "./Rohlik";
import { Zakaznik } from "./Zakaznik";

const POCET_ROHLIKU = 1500;

/*const rohliky = new Array(POCET_ROHLIKU).fill(0).map((_, i) => {
  return new Rohlik(
    1,
    50,
    new Date(),
    "",
    i % 2 === 0 ? TypRohliku.GRAHAMOVY : TypRohliku.OBYCEJNY
  );
});
*/
let rohliky: Rohlik[] = [];

for (let i = 0; i < POCET_ROHLIKU; i++) {
  const novyRohlik = new Rohlik(
    i,
    1,
    50,
    new Date(),
    "",
    i % 2 === 0 ? TypRohliku.GRAHAMOVY : TypRohliku.OBYCEJNY
  );

  
  //rohliky.push(novyRohlik);
  rohliky = [...rohliky, novyRohlik];
}

let koblihy: Kobliha[] = [];

for (let i = 0; i < 600; i++) {
  const novaKobliha = new Kobliha(
    i,
    1,
    50,
    new Date(),
    "",
    i % 2 === 0 ? TypKoblihy.MARMELADOVA : TypKoblihy.NUGATOVA
  );
  koblihy = [...koblihy,novaKobliha];
}




const pekarna = new Pekarna(6000);

const penamNakladak = new Nakladak(1500);
const zakaznik =new Zakaznik(1500);
const zakaznik2 = new Zakaznik(2000);

penamNakladak.pridejProdukty(rohliky);


const noveProdukty = penamNakladak.vylozProdukty();
pekarna.naskladniProdukt(noveProdukty);

console.log(pekarna);
console.log(zakaznik);

zakaznik.vlozProdukty(rohliky);

pekarna.platit(zakaznik);

console.log(pekarna);
console.log(zakaznik);


pekarna.naskladniProdukt(koblihy);
console.log(pekarna);
zakaznik2.vlozProdukty(koblihy);
pekarna.platit(zakaznik2);
console.log(zakaznik2);
console.log(pekarna);

