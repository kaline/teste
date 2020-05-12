
const url = 'http://localhost:3000/ementas';

fetch(url, {
	
}).then(response =>{
    return response.json();

}).then(data =>{
    console.log(data)
    var obj = data.dados;
    console.log(obj);
    var dataPairs = Object.entries(obj);
    var ementas = "";
    
    for(var i = 0; i < dataPairs.length; i++){
        ementas +='<div class="card-header" id="headingThree">'+
        '<h5 class="mb-0"><button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" value="'
        + i + '">' + dataPairs[i][0]  +'. '+ obj[i].descricaoTipo+ ' - '+ obj[i].id+' </button></h5></div>';
     ementas +='<div id="collapseOne" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">'
     +'<div class="card-body" value="' + i + '">'
     + obj[i].ementa+'</div></div>';
        //  ementas +='<div class="card-header"><a class="card-link" data-toggle="collapse" data-target="#demo" href="#demo" aria-expanded="" aria-controls="demo"  value ="' + i + '">' + dataPairs[i][0] + " . " + 
        //  obj[i].descricaoTipo + " - "+ obj[i].id +'</a></div>';
        //  ementas += '<div id="demo" class="collapse show" value="'+ i + '">' + obj[i].ementa +'</div>';
    }
    
    document.getElementById("accordion").innerHTML = ementas;

})

.catch(error =>{
    console.log(error);

})