function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }

function checkAge(age) {
if (age > 18) {
    return true;
}
// ...
return confirm('Did parents allow you?');
}
// No difference in code as return confirm will only check if the if function is true or false.
