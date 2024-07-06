/**
 * Metodos de propiedad.
 * Se llama asi porque su sintaxis es similar a la llamada de un metodo
 */

const karaoke = {
   reproducir:function(pista){
    console.log(`Reproduciendo pista número ${pista} `);
   },
   pausar:function(){
    console.log('Pausando música');
   }
};

karaoke.reproducir(100);
karaoke.pausar();