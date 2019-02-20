export default class paciente{
    constructor(nombre, edad, fechadenacimiento, estaturadelpaciente, pesodelpaciente) {
        this._nombre = nombre;
        this._edad = edad;
        this._fechadenacimiento = this._getStringDate;
        this._estaturadelpaciente = estaturadelpaciente;
        this._pesodelpaciente = pesodelpaciente;
    }
    _getStringDate(fechadenacimiento){
        let partes = fechadenacimiento.split("/");
        let fechadenacimiento = new Date(partes[2], partes[1] - 1, partes[0]);
        return fechadenacimiento;
        }
        imprimir() {
            console.log(`${this._nombre}, ${this._edad}, ${this._fechadenacimiento}, ${this._estaturadelpaciente}, ${this._pesodelpaciente}`);
        }
    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    set fechadenacimiento(fechadenacimiento){
        this._fechadenacimiento = fechadenacimiento;
    }
    get estaturadelpaciente(){
        return this._estaturadelpaciente;
    }
    get pesodelpaciente(){
        return this._pesodelpaciente;
    }
}