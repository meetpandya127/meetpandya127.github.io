// Name: Meet Pandya
// SID: 116480203
// Email: mpandya6@myseneca.ca
// Section: ZAA
// WEB Final Assessment
// Public URL: https://meetpandya127.github.io/src/index.html

function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log('TODO - validate the longitude, latitude values before submitting');
  var latitude = document.querySelector("#latitude").value;
  var longitude = document.querySelector("#longitude").value;
  var errorLatitude = document.getElementById("latitudeDiv");
  var errorLongitude = document.getElementById("longitudeDiv");
  if (errorLatitude.childNodes.length > 1) {
    errorLatitude.removeChild(errorLatitude.lastChild);
  }
  if (errorLongitude.childNodes.length > 1) {
    errorLongitude.removeChild(errorLongitude.lastChild);
  }
  if(isNaN(latitude) || latitude < -90 || latitude > 90) {
    var txt = document.createTextNode(" must be a valid Latitude (-90 to 90)");
    errorLatitude.appendChild(txt);
    return false;
  }
  else if(isNaN(longitude) || longitude < -180 || longitude > 180){
    var txt = document.createTextNode(" must be a valid Longitude (-180 to 180)");
    errorLongitude.appendChild(txt);
    return false;
  }
  else 
    return true;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
