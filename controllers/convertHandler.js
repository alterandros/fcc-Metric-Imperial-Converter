function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    const numRegex = /[.\d\/]+/g;
    if(input.includes('/')) {
      let num = input.split('/');
      if(num.length > 2) {
        return 'invalid number';
      } else {
        let wholeNumber = input.match(numRegex);
        let divisor = wholeNumber[0].split('/');
        result = divisor[0] / divisor[1];
        return result.toFixed(5);
      }
    }
    result = input.match(numRegex) || 1;
    return result[0] || result;
  };
  
  this.getUnit = function(input) {
    let result;
    const numRegex = /[a-zA-Z]+/g;
    result = input.match(numRegex);
    return result[0];
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
