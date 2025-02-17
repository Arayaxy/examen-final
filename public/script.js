document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const message = document.getElementById('message');
    
    // Mostrar mensaje de carga
    message.textContent = 'Registro en proceso...';
    message.className = 'show';
    
    try {
        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value
            })
        });

        const data = await response.json();
        
        // Mostrar mensaje con estilo adecuado
        message.className = response.ok ? 'success show' : 'error show';
        message.textContent = data.message;

        // Reiniciar formulario si es exitoso
        if(response.ok) this.reset();

    } catch (error) {
        message.className = 'error show';
        message.textContent = 'Error de conexión';
    }

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
        message.className = '';
        message.textContent = '';
    }, 3000);
});