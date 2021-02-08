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

function signOut(){
    auth.signOut()
    window.location.replace("index.html")
    collection = null
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
