import { Cell } from "./board";
import luck from "./luck";

interface Momento<T> {
  toMomento(): T;
  fromMomento(momento: T): void;
}

export class Coin {
  cell: Cell;
  serial: number;

  constructor(cell: Cell, serial: number) {
    this.cell = cell;
    this.serial = serial;
  }

  toString(): string {
    return `${this.cell.i}:${this.cell.j}#${this.serial}`;
  }
}

export class Geocache implements Momento<string> {
  cell: Cell;
  private currentCoins: Coin[];
  constructor(cell: Cell) {
    this.cell = cell;
    this.currentCoins = [];
    const numCoins = Math.floor(
      luck([cell.i, cell.j, "initialnumCoins"].toString()) * 100
    );
    for (let k = 0; k < numCoins; k++) {
      this.addCoin(new Coin(cell, k));
    }
  }
  addCoin(coin: Coin) {
    this.currentCoins.push(coin);
  }

  removeCoin(coinName: string): Coin | undefined {
    const removedCoin = this.currentCoins.find((coin) => {
      return coin.toString() == coinName;
    });
    if (removedCoin != undefined) {
      this.currentCoins = this.currentCoins.filter(
        (coin) => coin != removedCoin
      );
    }
    return removedCoin;
  }

  getNumCoins(): number {
    return this.currentCoins.length;
  }

  getCoinNames(): string[] {
    return this.currentCoins.map((coin) => coin.toString());
  }
  toMomento(): string {
    return JSON.stringify(this);
  }

  fromMomento(momento: string) {
    //console.log("from momento: ", momento);
    const recoveredGeocache = JSON.parse(momento) as Geocache;
    this.cell = recoveredGeocache.cell;
    this.currentCoins = recoveredGeocache.currentCoins;
  }
}
