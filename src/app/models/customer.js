
const db = require('../db/mysql') 
const Customer = function(customer) {
    this.id = customer.id
    this.accoutname = customer.accout_name;
    this.idstaff= customer.id_staff;
    this.status = customer.status;
}
Customer.api = function(result){
    db.query(`SELECT * FROM customers WHERE  status = '0'`, function(err, customers) {
        if(err) {
            result (null);
        } else {
            result (customers);
        }
    })
}
module.exports = Customer;