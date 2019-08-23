var friendsFile = require('../data/friends');
var data = friendsFile.friends;

var friendSums = [];
var arr1 = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];
var objArray = [
  [3, 2, 6, 4, 5, 1, 2, 5, 4, 1],
  [5, 1, 4, 4, 5, 1, 2, 5, 4, 1],
]

function totalDifference(arr1, arr2) {
  sum = 0;
  for (i = 0; i < arr1.length; i++) {
    add = (arr1[i] - arr2[i]);
    if (add < 0) {
      add = add * -1;
      sum = sum + add;
    }
    else {
      sum = sum + add;
    }
  }
  friendSums.push(sum);
}

function objectLoop(arre, myArray) {
  for (j = 0; j < arre.length; j++) {

    totalDifference(arre[j], myArray)

  }
  bestIndex = friendSums.indexOf(Math.min.apply(null, friendSums));
  friendSums = [];
  return bestIndex;
}





module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    data.push('hello');
    res.json(data);
  });

  app.post("/api/friends", function (req, res) {
    jsonData = req.body;

    // figure out how to incorporate the function here
    data[objectLoop(objArray, arr1)]; // display best friend
    data.push(jsonData);
    // make name input, make modal, 
    res.json({status: 'OK', matchName: jsonData.name, matchImage: jsonData.imageURL});
  });

}








