let arrA = [1,2,3,5,7,11,13,17,19,23,29];
let arrB = [2,4,6,8];
let arrC = [10,20,30,40,50];

function tamanho(array){
    if(array.length > 5){
        console.log("Muitos Elementos.");
    } else if(array.length < 5){
        console.log("Poucos Elementos.")
    } else if(array.length == 5){
        console.log("5 Elementos.")
    }
}

tamanho(arrA);
tamanho(arrB);
tamanho(arrC);


