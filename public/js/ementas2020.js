const ementas2020 = "/ementas2020";
var obj = {};



var listElm = document.querySelector("#body");
console.log(listElm);

var tamanhoBloco = 4;
var itemAtual = 0;


var loadMore = function () {
  console.log("loadMore");
  var dataPairs = Object.entries(obj);
  var ementas = "";

  for (var i = itemAtual; i < itemAtual + tamanhoBloco; i++) {
    ementas +=
      '<div class="card-header" id="headingThree">' +
      '<h5 class="mb-0"><button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"  value="' +
      i +
      '">' +
      dataPairs[i][0] +
      ". " +
      obj[i].descricaoTipo +
      " - " +
      obj[i].id +
      " </button></h5></div>";
    ementas +=
      '<div class="card-body">' +
      '<a  id="collapseOne" class="collapse"  value="' +
      i +
      '">' +
      obj[i].ementa +
      "</a></div>";
    //  ementas +='<div class="card-header"><a class="card-link" data-toggle="collapse" data-target="#demo" href="#demo" aria-expanded="" aria-controls="demo"  value ="' + i + '">' + dataPairs[i][0] + " . " +
    //  obj[i].descricaoTipo + " - "+ obj[i].id +'</a></div>';
    //  ementas += '<div id="demo" class="collapse show" value="'+ i + '">' + obj[i].ementa +'</div>';
  }

  itemAtual += tamanhoBloco;

  document.getElementById("accordion").innerHTML += ementas;
};

window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // you're at the bottom of the page
    this.loadMore();
  }
};

fetch(ementas2020, {})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    obj = data.dados;
    console.log(obj);

    loadMore();
  })

  .catch((error) => {
    console.log(error);
  });
