
const db = require('../db/mysql') 
const Login = function(accout) {
    this.username = accout.user_name;
    this.password = accout.pass_word;
}
Login.accuracy = function(data, result){
    db.query(`SELECT id_staff FROM accout_staffs WHERE user_name = '${data.username}' AND pass_word = '${data.password}'`, function(err, id_staff) {
        if(err) {
            result (null);
        } else {
            result (id_staff);
        }
    })
}
module.exports = Login;