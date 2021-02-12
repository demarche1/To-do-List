// Form page events
document.querySelector('#signUp').addEventListener('click', () => {
    signUp()
})

document.querySelector('#signIn').addEventListener('click', () => {
    signIn()
})


function signUp() {
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            email.value = ''
            password.value = ''
            alert('Usuário cadastrado com sucesso!')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
}

function signIn() {
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user
            window.location.replace("todo.html")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
}






