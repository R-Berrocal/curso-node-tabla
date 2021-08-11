const { describe } = require("yargs");

const argv=require("yargs")
        .option("b",{
            alias: "base",
            type: "number",
            demandOption: true,
            describe:"Es la base de la tabla de multiplicar"
        })
        .check((argv, options)=>{
            if(!isNaN(argv.b)){
                return true;
            }
            throw " la base no es un número"; 
        
        }).option("l",{
            alias: "listar",
            type: "boolean",
            default:  false,
            describe: "Muestra la tabla en consola"
        }).option("h",{
            alias: "hasta",
            type: "number",
            describe: "es el limite de la tabla de multiplicar"            
        }).argv;

module.exports=argv;