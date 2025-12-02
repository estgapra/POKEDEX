abstract class comida {
    protected nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    abstract mostrarComida(): void;

    comiendo(): void{
        console.log(`Estan comiendo ${this.nombre}`)
    }

    getNombre(): string{
        return this.nombre;
    }

    setNombre(nombre : string): void{
        this.nombre = nombre;
    }

}
class pizza extends comida {
    private ingredientes: string;
    
    constructor(nombre: string, ingredientes: string){
        super(nombre);
        this.ingredientes = ingredientes
}       

    mostrarComida(): void {
        console.log(`la pizza de ${this.getNombre()} contiene ${this.ingredientes}`);
    }

    getingredientes(): string{
        return this.ingredientes;
    }

    setingredientes(ingredientes : string): void{
        this.ingredientes = ingredientes;
    }
}
class hamburguesa extends comida {
    private tipo: string;
    
    constructor(nombre: string, tipo: string){
        super(nombre);
        this.tipo = tipo
}       

    mostrarComida(): void {
        console.log(`la hamburguesa es de ${this.getNombre()} y es una ${this.tipo}`);
    }

    getTipo(): string{
        return this.tipo;
    }

    setTipo(tipo : string): void{
        this.tipo = tipo;
    }
}