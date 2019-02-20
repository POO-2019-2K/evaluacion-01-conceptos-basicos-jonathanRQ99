export default class factura {
    constructor(nombre, telefono, RFC, fechadelafactura, totaldefactura, numerodefacura) {
        this._nombre = nombre;
        this._telefono = telefono;
        this._RFC = RFC;
        this._fechadelafactura = this._getStringDate;
        this._totaldefactura = totaldefactura;
        this._numerodefactura = numerodefacura;
    }

    _getStringDate(fechadelafactura){
        let partes = fechadelafactura.split("/");
        let fechadelafactura = new Date(partes[2], partes[1] - 1, partes[0]);
        return fechadelafactura;
        }

    imprimir(){
        console.log(`${this._nombre}, ${this._telefono}, ${this._RFC}, ${this._fechadelafactura}, ${this._totaldefactura}, ${this._numerodefactura}`);

    } 

    get nombre() {
        return this._nombre;
    }

    get telefono() {
        return this._telefono;
    }
    set RFC (RFC) {
        this._RFC = RFC;
    }
    set fechadelafactura(fechadelafactura){
        this._fechadelafactura = fechadelafactura;
    }
    get totaldefactura(){
       return this._totaldefactura; 
    }
    set numerodefacura(numerodefacura){
        this._numerodefactura = numerodefacura;
    }

}