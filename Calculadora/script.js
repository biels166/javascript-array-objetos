let calculadora = {
    soma: function somar(num1,num2){
        let resultado = num1 + num2;
        console.log(resultado);
    },

    subtrair: function sub(num1,num2){
        let resultado = num1 - num2;
        console.log(resultado);
    },

    multiplicar: function multiplicar(num1,num2){
        let resultado = num1 * num2;
        console.log(resultado);
    },

    dividir: function div(num1,num2){
        let resultado = num1 / num2;
        console.log(resultado);
    },

}

calculadora.soma(1,1);
calculadora.soma(1,300);

console.log("\n");

calculadora.subtrair(10,1);
calculadora.subtrair(10,100);

console.log("\n");

calculadora.multiplicar(10,0.8);
calculadora.multiplicar(8,8);

console.log("\n");

calculadora.dividir(1,10);
calculadora.dividir(10,2);
calculadora.dividir(10,3);



