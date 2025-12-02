import { Instrumentos } from "./nuevapoke";
import { Guitarra } from "./nuevapoke";
import { violin } from "./nuevapoke";   


const miGuitarra = new Guitarra("Fender", "eléctrica");
miGuitarra.hacerSonido(); 
miGuitarra.tocar(); 

const miViolin = new violin("Yamaha", "clásico");
miViolin.hacerSonido(); 
miViolin.tocar(); 