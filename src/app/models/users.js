/// get data from database
const db = require('../db/mysql') 
const Users = (users) => {
    this.id_number = users.id_number;
    this.accout_number = users.accout_number;
    this.full_name = users.full_name;
    this.id_date = users.id_date;
    this.phone_number = users.phone_number;
    this.money = users.money;
}
Users.api = function(id, result){
    db.query(`SELECT users.id_number,users.accout_number, users.full_name, users.phone_number, users.money, users.id_date FROM users INNER JOIN customers ON users.accout_number = customers.accout_number WHERE customers.id  = ${id}`, function(err, users) {
        if(err) {
            result(null);
        } else {
            result(users);
        }
    })
}
module.exports = Users;