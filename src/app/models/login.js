
const db = require('../db/mysql') 
const Login = function(accout) {
    this.username = accout.username;
    this.Dpassword = accout.pass_word;
}
Login.accuracy = function(result){
    db.query("SELECT * FROM accout_staffs", function(err, accout) {
        if(err) {
            result(null);
        } else {
            result(accout);
        }
    })
}
module.exports = Login;