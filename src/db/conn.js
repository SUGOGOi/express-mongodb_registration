const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sumsum", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // UseCreatedIndex: true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})