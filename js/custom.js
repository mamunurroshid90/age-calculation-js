const input_date = document.getElementById("date-input");
const calculate_btn = document.getElementById("calculate-btn");
const result = document.getElementById("result");

calculate_btn.addEventListener("click", () => {
  if (input_date.value === "") {
    alert("Please select your date of birth");
  } else {
    const dob = new Date(input_date.value);
    const dob_year = dob.getFullYear();

    // current date
    const now_current_date = new Date();
    const now_current_year = now_current_date.getFullYear();
    const total_age = now_current_year - dob_year;

    result.innerHTML = `Your age is ${total_age}`;
  }
});
