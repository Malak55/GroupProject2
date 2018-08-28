$(document).ready(function() {
  // Getting references to the input and plan container
  // var numHeadsInput = $("#plan-num-heads");
  // var startWeightInput = $("#plan-start-weight");
  // var costPerHeadInput = $("#plan-cost-per-head");
  // var pastureAcresInput = $("#plan-pasture-acres");
  // var pastureRentInput = $("#plan-pasture-rent");
  // var vetCostInput = $("#plan-vet-cost");
  // var truckCostInput = $("#plan-truck-cost");
  // var interestRateInput = $("#plan-interest-rate");
  // var weightGainInput = $("#plan-weight-gain");
  // var daysOnPastureInput = $("#plan-days-on-pasture");
  // var authorList = $("tbody");
  // var planContainer = $(".plan-container");

  // Adding event listeners to the form to create a new plan
  // and the button to delete a plan?????
  $(document).on("submit", "#plan-form", handlePlanFormSubmit); // fix html id link
  // $(document).on("click", ".delete-plan", handleDeleteButtonPress);

  // Getting the initial list of plans
  planDisplay();

  // A function to handle what happens when the form is submitted to create a new Plan
  function handlePlanFormSubmit(event) {
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
    // Calling the upsertPlan function and passing in the value of the name input
    upsertPlan({
      firstNameInput: firstNameInput.val().trim(),
      lastNameInput: lastNameInput.val().trim(),
      emailInput: emailInput.val().trim(),
      passwordInput: passwordInput.val().trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertPlan(planData) {
    $.post("/api/plans", planData).then(planDisplay); // update display
  }
});
