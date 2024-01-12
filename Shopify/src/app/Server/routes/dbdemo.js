var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hr",
  port:3306,
  database:"angular"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!!!");
}); 

function getEmployees(callback)
{
    sql = 'select * from products';
    var response ;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Get All Employees : " );
      // console.log(result);
      callback(result);
    });
}
function getCategory(callback)
{
    sql = 'select category from category';
    var response ;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Get All Employees : " );
      // console.log(result);
      callback(result);
    });
}

function getEmployee(id,callback)
{
    sql = 'select * from employees where eid = '+id;
    var response ;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Get Blog for Id: "+id );
      callback(result);
    });
}
function addEmployees(blog, callback)
{
    sql = "insert into products values('"+blog.pid+"','"+blog.pname+"','"+blog.pdesc+"',"+blog.price+","+blog.pqty+",'"+blog.pcat+"')";
      // console.log(blog);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Inserted: " );
      callback(result);
    });
}
function editBlog(blog, callback)
{
    sql = "update blog set title = '"+blog.title+"',description='"+blog.description+"',category='"+blog.category+"' where id = "+blog.id;
    console.log(sql);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Updatng DB: " );
      callback(result);
    });
}
function deleteBlog(id,callback)
{
    sql = `delete from products where pid = "${id}"`;
    console.log(sql);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("deleted: " );
      callback('deleted');
    });
}
exports.getEmployees = getEmployees;
exports.addEmployees = addEmployees;
exports.getCategory=getCategory;
exports.deleteBlog = deleteBlog;
exports.getEmployee = getEmployee;
exports.editBlog = editBlog;