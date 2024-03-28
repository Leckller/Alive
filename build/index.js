"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var main = document.querySelector('main');
main.innerText = 'omg';
var People = /** @class */ (function () {
    function People() {
    }
    return People;
}());
var Personagem = /** @class */ (function (_super) {
    __extends(Personagem, _super);
    function Personagem(dificuldade) {
        var _this = _super.call(this) || this;
        _this.dificuldade = dificuldade;
        _this._saude = (100 / _this.dificuldade);
        _this._dinheiro = (100 / _this.dificuldade);
        _this._felicidade = (72 / _this.dificuldade);
        _this._cansaco = (10 * _this.dificuldade);
        _this._fome = (10 * _this.dificuldade);
        _this.dificuldade = dificuldade;
        return _this;
    }
    Personagem.prototype.morte = function () {
        this._saude = 100;
        this._dinheiro = 100;
        this._felicidade = 72;
        this._cansaco = 10;
        this._fome = 10;
    };
    Object.defineProperty(Personagem.prototype, "saude", {
        get: function () { return this._saude; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "cansaco", {
        get: function () { return this._cansaco; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "dinheiro", {
        get: function () { return this._dinheiro; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "felicidade", {
        get: function () { return this._felicidade; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "fome", {
        get: function () { return this._fome; },
        enumerable: false,
        configurable: true
    });
    Personagem.prototype.trabalhar = function () {
        this._fome += (5 * this.dificuldade);
        this._cansaco += (5 * this.dificuldade);
        this._felicidade -= (5 * this.dificuldade);
    };
    Personagem.prototype.jogar = function () {
        this._felicidade += 20 / this.dificuldade;
    };
    Personagem.prototype.dormir = function (hours) {
        this._cansaco -= 1 * hours;
    };
    Personagem.prototype.comer = function () {
        this._fome -= 1;
    };
    Personagem.prototype.correr = function () {
        this._saude += 1;
    };
    return Personagem;
}(People));
var Life = /** @class */ (function (_super) {
    __extends(Life, _super);
    function Life() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Life.prototype.comer = function () {
        console.log('comeu!');
        _super.prototype.comer.call(this);
    };
    return Life;
}(Personagem));
var teste = new Life(1);
console.log(teste);
teste.comer();
console.log(teste);
