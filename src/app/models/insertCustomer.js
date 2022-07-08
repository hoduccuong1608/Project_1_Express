
const db = require('../db/mysql') 
const IdCustomer = function(customer) {
    this.id = customer.id;
    this.accout_number = customer.accout_number;
    this.id_staff = customer.id_staff;
    this.status = customer.status;

}
IdCustomer.insert = function(data, result){

   if(data.accoutnumber) {
    db.query(`SELECT accout_number FROM users WHERE accout_number = '${data.accoutnumber}'`, function(err, accout_number) {
        if(err) {
            result (null);
        } else if(accout_number.length > 0) {
            db.query(`INSERT INTO customers (accout_number,status) VALUES (${data.accoutnumber}, 0 )`, function(err, customer) {
                if (err) {
                    return null;
                } else {
                    const id = customer.insertId;
                    result([{id},]);
                    console.log("1 record inserted, ID: " + id);
                }   
            })     
        }else if(accout_number.length == 0) {
            result (null);
        }
    })
   }else if (data.status) {
    db.query(`UPDATE customers SET status = ${data.status}, id_staff = ${data.id_staff} WHERE id = ${data.id}`, function(err) {
        if (err) {
            return null;
        }  
    })
   }

}
module.exports =IdCustomer;