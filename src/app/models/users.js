/// get data from database
const db = require('../db/mysql') 
const Users = function(users) {
    this.id_number = users.id_number;
    this.accout_number = users.accout_number;
    this.full_name = users.full_name;
    this.id_date = users.id_date;
    this.phone_number = users.phone_number;
    this.money = users.money;
}
Users.api = function(result){
    db.query("SELECT * FROM users", function(err, users) {
        if(err) {
            result(null);
        } else {
            result(users);
        }
    })
}
module.exports = Users;