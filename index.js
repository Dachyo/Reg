// Инициализация EmailJS
emailjs.init("YOUR_USER_ID");

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Получение данных из формы
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Параметры для отправки через EmailJS
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  //EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(function(response) {
      document.getElementById("status").textContent = "Message sent successfully!";
      document.getElementById("contact-form").reset();
    }, function(error) {
      document.getElementById("status").textContent = "Failed to send message. Please try again.";
      console.error("Error:", error);
    });
});