document.querySelector('.animeer-knop').addEventListener('click', (e) =>{
 document.querySelector('.vlakje').classList.toggle('vlakje__naar-rechts');
});

//Na het laden van de pagina, start de animatie van de Main blokje
setTimeout( () => { 
 document.querySelector('.vlakje').classList.toggle('vlakje__naar-rechts');
}, 300);