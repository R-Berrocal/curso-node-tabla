const fs=require("fs")
const color=require("colors");
const crearArchivo=async(base=5,listar=false,hasta=10)=>{
    try {
        
        let salida="";
        let consola="";
        for(let i=1;i<=hasta;i++){
            salida+=`${base} x ${i} = ${base*i}\n`;
            consola+=`${base} ${"x".red} ${i} ${"=".red} ${base*i}\n`;
        }
        if(listar){
            console.log("==============".red);
            console.log(`Tabla del ${base}`.red);
            console.log("==============".red);
            console.log(consola);
        }
    
        fs.writeFileSync(`./Salida/tabla del ${base}.txt`,salida);
        return `tabla del ${base}`;
        
    } catch (err) {
        throw err
    }
}

module.exports={
    crearArchivo
}