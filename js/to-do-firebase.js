// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Getting connection to database
let db = firebase.firestore()
let auth = firebase.auth()

// Collection name
let collection;

function addTaskOnFirebase(task){
    db.collection(collection)
        .add(task)
        .then((docRef) => {
            console.log('Sucesses! ', docRef.id);
        })
        .catch((err) => {
            console.log('Error ', err);
        })
}

function deleteTaskOnFirebase(task){
    db.collection(collection)
        .doc(task)
        .delete()
        .then((docRef) => {
            console.log('Sucesses ', docRef)
        })
        .catch((err)=>{
            console.log('Error', err);
        })
}


// Observators
function dataWasUpdated(callback){
    db.collection(collection).onSnapshot(callback)
}


auth.onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      collection = uid
    } else {
      
    }
  });


// Form Page functions
function signUp(){
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user.uid;
        alert('Usuário cadastrado com sucesso!')
        
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('O endereço de e-mail já está sendo usado.')
        // ..
    });
}

function signIn(){
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // collection = user
        window.location.replace("todo.html")
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('Não há registro de usuário correspondente a este identificador.\nVerifique novamente seu email e senha.')
    });
}

function signOut(){
    auth.signOut()
    window.location.replace("index.html")
    collection = null
}