
const AccoutStaffs = require('../models/accoutStaffs')
const Users = require('../models/users')
const Staffs = require('../models/staffs')
const Customers = require('../models/customers')
class ApiController {

    login(req, res) {

        const data = req.body 
        console.log(data)
        AccoutStaffs.login(data, function (response){
            if(response.length >0) {
                res.json({response})
            } else {
                res.json(null)
            }
            
        }) 
    }

    addCustomer(req, res) {

        const data = req.body 
        console.log(data)
        Customers.add(data, function (response){
                res.json(response)
 
        }) 
    }

    users(req, res) {
        const id = req.params.id;
        Users.api(id, function(users) {
            
            res.json(users);
        })
        
    }
    staffs(req, res) {

        Staffs.api(function(staffs) {
            
            res.json(staffs);
        })
        
    }

    getListCustomers(req, res) {

        Customers.getAll(function(customers) {
            
            res.json(customers);
        })
        
    }

    getByID(req, res) {
        const id = req.params.id;
        Customers.getByID(id,function(customers) {
            
            res.json(customers);
        })
    }

    updateCustomer(req, res) {

        const data = req.body 
        console.log(data)
        Customers.update(data) 
    }
}

module.exports = new ApiController;