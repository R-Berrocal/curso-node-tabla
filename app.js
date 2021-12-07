
const argv=require("./config/yargs")
const {crearArchivo}= require("./helpers/multiplicar");
require("colors");



// const [,,arg3="base=3"]=process.argv;
// const [,base=5]=arg3.split("=");

crearArchivo(argv.b,argv.l,argv.h).then(nombreArchivo=>console.log(nombreArchivo.green,"creado".green)).catch(err=>console.log(err));


