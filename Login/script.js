document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Aqui você pode adicionar a lógica para verificar o username e password
    if (username === 'admin' && password === 'password') {
        alert('Login bem-sucedido!');
        // Redirecionar para outra página ou realizar outra ação
    } else {
        errorMessage.textContent = 'Username ou senha incorretos.';
    }
});