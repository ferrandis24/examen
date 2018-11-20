
var temp=[];
var tiempo="";
var salir="";
var mejorResultado=0;
var peorResultado=0;
var i=0;

function mejortemp(mt) {

    for (let i = 0; i < mt.length; i++) {
            if(mt[i] == mejorResultado){
              mejorResultado=mt[i];

            }

    }
    console.log("el mejor resultado es "+mejorResultado+" en segundos")

}


function peorResul(p) {


    for(let i = 0; i < p.length; i++) {

                if (p[i] > peorResultado){
                  peorResultado=p[i];
                }

    }
console.log("el peor resultado es "+peorResultado+" en segundos")
}

function mediatiempo(tiempo,sumatotal) {

    for (let i = 0; i < tiempo.length; i++) {

        mediatiempo= mediatiempo.length
      mediatiempo= mediatiempo.toFixed(3);


    }

console.log("La media de todos los participantes es "+sumatotal);
}


do {


    tiempo=Number(prompt("dime cuanto tiempo ha habido en esta vuelta"));
    if (tiempo>=1) {
      temp.push(tiempo);
    salir=prompt("escribe salir")
  }
}


while (salir!="salir")



mejortemp(temp);
peorResul(temp);
mediatiempo(temp);
