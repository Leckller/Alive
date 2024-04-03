import People from "../../People/People";
import Food from "../../interfaces/Food";

export default class Comer {
  private _Comidas: Food[] = [];

  private AdicionaComidas(food: Food) {
    this._Comidas.push(food);
  }

  // deve receber a pessoa que cozinhou e a comida que vai cozinhar

  Cozinhar(people: People, food: Food) {
    // tempo vem em segundos
    people.energia -= food.tempo / 10;
    // humor recuperado
    people.humor += food.qualidade;
    this.AdicionaComidas(food);
  }

}