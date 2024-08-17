const todos = [
    {
        id: 1,
        text : 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text : 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text : 'dentist appt',
        isCompleted: false
    }
];
// console.log (todos[1].text); 
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// loops on it
for (let todo of todos) {
    console.log(todo.text);
}
// forEach
todos.forEach(function(todo) {
    console.log(todo.text);
});

// map
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);