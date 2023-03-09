function calcPct(x,y){
    return (y / x) * 100;
}

let y = 40;
let x = 10;

let pct = calcPct(x,y);
console.log(`${pct}% de ${x} e ${y}`)