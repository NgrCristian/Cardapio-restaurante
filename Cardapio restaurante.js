const input = require("fs").readFileSync("stdin","utf-8")
const cardapio= input.split("\r\n")

const lanche = ['Cachorro Quente','Sanduíche Natural','Bolo', 'Misto Quente','Coca-cola']
let valor = [5.00, 3.50, 4.80, 8.90, 7.30]
const quantidade = Number(cardapio[1])

switch(cardapio[0]){
  case '1':
    console.log("Produto Selecionado:${cardapio[0]}\r\nNome do Produto:${lanche[0]}\r\nPreço Unitario:${(valor[0]).toFixed(2)}
Total a Pagar:${(quantidade*valor[0]).toFixed(2)}'); break; 

  case '2':
    console.log("Produto Selecionado:${cardapio}\r\nNome do Produto:${lanche[1]}\r\nPreço Unitario:${(valor[1]).toFixed(2)}
Total a Pagar:${(quantidade*valor[1]).toFixed(2)}"); break; 

  case '3':
    console.log("Produto Selecionado:${cardapio}\r\nNome do Produto:${lanche[2]}\r\nPreço Unitario:${(valor[2]).toFixed(2)}
Total a Pagar:${(quantidade*valor[2]).toFixed(2)}`); break; 
  
  case '4':
    console.log("Produto Selecionado:${cardapio}\r\nNome do Produto:${lanche[3]}\r\nPreço Unitario:${(valor[3]).toFixed(2)} 
Total a Pagar:${(quantidade*valor [3]).toFixed(2)}"); break; 

  case '5':
    console.log("Produto Selecionado:${cardapio}\r\nNome do Produto:${lanche[4]}\r\nPreço Unitario:${(valor[4]).toFixed(2)} 
Total a Pagar:${(quantidade*valor [4]).toFixed(2)}');

}
