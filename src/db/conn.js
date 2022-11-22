const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/sum", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // UseCreatedIndex: true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`db connection unsuccessful`);
    console.log(e);
})