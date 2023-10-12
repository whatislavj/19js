// task 1 
function createClosure(initialValue) {
    let variable = initialValue;
  
    function showVariable() {
      return variable;
    }
  
    function addToVariable(value) {
      variable += value;
    }
  
    function multiplyVariableBy(value) {
      variable *= value;
    }
  
    function subtractFromVariable(value) {
      variable -= value;
    }
  
    function setVariable(newValue) {
      variable = newValue;
    }
  
    return {
      showVariable,
      addToVariable,
      multiplyVariableBy,
      subtractFromVariable,
      setVariable
    };
  }
  
  const closure = createClosure(10);
  
  console.log(closure.showVariable());
  closure.addToVariable(1);
  console.log(closure.showVariable());
  closure.multiplyVariableBy(2);
  console.log(closure.showVariable());
  closure.subtractFromVariable(1);
  console.log(closure.showVariable());
  closure.setVariable('text');
  console.log(closure.showVariable());

// task 2
  (function () {
    console.log("ceva text");
  })();
  