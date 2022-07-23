
const db = require('../db/mysql') 
const Customers = (customer) => {
    this.id = customer.id;
    this.accout_number = customer.accout_number;
    this.id_staff = customer.id_staff;
    this.status = customer.status;

}

Customers.add = function(data, result){

   if(data.accoutnumber) {
    db.query(`SELECT accout_number FROM users WHERE accout_number = '${data.accoutnumber}'`, function(err, accout_number) {
        if(err) {
            result (null);
        } else if(accout_number) {
            db.query(`INSERT INTO customers (accout_number) VALUES (${data.accoutnumber})`, function(err, customer) {
                if (err) {
                    return null;
                } else {
                    const id = customer.insertId;
                    result([{id}]);
                    console.log("1 record inserted, ID: " + id);
                }   
            })     
        }else if(accout_number.length == 0) {
            result (null);
        }
    })
   }

}
Customers.update = function(data) {
    if (data.status == 1 || data.status == 2) {
        db.query(`UPDATE customers SET status = ${data.status}, id_staff = ${data.id_staff} WHERE id = ${data.id}`)
        db.query(`UPDATE customers SET id_staff = ${data.id_staff}, status = ${data.next} WHERE id = (SELECT cid FROM (SELECT min(id) AS cid FROM customers WHERE status is null) AS t )`)
        }else if(data.status == 3) {
            db.query(`SELECT * FROM customers WHERE id_staff = ${data.id_staff} AND status = 0`, function(err, result) {
                if (result.length == 0) {
                    db.query(`UPDATE customers SET id_staff = ${data.id_staff}, status = ${data.next} WHERE id = (SELECT cid FROM (SELECT min(id) AS cid FROM customers WHERE status is null) AS t )`)
            }
        }
            )
        
       }
       }
    
Customers.getAll = function(result){
    db.query(`SELECT * FROM customers WHERE  status is null`, function(err, customers) {
        if(err) {
            result (null);
        } else {
            result (customers);
        }
    })
}

Customers.getByID = function(id, result) {
    db.query(`SELECT id FROM customers WHERE id_staff = ${id} AND status = 0`, function(err, customers) {
        if(err) {
            result (null);
        } else {
            result (customers);
        }
})
}

module.exports = Customers;
