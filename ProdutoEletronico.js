const Produto = require('./Produto');

class ProdutoEletronico extends Produto {
    constructor(nome, preco, garantia) {
        super(nome, preco);
        this._garantia = garantia; 
    }

    get garantia() {
        return this._garantia;
    }

    set garantia(meses) {
        this._garantia = meses;
    }

    
    exibirInfo() {
        console.log(`Eletrônico: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Garantia: ${this.garantia} meses`);
    }
}

module.exports = ProdutoEletronico;