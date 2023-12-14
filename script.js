const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	// Check if sampleObject is defined
  if (typeof sampleObject !== 'undefined' && sampleObject !== null) {
    // Check if the key exists in the sampleObject
    return key in sampleObject;
  } else {
    // If sampleObject is not defined, return false
    return false;
  }
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
