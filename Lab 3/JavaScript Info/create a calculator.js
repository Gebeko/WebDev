let calculator = {
    read(){
        this.a = +prompt('Give num 1',0);
        this.b = +prompt('Give num b',0);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );