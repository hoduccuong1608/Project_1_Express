
const Login = require('../models/login')
const Users = require('../models/users')
const Staffs = require('../models/staffs')
const IdCustomer = require('../models/insertCustomer')
const Customers = require('../models/customer')
class ApiController {

    login(req, res) {

        const data = req.body 
        console.log(data)
        Login.accuracy(data, function (response){
            if(response.length >0) {
                res.json({response})
            } else {
                res.json(null)
            }
            
        }) 
    }

    insert(req, res) {

        const data = req.body 
        console.log(data)
        IdCustomer.insert(data, function (response){
                res.json(response)
 
        }) 
    }

    users(req, res) {

        Users.api(function(users) {
            
            res.json(users);
        })
        
    }
    staffs(req, res) {

        Staffs.api(function(staffs) {
            
            res.json(staffs);
        })
        
    }

    customers(req, res) {

        Customers.api(function(customers) {
            
            res.json(customers);
        })
        
    }
}

module.exports = new ApiController;