document.querySelector( '.animeer-knop' ).addEventListener( 'click', (e) =>{
 document.querySelector( '.vlakje' ).classList.toggle( 'vlakje__naar-rechts' );
});

//Na het laden van de pagina, start de animatie van de Main blokje
setTimeout( () => { 
 document.querySelector('.vlakje').classList.toggle('vlakje__naar-rechts');
}, 300);

//Nav button klik: 
const menuKnop        =  document.querySelector( '.nav__knop' );
const navigationItems =  document.querySelectorAll( '.nav__link' );

 menuKnop.addEventListener( 'click', () => {
  navigationItems.forEach( (item, index) => {
  
   setTimeout( () => { 
    item.classList.toggle( 'nav__link--schuif-in' );
    }, 100 * index);
  });
  document.querySelector( '.hamburger_button' ).classList.toggle( 'verbergen' );
  document.querySelector( '.sluitKnop' ).classList.toggle( 'verbergen' );
  
 });