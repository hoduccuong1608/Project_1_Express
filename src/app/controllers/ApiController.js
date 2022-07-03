
const Login = require('../models/login')
const Users = require('../models/users')
const Staffs = require('../models/staffs')
class ApiController {

    login(req, res) {

        const {username, password} = req.body 

        Login.accuracy(function(data) {
            /// kiểm tra username vs pass nếu đúng trả về accessToken: thông tin nhân viên
            res.json({data, username, password});
        })
        
    }

    users(req, res) {

        Users.api(function(users) {
            
            res.json({users});
        })
        
    }
    staffs(req, res) {

        Staffs.api(function(staffs) {
            
            res.json({staffs});
        })
        
    }
}

module.exports = new ApiController;