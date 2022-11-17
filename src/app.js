const express = require("express");
const path = require("path");
const app = express();
const bcrypt = require("bcryptjs");

require("./db/conn");
const Register = require("./models/registers");

const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));

app.get("/", (req, res) => {
    res.send("home");

})
app.get("/reg", (req, res) => {
    res.send("reg");
})

//create user in db
app.post("/reg", async (req, res) => {
    try {
        const password = req.body.pass;
        const cpassword = req.body.cpass;

        if (password === cpassword) {
            const registerEmp = new Register({
                firstname: req.body.fname,
                lasttname: req.body.lname,
                email: req.body.mail,
                gender: req.body.gender,
                phno: req.body.phno,
                password: req.body.pass,
                confirmpassword: req.body.cpass
            })
            const registered = await registerEmp.save();
            res.status(201).sendFile(path.join(__dirname, "../public/index.html"));
        }
        else {
            res.send("password not matching")
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

app.get("/login", (req, res) => {
    res.send("login");
})

//login users
app.post("/login", async (req, res) => {
    try {
        const email = req.body.em;
        const password = req.body.pass;

        //1st email is db email and 2nd email is login email from login form also can write as ({email})
        const uemail = await Register.findOne({ email: email });
        
        if (uemail.password === password) {
            res.status(201).sendFile(path.join(__dirname, "../public/index.html"));
        }
        else {
            res.send("password not matching");
        }
    }
    catch (error){
        res.status(400).send("invalid email");
    }
})


app.listen(port, () => {
    console.log(`listening to port ${port}`);
})