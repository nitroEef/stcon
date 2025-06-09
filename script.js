document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon"); // Make sure this ID exists
    const centerLink = document.querySelector(".centerLink");

    menuIcon.addEventListener("click", function () {
      centerLink.classList.toggle("active");
    });
  });


function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };

emailjs.send ("service_r6dfovm", "template_wqo42zk",templateParams)
.then(() =>alert("your message is sent successfully").catch(() => alert("your email is not sent o")));

}

  