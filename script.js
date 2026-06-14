function animar(id, valor){

let numero = 0;

let intervalo = setInterval(() => {

numero++;

document.getElementById(id).innerHTML = numero;

if(numero >= valor){
clearInterval(intervalo);
}

},20);

}

animar("num1",50);
animar("num2",85);
animar("num3",100);

let etapa = 0;

function crescerArvore(){

const arvore = document.getElementById("tree");

const fases = [
"🌱",
"🌿",
"🌳"
];

if(etapa < fases.length-1){
etapa++;
arvore.innerHTML = fases[etapa];
}

}

const frases = [

"Produzir com responsabilidade é cultivar o amanhã.",

"Tecnologia e natureza podem caminhar juntas.",

"Um agro forte preserva o meio ambiente.",

"O futuro sustentável começa hoje.",

"Cada árvore plantada é um investimento no futuro."

];

let indice = 0;

setInterval(() => {

indice++;

if(indice >= frases.length){
indice = 0;
}

document.getElementById("frase").innerHTML = frases[indice];

},4000);
