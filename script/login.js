function validateLogin(event) {
    event.preventDefault();

    const form = document.getElementById("login-form");
    const username = form.username.value;
    const password = form.password.value;

    sessionStorage.setItem('username', username);

    if (username === 'Adson' && password === '1234') {
        window.location.href = './index.html';

        return;
    }

    alert('Usuário ou senha inválidos!');
}