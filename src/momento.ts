/*interface Momento<T> {
    toMomento(): T;
    fromMomento(momento: T): void;
  }
  
interface Coin{
    i: number;
    j: number;
    serial: number;
  }

  class Geocache implements Momento<string> {
    i: number;
    j: number;
      currentCoins: Coin[];
    constructor() {
      this.i = 0;
      this.j = 1;
      this.currentCoins  = [];
    }
    toMomento() {
        return JSON.stringify({i: this.i, j: this.j, });
    }
  
    fromMomento(momento: string) {
      this.numCoins = parseInt(momento);
    }
  }
  
  const geocacheA = new Geocache();
  geocacheA.numCoins = 100;
  const momento = geocacheA.toMomento();
  const geocacheB = new Geocache();
  geocacheB.fromMomento(momento);
  console.assert(geocacheA.numCoins == geocacheB.numCoins);
  */
