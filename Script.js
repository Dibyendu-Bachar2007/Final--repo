function sendMsg() {
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg");

    if (email === "") {
        msg.innerText = "Please enter your email.";
        msg.style.color = "red";
    } else {
        msg.innerText = "Message sent successfully!";
        msg.style.color = "green";
    }
}

function scrollToSec(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}
