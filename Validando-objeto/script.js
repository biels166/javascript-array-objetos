let nomes = ["Gabriel", "Carol", "Thiago", "Maria", "Lucas"];

if(nomes.includes("Gabriel" == true)){
    console.log("Gabriel faz parte desta lista.")
    for(let i= 0; i <= 4; i++)
    {
        if(nomes[i] == "Gabriel"){
            console.log(`Gabriel é o termo ${i+1} da lista`);
        }
    }
}
