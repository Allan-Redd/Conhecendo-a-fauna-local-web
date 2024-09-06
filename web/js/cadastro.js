// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT3ohIbPn1weg5gjPwWGqg1U_EzooUjus",
  authDomain: "conhecendo-a-fauna-local.firebaseapp.com",
  projectId: "conhecendo-a-fauna-local",
  storageBucket: "conhecendo-a-fauna-local.appspot.com",
  messagingSenderId: "274205158255",
  appId: "1:274205158255:web:593b0c61e9db398e30d69a",
  measurementId: "G-FYL00FJW4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        message.textContent = 'Por favor, insira um e-mail válido.';
        message.style.color = 'red';
        return;
    }
    
    // Validação da senha (mínimo de 6 caracteres)
    if (password.length < 6) {
        message.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        message.style.color = 'red';
        return;
    }
    
    // Salvando no localStorage (somente para fins de exemplo; não recomendado em produção)
//     localStorage.setItem('email', email);
//     localStorage.setItem('password', password);  // **Não recomendado em localStorage!**
    
//     message.textContent = 'Registro bem-sucedido!';
//     message.style.color = 'green';
    
//     // Redirecionamento após registro (opcional)
//     setTimeout(() => {
//         window.location.href = 'home.html';  // Altere para a URL desejada
//     }, 2000);
 });

 function onSignIn(googleUser) {
//     const profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId());
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail());
    
//     // Salvando dados do Google no localStorage (por exemplo)
//     localStorage.setItem('googleId', profile.getId());
//     localStorage.setItem('googleName', profile.getName());
//     localStorage.setItem('googleEmail', profile.getEmail());
    
//     document.getElementById('message').textContent = 'Login com Google bem-sucedido!';
//     document.getElementById('message').style.color = 'green';
 }
