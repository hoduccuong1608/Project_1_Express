
const db = require('../db/mysql') 
const Customer = function(customer) {
    this.id = customer.id;
    this.accout_number = customer.accout_number;
    this.id_staff = customer.id_staff;
    this.status = customer.status;

}
Customer.insert = function(data, result){

    db.query(`SELECT accout_number FROM users WHERE accout_number = '${data.accoutnumber}'`, function(err, accout_number) {
        if(err) {
            result (null);
        } else {
            db.query(`INSERT INTO customer (accout_number) VALUES (${data.accoutnumber})`, function(err, customer) {
                if (err) {
                    return null;
                } else {
                    const id = customer.insertId;
                    // result(id);
                    result(customer.insertId);
                    console.log("1 record inserted, ID: " + id);
                }   
            })

            
        }
    })

}
module.exports = Customer;