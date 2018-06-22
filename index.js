const mongoose = require('mongoose');

//Map global promise
mongoose.Promise = global.Promise;

//Connect to mongoose
const db = mongoose.connect('mongodb://localhost:27017/customercli');

const questions = [
    {
        type: 'input', 
        name: 'firstname',
        message: 'Customer first name'
    },
    {
        type: 'input', 
        name: 'lastname',
        message: 'Customer last name'
    },
    {
        type: 'input', 
        name: 'phone',
        message: 'Customer phone number'
    },
    {
        type: 'input', 
        name: 'email',
        message: 'Customer email id'
    }
]

const Customer = require('./models/customer')

//Add customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New customer Added')
    })
}
    
const findCustomer = (name) => {
    const search = new RegExp(name, 'i')
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
}

const updateCustomer = (_id, customer) => {
    Customer.update({_id}, customer)
        .then(customer => {
            console.info('Customer updated')
    })
}

const removeCustomer = (_id) => {
    Customer.remove({_id})
        .then(customer => {
            console.info('Customer removed')
    })
}

const listCustomer = () => {
    Customer.find()
        .then(customers => {
            console.info(customers)
            onsole.info(`${customers.length} customers`)
    })
}

module.exports = {
    findCustomer,
    addCustomer,
    questions, 
    updateCustomer,
    removeCustomer,
    listCustomer
}

//Find customer