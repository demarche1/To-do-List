let tasks = []

function createTask(){
    let taskDesc = document.getElementById('newTask').value
    if(taskDesc != ''){
        let task = {
            description: taskDesc
        }
        addTaskOnFirebase(task)
    }else{
        alert('A tarefa não pode ser vazia')
    }
}


function updateScreen(){
    let list = '<ul>'
    tasks.forEach((task) => {
        list += `<div class="li-container">
                    <li> ${task.data.description}</li> 
                    <input type="submit" class="btn" value="Deletar" id="${task.id}" onclick="deleteTask(event)">
                 </div>`
    })
    list += '</ul>'
    document.getElementById('list').innerHTML = list
    document.getElementById('newTask').value = ''
}


function deleteTask(event){
    let id = event.target.id
    deleteTaskOnFirebase(id)
}



setTimeout(() => {
    dataWasUpdated((snapshot) => {
        tasks = []
        snapshot.forEach((doc) => {
            tasks.push({
                data: doc.data(),
                id: doc.id
            })
        })
        updateScreen()
    })    
}, 1000);

// Events
document.getElementById('addTasks').addEventListener('click', function(){
    createTask()
})

document.getElementById('list').addEventListener('click', function(event){
    if(event.target.tagName == 'LI'){
       event.target.classList.toggle('checked')
    }
})

document.getElementById('signOut').addEventListener('click', ()=>{
    signOut()
})