


//Argentinie//
var argButton = document.querySelector(".argentinie");
argButton.addEventListener("click", ikbenargentijns);

function ikbenargentijns() {
    document.body.classList.add("argentijn");  
    document.body.classList.remove("barcalona","chelseablauw","dortmundgeel","atletico");
}

//Ajax Amsterdam//
var ajaxButton = document.querySelector (".ajax");
ajaxButton.addEventListener("click", speelajax)

function speelajax(){
    document.body.classList.remove("argentijn","barcalona","chelseablauw","dortmundgeel","atletico");
}

//Barcalona//
var barcaButton = document.querySelector (".barca");
barcaButton.addEventListener('click', speelbarca)

function speelbarca(){
    document.body.classList.add("barcalona");
    document.body.classList.remove("argentijn","chelseablauw","dortmundgeel","atletico");
}

//Chelsea//
var chelseaButton = document.querySelector (".chelsea");
chelseaButton.addEventListener('click', speelchelsea)

function speelchelsea(){
    document.body.classList.add("chelseablauw");
    document.body.classList.remove("argentijn","barcalona","dortmundgeel","atletico");
}

//Dortmund//
var dortmundButton = document.querySelector (".dortmund");
dortmundButton.addEventListener('click', speeldortmund);

function speeldortmund(){
    document.body.classList.add("dortmundgeel");
    document.body.classList.remove("argentijn","barcalona","chelseablauw","atletico")
}

//Atletico//

var atletiButton = document.querySelector (".atleti");
atletiButton.addEventListener('click', speelatleti);

function speelatleti(){
    document.body.classList.add('atletico'); document.body.classList.remove("argentijn","barcalona","chelseablauw","dortmundgeel")
}

//DE BEWEGING EN GELUID

var hetGeuid = document.querySelector(".trap");
var hetApplaus = document.querySelector(".applaus");

var stopbutton = document.querySelector(".buttonaan");
stopbutton.addEventListener("click", bewegen);

function bewegen(){
    document.body.classList.add("lopen");
    hetGeuid.play(); 
}

var stopbutton = document.querySelector(".buttonuit");
stopbutton.addEventListener("click", stopbewegen);

function stopbewegen(){
    document.body.classList.remove("lopen");
    hetGeuid.pause(); 
    
}


//Random Transfer//
var transferButton = document.querySelector(".transfer");
transferButton.addEventListener("click", verhuis);

function verhuis(){
    document.body.classList.remove('dortmundgeel', 'chelseablauw', 'barcalona', "argentijn","atletico");
    var randomClasses = [ 'dortmundgeel', 'chelseablauw', 'barcalona',"atletico"] ;
    var randomBewegingIndex = randomInteger( 0, randomClasses.length - 1 );
    document.body.classList.add( randomClasses[ randomBewegingIndex ] ) ;
    console.log("Verhuis naar andere club");
}


function randomInteger( min , max ) {
    return Math.floor(  Math.random() * ( max - min + 1 )  + min )
  }

//SCOREBORD//
var score = 0 ;
var scoreBord = document.querySelector('#puntenteller');

function updateScorebord() {
    scoreBord.textContent = score ;
    if (score === 30 ) {
        hetApplaus.play()
    }
    if  (score === 33 )
        hetApplaus.pause()
    }


var bal = document.querySelector(".bal");
bal.addEventListener("animationiteration", puntErbij);
     
function puntErbij(){
    console.log('doe er een puntje bij');
    score = score + 1 ;
    scoreBord.textContent = score ;
    updateScorebord();
    
}


