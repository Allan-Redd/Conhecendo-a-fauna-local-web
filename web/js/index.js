document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Entrando...");
});

document.querySelector(".guest-login").addEventListener("click", function() {
    alert("Entrando como convidado...");
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simular validação de login
    if (email === "sergin.pineu@example.com" && password === "12345678") {
        alert('Login bem-sucedido!');
        window.location.href = "home.html"; // Redireciona para a home
    } else {
        alert('Email ou senha inválidos.');
    }
});

function enterAsGuest() {
    window.location.href = "home.html"; // Redireciona para a home
}