import { comida } from "./Claa";
const pizza1 = new pizza("Dominos", "Pepperoni");
const burger1 = new hamburguesa("Carls jr", "Western Bacon");

console.log(`la pizza de ${pizza1.getNombre()} es de ${pizza1.getingredientes()}.`);
pizza1.mostrarComida()
pizza1.comiendo()

console.log(`la pizza de ${burger1.getNombre()} es de ${burger1.getTipo()}.`);
burger1.mostrarComida()
burger1.comiendo()