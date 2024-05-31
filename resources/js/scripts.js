document.addEventListener("DOMContentLoaded", function () {
	const main_container = document.getElementById("main_container");
	const error_text = document.getElementById("error_text");
	const email_input = document.getElementById("email_input");
	const success_div = document.getElementById("success_div");
	const subscribed_email_span = document.getElementById("subscribed_email_span");
	const dismiss_button = document.getElementById("success_button");

	function validateEmail(email) {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	}

	function subscribeEmail(event) {
		event.preventDefault();
		const email = email_input.value;

		if (!validateEmail(email)) {
			error_text.style.display = "block";
		} else {
			error_text.style.display = "none";
			main_container.style.display = "none";
			success_div.style.display = "block";
			subscribed_email_span.textContent = email;
		}
	}

	function dismissMessage() {
		success_div.style.display = "none";
		main_container.style.display = "block";
		email_input.value = "";
	}

	dismiss_button.addEventListener("click", dismissMessage);
});
