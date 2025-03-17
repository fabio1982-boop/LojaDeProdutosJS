const ProdutoEletronico = require('./ProdutoEletronico');
const ProdutoAlimento = require('./ProdutoAlimento');

const celular = new ProdutoEletronico("Smartphone", 2000, 12);
const pao = new ProdutoAlimento("Pão Integral", 8, "20/03/2025");


celular.exibirInfo();
pao.exibirInfo();


celular.preco = 1800;
console.log(`Novo preço 
	do ${celular.nome}: R$${celular.preco.toFixed(2)}`);