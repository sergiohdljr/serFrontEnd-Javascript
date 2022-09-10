function Task(nome){
    this.name = nome
    this.created = new Date()
    this.changeName = function(newName){
        this.name = newName
    }
}

const task2 = new Task("minha segunda tarefa")

const task1 = new Task("minha tarefa")
task1.changeName("minha tarefa atualizada")

console.log(task1)
console.log(task2);