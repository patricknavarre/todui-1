const readline = require('readline');


const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`

// console.log(menu)gi
const toDoApp = function(userInput) {
  console.clear();
  if (userInput === `6`){
    interface.close()
  } else if(userInput === `5`){
    console.log('That is not available yet...')
    console.log('Please enter "6" to quit')
    interface.question(menu, toDoApp)
  } else if(userInput === `4`){
    console.log('That is not available yet...')
    console.log('Please enter "6" to quit')
    interface.question(menu, toDoApp)
  } else if(userInput === `3`){
    console.log('That is not available yet...')
    console.log('Please enter "6" to quit')
    interface.question(menu, toDoApp)
  } else if(userInput === `2`){
    console.log('That is not available yet...')
    console.log('Please enter "6" to quit')
    interface.question(menu, toDoApp)
  } else if(userInput === `1`){
    console.log('That is not available yet...')
    console.log('Please enter "6" to quit')
    interface.question(menu, toDoApp)
  }else {
    console.log('Please type "6" to quit')
    interface.question(menu, toDoApp)
  }
}

interface.question(menu, toDoApp)