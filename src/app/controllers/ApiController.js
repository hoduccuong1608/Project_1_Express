
const Login = require('../models/login')
const Users = require('../models/users')
const Staffs = require('../models/staffs')
const Customer = require('../models/customer')
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

    customer(req, res) {

        const data = req.body 
        console.log(data)
        Customer.insert(data, function (response){
            if(response.length > 0) {
                res.json(response)
            } else {
                res.json(null)
            }   
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
}

module.exports = new ApiController;