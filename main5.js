let numgattitotale = 40;
let numerogattifila = 6;

let numfile = Math.floor(numgattitotale / numerogattifila);
console.log(numfile);

let numrimastifuori = numgattitotale % numerogattifila;
console.log(numrimastifuori);

let numerogattimancanti = numerogattifila - numrimastifuori;
console.log(numerogattimancanti);

console.log(`ci sono ${numfile} file di gatti e ne mancano ${numerogattimancanti} per una nuova fila di ${numrimastifuori}`);