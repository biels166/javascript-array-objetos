let onibus = {
   rodas: 8,
   portas: 2,
   passageiros: 40
}

console.log(onibus);
console.log(onibus.rodas);
console.log(onibus.portas);
console.log(onibus.passageiros);

onibus.janela = 20;
console.log(onibus);

delete onibus.rodas;
console.log(onibus);
console.log(onibus.rodas);