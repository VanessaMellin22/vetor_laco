
const entrada = require("readline-sync");

let i: boolean = true;
let soma = 0;

while(i = true){
    let s: number = parseFloat(entrada.question("Digite o preco do produto: "));
    let a: string = entrada.question("Deseja encerrar o programa? ")
    let valores: number[] = [];

    valores.push(s);
    soma = soma + s;
    
    if(a == "sim"){
       break;
    }
}

console.log(soma);