document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("form-status").textContent = "Thank you for your message! We will get back to you soon.";
    document.getElementById("form-status").style.color = "white";

    document.getElementById("contact-form").reset();
});
