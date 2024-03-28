const main = document.querySelector('main') as HTMLElement;

main.innerText = 'omg'

interface PersonagemStatus {
  fome: number,
  cansaco: number,
  saude: number,
  felicidade: number,
  dinheiro: number,
}

abstract class People {
  protected abstract _cansaco: number;
  protected abstract _saude: number;
  protected abstract _felicidade: number;
  protected abstract _dinheiro: number;
  protected abstract _fome: number;

  public abstract comer(): void;
  public abstract dormir(hous: number): void;
  public abstract correr(): void;
  public abstract trabalhar(): void;
  public abstract jogar(): void;
  public abstract reset(): void;

  public abstract status(): {
    cansaco: number,
    saude: number,
    felicidade: number,
    dinheiro: number,
    fome: number,
  }
}

class Personagem extends People {

  constructor(protected dificuldade: number) {
    super();
    this.dificuldade = dificuldade;
  }

  public reset(): void { this._saude = 100; this._dinheiro = 100; this._felicidade = 72; this._cansaco = 10; this._fome = 10; }

  protected _saude = (100 / this.dificuldade);
  protected _dinheiro = (100 / this.dificuldade);
  protected _felicidade = (72 / this.dificuldade);
  protected _cansaco = (10 * this.dificuldade);
  protected _fome = (10 * this.dificuldade);

  public status(): { cansaco: number; saude: number; felicidade: number; dinheiro: number; fome: number; } {
    return { cansaco: this._cansaco, dinheiro: this._dinheiro, felicidade: this._felicidade, fome: this._fome, saude: this._saude }
  }

  public trabalhar(): void {
    this._fome += (10 * this.dificuldade);
    this._cansaco += (10 * this.dificuldade);
    this._felicidade -= (10 * this.dificuldade);
  }
  public jogar(): void {
    this._felicidade += 20;
    this._fome += 10;
  }
  public dormir(hours: number): void {
    this._cansaco -= 1 * hours
  }
  public comer(): void {
    this._fome -= 1;
  }
  public correr() {
    this._saude += 1;
  }
}

class Life extends Personagem {
  public comer(): void {
    console.log('comeu!')
    super.comer();
  }
}

const teste = new Life(1);
console.log(teste)
teste.comer();
