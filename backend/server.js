const app = require('express')();
const bodyParser = require('body-parser');
require('dotenv').config();
const userRoutes = require('./src/routes/user.routes');
const employeeRoutes = require('./src/routes/employee.routes')
app.use(bodyParser.json());
app.use('/api/users',userRoutes);
app.use('/api/employee',employeeRoutes)

app.listen(process.env.PORT,()=>{
    console.log("Server running......");
})

app.get('/',(req,res)=>{
    res.status(200).send({message:"Welcome on our homepage"});
});
