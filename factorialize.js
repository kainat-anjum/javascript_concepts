function factorialize(num) {
    var x=1;
    for (var i = 1; i <= num; i++) {
      x = x * i
    }
    console.log(x)
    return x;
  }
  
  factorialize(10);