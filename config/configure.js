const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Listtodo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(" database is set to use"))
  .catch(err => console.log(err));
