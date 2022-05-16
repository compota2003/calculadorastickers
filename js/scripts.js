function calcular(operacion){

    var ancho=parseFloat(document.getElementById('ancho').value)
    var alto=parseFloat(document.getElementById('alto').value)
    
    document.getElementById('result').value=((ancho+0.6)*(alto+0.6));
    
 
}



function calcular2(operacion){

    var ancho2=parseFloat(document.getElementById('ancho2').value)
    var alto2=parseFloat(document.getElementById('alto2').value)
    
    document.getElementById('result2').value=(ancho2*alto2);
    
   
}

function calcular3(operacion){

    var cmMaterial=parseFloat(document.getElementById('cmMaterial').value)
    var cmSticker=parseFloat(document.getElementById('cmSticker').value)
    
    document.getElementById('result3').value=(cmMaterial/cmSticker);
    
   
}
