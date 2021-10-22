class CodeBreaker {
  constructor(code = 5) {
    this.code = code;
  }

  arriesgar(intento) {
    if (intento == this.code){
      return "Ganaste!";
    }
    if(intento > 9){
      return this.calcularPista(intento);
    }
    return "No Ganaste";
  }

  calcularPista(intento){
    const intentoCadena = `${intento}`;
    let caracteres = intentoCadena.split('');
    let caracteresCode = `${this.code}`.split('');
    const pista = caracteres.map(caracter => {
      if (caracteresCode.includes(caracter)){
        caracteresCode = caracteresCode.splice(caracteresCode.indexOf(caracter), 1);
        return '*'
      }
      return '';
    }).join('');
    if(pista !== '')
      return pista;
    return "No Ganaste";
  }
}

export default CodeBreaker;
