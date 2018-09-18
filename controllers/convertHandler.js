/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    const regex = /[a-zA-Z]{1,3}/gm;
    let unitIndex  = input.match(regex)[0];
    
    result = input.substring(0, input.indexOf(unitIndex));    
    if(result.length == 0) return 1;
    if(result.indexOf("/") != result.lastIndexOf("/") || result.indexOf(".") != result.lastIndexOf(".")) return "invalid number";
    if(result.indexOf("/") != -1) {
      let split = result.split("/");
      result = split[0] / split[1];
    }    
    return Number(result);
  };
  
  this.getUnit = function(input) {
    let result;
    const regex = /[a-zA-Z]{1,3}/gm;
    let match = input.match(regex)[0];
    let valid = ['gal','l','mi','km','lbs','kg'];
    valid.forEach(function(ele, i) {      
      if(match.toLowerCase() == ele) result = ele;
    });
    return result ? result : "invalid unit";
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    let from = ['gal','l','mi','km','lbs','kg'];
    let to = ['l','gal','km','mi','kg','lbs'];
    for(let i = 0; i < from.length; i++) {
      if(initUnit == from[i]){ result = to[i]; return result;}
    }
    return "invalid unit";
  };

  this.spellOutUnit = function(unit) {
    let result;
    let from = ['gal','l','mi','km','lbs','kg'];
    let to = ["gallons", "liters", "miles", "kilometers", "pounds", "kilograms"];
    from.forEach(function(ele, i) {
      if(unit == ele) result = to[i];
    });    
    return result ? result : "invalid unit";
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    switch(initUnit) {
      case "gal":
        return initNum * galToL;
      case "l":
        return initNum / galToL;
      case "mi":
        return initNum * miToKm;
      case "km":
        return initNum / miToKm;
      case "lbs":
        return initNum * lbsToKg;
      case "kg":
        return initNum / lbsToKg;
    }
    
    return NaN;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let returnRound = Math.round(returnNum * 100000) / 100000;
    let initRound = Math.round(initNum * 100000) / 100000;
    if(returnNum.length > 7) returnRound = returnNum.substring(0, 6);
    if(initNum.length > 7) initRound = initNum.substring(0, 6);
    let returnUnitVerbose = this.spellOutUnit(returnUnit);
    let initUnitVerbose = this.spellOutUnit(initUnit);    
    let result = `${initRound} ${initUnitVerbose} converts to ${returnRound} ${returnUnitVerbose}`    //"1 kilograms converts to 2.20462 pounds"    
    return result;
  };
  
}

module.exports = ConvertHandler;
