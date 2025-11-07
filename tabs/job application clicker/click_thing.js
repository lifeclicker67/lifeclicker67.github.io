const click_thing = document.getElementById("click_thing");
const job_applications_filled_label = document.getElementById("job_applications_filled_label");

let job_applications_filled = localStorage.getItem("job_applications_filled");

if (job_applications_filled === null) {
    job_applications_filled = 0;
} else {
    job_applications_filled = parseInt(job_applications_filled, 10);
}

function handleClick() {
  job_applications_filled += 1;

  job_applications_filled_label.textContent = `job applications filled: ${job_applications_filled}`;

  localStorage.setItem("job_applications_filled", job_applications_filled);
}

click_thing.addEventListener("click", handleClick);


job_applications_filled_label.textContent = `job applications filled: ${job_applications_filled}`;

