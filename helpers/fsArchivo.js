const fs = require('fs');

const archivo = './db/p1.json';

const leerDB = () =>{
   if(!fs.existsSync(archivo)){
        return false;
   }

   const info = fs.readFileSync( archivo, { encoding : 'utf-8' } );
   const data = JSON.parse(info);
  
   return data;
}

module.exports = {
    leerDB
}