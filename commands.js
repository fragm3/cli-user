const program = require('commander');
const {prompt} = require('inquirer')
const { addCustomer,
        findCustomer,
        questions,
        updateCustomer,
        removeCustomer,
        listCustomer
} = require('./index')

program.version('0.0.1').description("Cli")

program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(() => {
        prompt(questions).then(answer => addCustomer(answer))
    })

program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action((name) => findCustomer(name))

program
    .command('update <_id>')
    .alias('u')
    .description('Update a customer')
    .action((_id) => {
        prompt(questions).then(answer => updateCustomer(_id, answer))
})

program
    .command('remove <id>')
    .alias('r')
    .description('Remove a customer')
    .action((_id) => removeCustomer(_id))

program
    .command('getlist')
    .alias('g')
    .description('Get list of customer')
    .action(() => listCustomer())

program.parse(process.argv);