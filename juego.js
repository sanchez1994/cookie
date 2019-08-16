var galletas = 0;

var inventario = [0,0,0];

var galletasproduce = [1,2,4];

var precioproducto = [100,200,400];



function clic(){
    galletas++;
}

function comprar(objeto){
    
    if(galletas >= precioproducto[objeto]){
    inventario[objeto]++;
        galletas -= precioproducto[objeto];
    }
    else{
       console.log("no tienes suficiente dinero") 
    }
}

function producir(){
   for(contador=0; contador<inventario.length; contador++) 
   {
       galletas += inventario[contador] * galletasproduce[contador];
   }

}



function render()
{
    document.getElementById("contador").innerHTML = galletas;
    document.getElementById("inventario").innerHTML = 
            `Cursores: ${inventario[0]}<br>
    
            Abuelitas: ${inventario[1]}<br>
    
            Hornos: ${inventario[2]}`;
}

//-------------------------
var FPSproduce = 1;

setInterval(function(){
   producir();
},1000/FPSproduce);


var FPS = 30;

setInterval(function(){
     render(); 
},1000/FPS);

