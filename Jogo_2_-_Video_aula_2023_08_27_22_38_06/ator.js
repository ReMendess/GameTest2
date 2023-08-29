//Váriaveis ator.
let yAtor = 368;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor, 35, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
   
}
   if (keyIsDown(DOWN_ARROW)){
     if(podeSeMover()){
       yAtor += 3;
  }
 }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      voltaPosicaoinicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaPosicaoinicial(){
  yAtor = 366;
}


function incluirPontos(){
  textAlign(CENTER)
  textSize(25);
  text(meusPontos, width / 5, 27);
  fill(color(255, 240, 60));
  
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos +=1;
    somDoPonto.play();
    voltaPosicaoinicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
  
}

function podeSeMover(){
  return yAtor < 366;
  
}





