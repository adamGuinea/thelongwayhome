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
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index");
mongoose.connect("mongodb://localhost:27017/yelp_camp",{ useNewUrlParser: true });
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
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// PASSPORT CONFIG


passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use(indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
console.log("YelpCamp server has started");
});