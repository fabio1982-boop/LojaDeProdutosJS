class Produto {
    constructor(nome, preco) {
        this._nome = nome; 
        this._preco = preco;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get preco() {
        return this._preco;
    }

    set preco(novoPreco) {
        if (novoPreco > 0) {
            this._preco = novoPreco;
        } else {
            console.log("Preço inválido!");
        }
    }

   
    exibirInfo() {
        console.log(`Produto: ${this._nome}, Preço: R$${this._preco.toFixed(2)}`);
    }
}

module.exports = Produto;
