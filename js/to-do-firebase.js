// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Getting connection to database
let db = firebase.firestore()

// Collection name
const collection = 'todo'

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

function dataWasUpdated(callback){
    db.collection(collection).onSnapshot(callback)
}