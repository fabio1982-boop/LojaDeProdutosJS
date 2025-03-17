const Produto = require('./Produto');

class ProdutoAlimento extends Produto {
    constructor(nome, preco, validade) {
        super(nome, preco);
        this._validade = validade;
    }

    get validade() {
        return this._validade;
    }

    set validade(data) {
        this._validade = data;
    }

 
    exibirInfo() {
        console.log(`Alimento: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Validade: ${this.validade}`);
    }
}

module.exports = ProdutoAlimento;