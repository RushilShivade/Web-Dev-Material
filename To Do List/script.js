let input = prompt('Select option form the list')

let todo = ['Attent meet @4', 'Go to the gym']
while (input !== 'quit') {

    if (input === 'list') {
        console.log('**********')
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i + 1} : ${todo[i]}`);
        }
        console.log('**********')
        // input = prompt('Select option form the list')
    }

    else if (input === 'new') {
        const newTask = prompt('What is the task?');

        todo.push(newTask);
        console.log(`${newTask} : Task successfully added.`)
    }

    else if (input === 'delete') {
        const idx = parseInt(prompt('Enter index of task you want to delete: '));
        if (!Number.isNaN(idx) && idx < todo.length) {
            const deletedTask = todo.splice(idx, 1);
            console.log(`${deletedTask} is deleted successfully.`)
        }
        else {
            console.log('Unknown index.')
        }
        // console.log(idx)

    }   

    input = prompt('Select option form the list')
}
console.log("App quit.")