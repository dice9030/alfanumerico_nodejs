require('colors');

const { leerDB } = require('./helpers/fsArchivo');


console.clear();
const main = async() =>{
    
    //Leer la  bd de datos
    const tareasDB = leerDB();   
    //Leer la  info para verificar los datos de acuerdo a la condición
    tareasDB.inputs.map( e => {
        
       
        console.log(`${e}:`.yellow )
        if( parseInt( e.substring(0,1)) >= 0  ) {
            console.log('No, porque empieza con un numero'.red)
        }else{           
            let guion = false;
            let noAlfanumerico = false;
            for (let i = 0; i < e.length; i++) {                                                                                
                if(e.charAt(i) == '-'){                    
                    guion= true;                   
                } 
                if(i > 0 ){
                    if(parseInt( e.substring(0,1)) >= 0){                    
                        nro= true;                   
                    } 
                }                   
                const caracteres = RegExp("[\\[\\]?*+|{}\\\\()@.\n\r]");                 
                if(caracteres.test(e.charAt(i)) ) noAlfanumerico=true
                
            }
            if(guion){
                console.log(`- No porque tiene un '-'`.red)
            } 
            if(noAlfanumerico){
                console.log('No porque contiene caracteres no alfanuméricos'.red)
            } 
            if(!guion && !noAlfanumerico ){
                console.log('Si'.green)
            }           
        }    
        console.log('-------------')

    } );
   

}

main();