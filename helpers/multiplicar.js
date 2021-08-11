const fs= require("fs");
const colors= require("colors");
const crearArchivo=async(base=5, listar=false,hasta=10)=>{
    try{
        let salida="";
        let consola=""
        for(let i=1; i<=hasta;i++){
            salida+=`${base} x ${i} = ${base*i}\n`;
            consola+=`${base} ${"x".rainbow} ${i}${"=".rainbow} ${base*i}\n`;

        }
        if(listar){
            console.log("=============== \n tabla del:".rainbow
            ,base,"\n================".rainbow);
            console.log(consola);
        } 
        
        /*
        fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
            if(err) throw err;
            console.log(`tabla-${base}.txt creado`);
        });
        */
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
    
        return `tabla-${base}.txt `;
    
    }catch(err){
        console.log(err);
    }
    }

module.exports={
    crearArchivo: crearArchivo
}