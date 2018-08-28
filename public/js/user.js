$(document).ready(function() {
  // Getting references to the input and user container
  var firstNameInput = $("#user-fname");
  var lastNameInput = $("#user-lname");
  var emailInput = $("#user-email");
  var passwordInput = $("#user-pw");
  // var authorList = $("tbody");
  // var userContainer = $(".user-container");

  // Adding event listeners to the form to create a new user
  // and the button to delete a User?????
  $(document).on("submit", "#user-form", handleUserFormSubmit); // fix html id link
  // $(document).on("click", ".delete-user", handleDeleteButtonPress);

  // Getting the initial list of Users
  UserDisplay();

  // A function to handle what happens when the form is submitted to create a new User
  function handleUserFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    var emptyFieldExists =
      firstNameInput.val().trim().length < 1 ||
      lastNameInput.val().trim().length < 1 ||
      emailInput.val().trim().length < 1 ||
      passwordInput.val().trim().length < 1;
    if (emptyFieldExists) {
      return;
    }
    // Calling the upsertUser function and passing in the value of the name input
    upsertUser({
      firstNameInput: firstNameInput.val().trim(),
      lastNameInput: lastNameInput.val().trim(),
      emailInput: emailInput.val().trim(),
      passwordInput: passwordInput.val().trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertUser(userData) {
    $.post("/api/users", userData).then(UserDisplay); // update display
  }
});
