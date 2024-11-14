
let expression = '';


function addNum(n) {
    
    expression += n;
    
    addScreen(expression)
}

function addOperator(operator) {
    expression += operator;
    addScreen(expression)
}

function calcul() {
    const result = eval(expression)
    document.getElementById('screen').value = result
}

function addScreen() {
    document.getElementById('screen').value = expression
}

function canc() {
    expression = '';
    addScreen();
}



for (let i = 9; i >= 0; i--) {
    let btn = document.createElement("button");
    btn.innerHTML = i;
    document.getElementById("contnumb").appendChild(btn);
 
    if (i === 0) {
        
        btn.style.width = '200px';
        btn.style.height = '65px';
        btn.style.borderRadius ="186px"
        
       
    }

   
    btn.addEventListener('click', function () {
       
        addNum(i);
    });
}
 
let jsoperatori = ['+', '-', '/', '*','.'];
let calcoli = ['AC', '=', '%'];

for (let j = 0; j < jsoperatori.length; j++) {
    let btno = document.createElement("button");  
    btno.innerHTML = jsoperatori[j]; 
    console.log(jsoperatori[j]); 
    document.getElementById("operateurs").append(btno); 
    
    btno.addEventListener('click', function () {
        addOperator(jsoperatori[j]);
    });
    
    
     
}
 
for(let y = 0; y < calcoli.length; y++) {
    let btnc = document.createElement("button");  
    btnc.innerHTML = calcoli[y];
    console.log(calcoli[y]); 
    document.getElementById("calcul").appendChild(btnc);
    if(calcoli[y] === '='){
        btnc.addEventListener('click', function () {
            calcul(y);
        });
    }else{
        btnc.addEventListener('click', function () {
            canc(y);
        });
    }
}

document.getElementById('screen').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9+\-*./]/g, '');
});
document.getElementById('screen').addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        submitExpression();  
    }
});
document.getElementById('screen').addEventListener('click', function () {
    this.blur();
});

function submitExpression() {
    const expression = document.getElementById('screen').value;
    // Qui potresti valutare l'espressione o fare altro
    document.getElementById('screen').textContent = "Risultato: " + eval(expression);
}

// function visbility(e){
//     if(e.style.visbility.value === 'hidden'){
//         e.style.
//     }
// }

// let currentDate = document.createElement('p');  // Creazione di un nuovo elemento <p>
// currentDate.innerHTML = new Date();
// let currentDate = dayjs();
// dateParagraph.innerHTML = currentDate.currentDate.format('dddd, YYYY MM DD HH:mm');
// document.getElementById('date').appendChild(dateParagraph);


    function calculatorOpen(){
        let calc = document.querySelector('#calculatrice')
        calc.classList.toggle('calhidden');
        calc.classList.toggle('changeposition') 
        

    }
let icona = document.querySelector('button')

icona.addEventListener('dblclick', calculatorOpen)




////////////////////////////////////////////////////////////////////////////////////////
let drag = false;
let offsetX, offsetY;


icona.addEventListener('mousedown', function (e) {
    drag = true;
    offsetX = e.clientX - icona.getBoundingClientRect().left;
    offsetY = e.clientY - icona.getBoundingClientRect().top;
    icona.style.opacity = "0.8"; // Rende il bottone leggermente trasparente quando trascinato
});


document.addEventListener('mousemove', function (e) {
    if (drag) {
        icona.style.left = e.clientX - offsetX + 'px';
        icona.style.top = e.clientY - offsetY + 'px';
    }
});


document.addEventListener('mouseup', function () {
    drag = false;
    icona.style.opacity = "1"; 
});


//////////////////////////////////////////////////////////////////
let calc = document.querySelector('.calculatrice')

calc.addEventListener('mousedown', function (e) {
    drag = true;
    offsetX = e.clientX - calc.getBoundingClientRect().left;
    offsetY = e.clientY - calc.getBoundingClientRect().top;
    iccalcona.style.opacity = "0.8";
});


document.addEventListener('mousemove', function (e) {
    if (drag) {
        calc.style.right = e.clientX - offsetX + 'px';
        calc.style.bottom = e.clientY - offsetY + 'px';
    }
});


document.addEventListener('mouseup', function () {
    drag = false;
    iccalcona.style.opacity = "1"; 
});



// Funzione per gestire l'evento "wheel"
function disableScrolling(event) {
    event.preventDefault();  // Previene l'azione di default (scrolling)
}

// Aggiungi un event listener al documento
document.addEventListener('wheel', disableScrolling, { passive: false });
