// Exception AC: Wrap in try catch 1/0 and print to zero can not be divided
class DivideByZeroError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DivideByZero';
    }
}

function divide (a, b) {
  try {
    if (b === 0) throw new DivideByZeroError();
  }
  catch (error) {
    console.log('oops')
}
}

divide (1, 0)


setTimeout(function() {
    try {
        somethingwroghere
        } catch (err) {
      console.log(err.name);
      console.log(err.message);
    }
  }, 2000);

let error = new SyntaxError('custom error');
  try {
    throw error;
    } catch (err) {
  console.log(err.name);
  console.log(err.message);
}