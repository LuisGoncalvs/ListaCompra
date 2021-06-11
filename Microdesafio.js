// Microfesafio - Lista de Compras 11/06/2021

//Push adiciona elementos no final do array, neste caso o Leite de Soja e a Granola;
let produtosDeCompras = ["Arroz", "Feijão", "Farinha", "Soja"];
produtosDeCompras.push("LeitedeSoja", "Granola");
console.log(produtosDeCompras);

//Pop é usado para retirar o último elemento de um Array;
let produtosDeCompras2 = ["Batata", "Tomata", "Jiló", "Cenoura"];
console.log(produtosDeCompras2)

produtosDeCompras2.pop();
console.log(produtosDeCompras2)

//Shift o primeiro Elemento de um Array;

let produtosDeCompras3 = ["Sabão", "Agua Sanitária", "Desinfetante", "Esponja de Louça"];
console.log(produtosDeCompras3)

produtosDeCompras3.shift();
console.log(produtosDeCompras3);

// Unshift faz a adição de um ou mais novos elementos em um array;

let produtosDeCompras4 = ['Shampoo', 'Condicionador', 'Sabonte', 'Esponja'];
console.log(produtosDeCompras4)

produtosDeCompras4.unshift('Cotonete','Algodão');
console.log(produtosDeCompras4);

// Join é utilizado para adicionar um tipo de separador em um Array;

let produtosDeCompras5 = ["Páprica Doce", "Tomilho", "Orégano", "Açafrão"];
console.log(produtosDeCompras5)

let separador = produtosDeCompras5.join(" + ");
console.log(separador);
