export default class casa {
    constructor(precio, superficie, numerodehabitaciones, numerodebaños){
        this._precio = precio;
        this._superficie = superficie;
        this._numerodehabitaciones =numerodehabitaciones;
        this._numerodebaños = numerodebaños;
    }
    imprimir(){
        console.log(`${this._precio}, ${this._superficie}, ${this._numerodehabitaciones}, ${this._numerodebaños}`);
    }

    get precio(){
        return this._precio;
    }
    get superficie(){
        return this._superficie;
    }
    get numerodehabitaciones(){
        return this._numerodehabitaciones;
        }
    get numerodebaños(){
        return this._numerodebaños;
    }

}