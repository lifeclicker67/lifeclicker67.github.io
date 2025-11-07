const click_thing = document.getElementById("click_thing");
const job_applications_filled_lable = document.getElementById("job_applications_filled_lable");

let job_applications_filled = localStorage.getItem("job_applications_filled");


function handleClick() {
  job_applications_filled += 1;
  job_applications_filled_lable.textContent = `job applications filled: ${job_applications_filled}`
  localStorage.setItem("job_applications_filled", job_applications_filled);
}


imageElement.addEventListener("click_thing", on_click);
