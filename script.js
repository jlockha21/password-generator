// Select the generate button and password textarea
var generateBtn = document.querySelector("#generateBtn");
var passwordText = document.querySelector("#password");

// Define character sets for password generation
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var spec = "!@#$%^&*()_+[]{}|;:,.<>?";

// Event listener to generate password when button is clicked
generateBtn.addEventListener("click", function() {
    // Call the writePassword function when button is clicked
    writePassword();
});

// Function to write the generated password to the textarea
function writePassword() {
    // Generate the password based on user selections
    var password = generatePassword();
    // Set the generated password as the value of the password textarea
    passwordText.value = password;
}

// Function to generate a password based on user selections
function generatePassword() {
  // Retrieve user input for password length and character options
  var length = parseInt(document.querySelector("#length").value);
  var lowerCase = document.querySelector("#lowerCase").checked;
  var upperCase = document.querySelector("#upperCase").checked;
  var numbers = document.querySelector("#numbers").checked;
  var specialChar = document.querySelector("#specialChar").checked;

// Check if none of the character options are selected
if (!lowerCase && !upperCase && !numbers && !specialChar) {
  alert("Please select at least one character option (lowercase, uppercase, numbers, or special characters).");
  return ""; // Return an empty string if no options are selected
}

  // Validate password length to ensure it is within the desired range
  if (length < 8 || length > 50) {
      alert("Password length must be between 8 and 50.");
      return "";
  }

  // Create a string of characters based on selected options
  var charString = "";
  if (lowerCase) {
      charString += lowerLetters;
  }
  if (upperCase) {
      charString += upperLetters;
  }
  if (numbers) {
      charString += nums;
  }
  if (specialChar) {
      charString += spec;
  }

  // Generate a random password using the character string
  var password = "";
  for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charString.length);
      password += charString[randomIndex];
  }

  return password;
}
