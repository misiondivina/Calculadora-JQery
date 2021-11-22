var expresion ="";//variable global inicialmente con un string vacio
$(document).ready(function(){//cuando el documento se halla cargado le agregamos una funcion al manejador de eventos(ready)
    $("#buttons a").click(function(){//para el evento click de todos los elementos con atributo # de la clase buttons con hipervinculo  agrego esta funcion como manejador de eventos
        var caracter = $(this).text();//entonces la funcion esta definida aqui,con una variable caracter que va a almacenar el texto(text) del boton en cuestion(this)
           
        if(caracter == "="){
            expresion = eval(expresion);
            $("#screen").text(expresion);//valor que se va a mostrar en pantalla
            if($("#screen").text(expresion.length) > 5){// esta parte no funciona
                $("#screen").text(expresion).toFixed(5);//esto es para redonder a tantos decimales despues del punto,probe varias formas sin resultado
            }
        }
        else if(caracter == 'C'){//si se hace click en el boton "C"
            expresion = "";// la variable expresion es vacia
            $("#screen").text(expresion);//para que se muestre por pantalla el valor que contenga  la variable expresion

        }
        else{//cuando se ingresan numeros y/o operaciones 

            expresion += caracter;//a expresion agregamos el texto del boton que se haga click en ese momento
            $("#screen").text(expresion);
        }
        
    });
    
});

$(document).keypress(function(e){
    let codigo = e.charCode;//obtenemos el codigo del caracter ingresado,lo guardamos en la variable local "codigo"
    let caracterio = String.fromCharCode(codigo);//le pasamos como argumento la variable codigo donde obtuvimos el caracter ingresado,entonces lo almacenamos en la variable local caracterio
    console.log(codigo);//para que muestre por consola los codigos de las teclas
    let caracteres = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","."];
    
    if(caracteres.includes(caracterio)){//// si el caracter ingresado por teclado esta en la lista de caracteres, el if esta colocado asi para que en caso de apretar un simbolo que no pertenece a "caracteres" no ingrese al if
        expresion += caracterio;//a expresion agregamos el texto de la tecla que se presione en ese momento
        $("#screen").text(expresion);//para que se muestre por pantalla 
    }
    else if(codigo == 13){
        expresion = eval(expresion);
        $("#screen").text(expresion);
    }
    else if(codigo == 99){//si es la tecla letra "c" del teclado
        expresion = "";// la variable expresion es vacia
        $("#screen").text(expresion);
    }
        
    $("#screen").attr("value",expresion);//El método .attr() nos permite recuperar el valor de un atributo o bien de modificarlo.    

});