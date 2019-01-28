require('dotenv').config();

   var express = require("express"),
           app = express(),
    bodyparser = require("body-parser"),
      mongoose = require("mongoose"),
         flash = require("connect-flash"),
      passport = require("passport"),
 localStrategy = require("passport-local"),
methodOverride = require("method-override"),
    Campground = require("./models/campground"),
       Comment = require("./models/comment"),
          User = require("./models/user"),
        seedDB = require("./seeds");
 

 
// requiring routes      
var commentRoutes    = require("./routes/comments"),
    reviewRoutes     = require("./routes/reviews"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index");

var url = (process.env.DATABASEURL) || "mongodb://localhost:27017/Vanlife";                
mongoose.connect(url, { useNewUrlParser: true });


app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seed the database   
// seedDB(); 

app.use(require("express-session")({
    secret: "adam is the raddest coder eva",
    resave: false,
    saveUninitialized: false
}));

// PASSPORT CONFIG

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(async function(req, res, next){
    res.locals.currentUser = req.user;
    if(req.user) {
        try {
            let user = await User.findById(req.user._id).populate('notifications', null, { isRead: false }).exec();
            res.locals.notifications = user.notifications.reverse();
        } catch(err) {
            console.log(err.message);
        }
    }
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds/:id/reviews", reviewRoutes);

app.locals.moment = require('moment');

app.listen(process.env.PORT || 3000, process.env.IP, function(){
console.log("Vanlife server has started");
});