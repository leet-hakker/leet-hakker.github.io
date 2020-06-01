let fields;

document.addEventListener("DOMContentLoaded", function() {
 fields.email = document.getElementById('inputEmail');
 fields.shortContactReason = document.getElementById('shortContactReason');
 fields.longContactReason = document.getElementById('longContactReason');
});

function isNotEmpty(value) {
 if (value == null || typeof value == 'undefined' ) return false;
 return (value.length > 0);
}

function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+?^_`{|}~-]+@[a-zA0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]}?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return regex.text(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
 if (field == null) return false;

 let isFieldValid = validationFunction(field.value);
 if (!isFieldValid) {
 field.className = 'placeholderRed';
 } else {
 field.className = '';
 }

 return isFieldValid;
}

function isValid() {
 var valid = true;

 valid &= fieldValidation(fields.email, isEmail);
 valid &= fieldValidation(fields.shortContactReason, isNotEmpty);

 return valid;
}

class User {
  constructor(email, shortContactReason, longContactReason) {
    this.email = email;
    this.shortContactReason = shortContactReason;
    this.longContactReason = longContactReason;
  }
}

function contactSubmit() {
  if(isValid()) {
      let usr = new User(email.value, shortContactReason.value, longContactReason.value)
      document.getElementById('inputEmail').value = "";
      document.getElementById('shortContactReason').value = "";
      document.getElementById('longContactReason').value = "";
  }
}
