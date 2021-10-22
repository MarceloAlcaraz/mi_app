class CodeBreaker {
  constructor(code = 5) {
    this.code = code;
  }

  arriesgar(intento) {
    return intento == this.code ? "Ganaste!" : "No Ganaste";
  }
}

export default CodeBreaker;
