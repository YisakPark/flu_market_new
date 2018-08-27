const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// DB Config
const db = require("./config/keys").mongoURI;

// Load model
const User = require("./models/User");

//Create data
const data = [];
var i = 0;

data[i] = new User({
  name: "Yisak",
  email: "isaac1018@naver.com",
  password: "123456"
});

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(data[i].password, salt, (err, hash) => {
    if (err) throw err;
    data[i].password = hash;
  });
});

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB Connected");

    //Delete old DB
    mongoose.connection.db
      .dropDatabase()
      .then(() => {
        console.log("old DB erased");

        //Save the data
        for (var i = 0; i < data.length; i++) {
          data[i]
            .save()
            .then(() => {
              console.log(
                "data " + i + " out of " + data.length + " is saved."
              );
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
