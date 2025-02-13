let calculator = {
  read(arg1, arg2) {
    this.arg1 = arg1;
    this.arg2 = arg2;
  },

  sum() {
    return this.arg1 + this.arg2;
  },

  mul() {
    return this.arg1 * this.arg2;
  },
};




// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
