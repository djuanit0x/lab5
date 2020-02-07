var data = require("../data.json");

exports.addFriend = function(request, response) {
    // Your code goes here
    const name = request.query.name;
    const info = request.query.description;
    const newFriends = {name: name, info: info, image: "http://lorempixel.com/400/400/people"};

    data.friends.push(newFriends);
    response.render("index", data);
};
