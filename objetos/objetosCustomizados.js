function changeName(name){
    this.nome = name
    this.updatedAt = new Date()
}


const task1 = {
  nome: "task 1",
  createdAt: new Date(),
  updatedAt: null,
  completed: false,
  changeName: changeName 
};


const task2 = {
  nome: "task 2",
  createdAt: new Date(),
  updatedAt: null,
  completed: false,
  changeName: changeName,};

task1.changeName("Nome atualizado")
task2.changeName("Nome atualizado");

console.log(task1)
console.log(task2)