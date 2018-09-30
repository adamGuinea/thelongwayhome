  var mongoose = require("mongoose");
var Campground = require("./models/campground");
   var Comment = require("./models/comment")

var data = [
    {
        name: "Byron Bay",
        image: "https://images.unsplash.com/photo-1467096173887-42380f5e6e03?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d0bba8e50e066710052795c5ba1d7c11&auto=format&fit=crop&w=1500&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author: {
            id: "5881022b6a1a66bb0d01dd8b",
            username: "tinyHomeProject"
        }
        
    },
    {
        name: "Coolangatta",
        image: "https://images.unsplash.com/photo-1535079944319-95712ef64df8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0120445395ca344ef8a64ae9c7549e01&auto=format&fit=crop&w=700&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author: {
            id: "5881022b6a1a66bb0d01aa8b",
            username: "VanlifeDiaries"
        }
        
    },
    {
        name: "Mooloolabah",
        image: "https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f841cc8d9623cc53de075ada258fed0&auto=format&fit=crop&w=700&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author: {
            id: "5661022b6a1a66bb0d01aa8b",
            username: "combyCampers"
        }
    }
];


// function seedDB(){
//         // REMOVE ALL CAMPGROUNDS
//       Campground.remove({}, function(err){
//         if(err){
//             console.log(err);
//         } else { 
//             console.log("removed campgrounds");
//         }
//             data.forEach(function(seed){
//             Campground.create(seed, function(err, campground){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log("added a campground");
//                     // create a comment
//                     Comment.create(
//                         {
//                             text: "Nice beach and the surf club has the BEST chips"
//                             },
//                             {
//                             author: {
//                             id: "588c2e092403d111454fff76",
//                             username: "combyCampers"
//                             }, 
//                         },
//                         function(err, comment){
//                             if(err){
//                                 console.log(err)
//                             } else {
//                             campground.comments.push(comment);
//                             campground.save();
//                             console.log("new comment created");
//                             }
//                         });
//                 }
//             });
//             });
//     }); 
// };




// module.exports = seedDB;