const db = require('../db/mysql') 
const Staffs = (accout) => {
    this.id_staff = accout.id_staff;
    this.full_name = accout.full_name;
    this.position = accout.position;
}
Staffs.api = function(result){
    db.query("SELECT * FROM staffs", function(err, staffs) {
        if(err) {
            result(null);
        } else {
            result(staffs);
        }
    })
}
module.exports = Staffs;