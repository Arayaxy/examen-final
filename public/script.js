document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const message = document.getElementById('message');
    message.textContent = 'Registro en proceso...';
    message.style.backgroundColor = '#e9d8fd';
    
    // Simular envío de formulario
    setTimeout(() => {
        message.textContent = '¡Registro exitoso!';
        message.style.backgroundColor = '#9f7aea';
        message.style.color = 'white';
        this.reset();
    }, 2000);
});

document.getElementById("registerForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    document.getElementById("message").innerText = data.message;
});
document.getElementById("registerForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const messageBox = document.getElementById("message");
});
   