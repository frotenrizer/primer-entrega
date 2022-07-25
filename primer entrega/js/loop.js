var cadena_datos = obtenerDatos();

var segmentos = cadena_datos.split("|");

let 
function obtenerPromedios()
{
    var cont = 0;

    for(x=0;x<segmentos.length -1;x++)
    {
        if(segmentos[x] != "")
        {
            cont = cont +1;
            var promedio = calcularPromedio(segmentos[x]);
            mostrarPromedio(promedio, cont);
        }                
    }

}


function mostrarPromedio(promedio, posicion)
{
    tabla_promedios.rows[posicion].cells[4].innerHTML = promedio;            
}


function calcularPromedio(datos)
{
    var arreglo_datos = datos.split(",");
    cal_1 = arreglo_datos[2];
    cal_2 = arreglo_datos[3];

    promedio = (parseInt(cal_1) + parseInt(cal_2)) / 2;

    return promedio;
}


function mejorPromedio()
{
    var promedios = document.getElementsByClassName("promedio");

    var cont = 0;
    var mejor_promedio = 0;


    for(x=0; x<=promedios.length-1; x++)
    {

        if(parseInt(promedios[x].innerText) > mejor_promedio)
        {
            mejor_promedio = parseInt(promedios[x].innerText);
        }
    }

    return mejor_promedio;       
}


function obtenerDatosMejorPromedio()
{
    var mejor_promedio = mejorPromedio();
    var filas = tabla_promedios.rows.length;
    var columnas = tabla_promedios.rows[0].cells.length;
    var mejores_promedios = "";
    for(x=0;x<filas;x++)
    {
        for(y=0;y<columnas;y++)
        {
           // if(tabla_promedios.rows[x].cells[1].innerText == mejor_promedio)
            //{
                mejores_promedios = mejores_promedios + tabla_promedios.rows[x].cells[y].innerText;
                mejores_promedios = mejores_promedios + ",";
            //}
        }
        mejores_promedios = mejores_promedios + "|";
    }

    //llenando el arreglo con los mejores promedios
    var arreglo_mejores_promedios = mejores_promedios.split("|");

    for(x=0; x<arreglo_mejores_promedios.length-1;x++)
    {
        arreglo_promedio = arreglo_mejores_promedios[x].split(",");
        document.getElementById("mejorPromedioDiv").innerHTML = "Mejores promedios<br> id: " + arreglo_promedio[0] + "<br> Nombre: " + arreglo_promedio[1] + "<br> promedio: " + arreglo_promedio[4] + "<br><hr>";
    }

    //agregando los promedios al div

}


function promediosAprobatorios()
{
    var filas = tabla_promedios.rows.length;

    for(x=0;x<filas;x++)
    {
        if(parseInt(tabla_promedios.rows[x].cells[4].innerText) >= 8)
        {
            tabla_promedios.rows[x].style.backgroundColor = "green";
        }
    }

}


function promediosReprobatorios()
{
    var filas = tabla_promedios.rows.length;

    for(x=0;x<filas;x++)
    {
        if(parseInt(tabla_promedios.rows[x].cells[4].innerText) < 8)
        {
            tabla_promedios.rows[x].style.backgroundColor = "red";
        }
    }
}


function obtenerDatos()
{
    var cadenaDatos = "";
    var filas = tabla_promedios.length;
    var columnas = tabla_promedios.rows[0].cells.length;

    for(x=1; x<filas; x++)
    {
        for(y=0; y<columnas-1; y++)
        {                    
            cadenaDatos = cadenaDatos + tabla_promedios.rows[x].cells[y].innerHTML;
            cadenaDatos = cadenaDatos + ",";
        }

        cadenaDatos = cadenaDatos + "|";
    }            

    return cadenaDatos;
}