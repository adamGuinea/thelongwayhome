var Campground = require("../models/campground")
var Comment = require("../models/comment")
//middleware goes here
var middlewareObj = {}

middlewareObj.checkOwnership = function(req, res, next){
        if(req.isAuthenticated()){
            Campground.findById(req.params.id, function(err, foundCampground){
                if(err){
                    req.flash("error", "Campground not found")
                    res.redirect("back");
                } else {
                    // does user own campground
                    if(foundCampground.author.id.equals(req.user._id)){
                        next();
                    } else {
                        req.flash("error", "You don't have permission")
                        res.redirect("back")
                    }
                }
            });
        } else {
            // if not redirect
            req.flash("error", "You have to be logged in first")
            res.redirect("back")
        }
}

middlewareObj.checkCommentOwnership = function(req, res, next){
        if(req.isAuthenticated()){
            Comment.findById(req.params.comment_id, function(err, foundComment){
                if(err){
                    req.flash("error", "You have to be logged in first")
                    res.redirect("back");
                } else {
                    // does user own comment
                    if(foundComment.author.id.equals(req.user._id)){
                        next();
                    } else {
                        req.flash("error", "You don't have permission")
                        res.redirect("back")
                    }
                }
            });
        } else {
            // if not redirect
            req.flash("error", "You have to be logged in")
            res.redirect("back")
        }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } 
    req.flash("error", "You have to be logged in!");
    
    res.redirect("/login");
};

module.exports = middlewareObj;