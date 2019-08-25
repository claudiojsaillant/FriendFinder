var friendsFile = require('../data/friends');
var data = friendsFile.friends;
var friendSums = [];

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
    totalDifference(arre[j].answers, myArray)
  }
  bestIndex = friendSums.indexOf(Math.min.apply(null, friendSums));
  console.log('bestIndex', bestIndex);
  friendSums = [];
  return bestIndex;
}

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(data);
  });

  app.post("/api/friends", function (req, res) {
    jsonData = req.body;

    data.push(jsonData);

    friendData = data[objectLoop(data, jsonData.answers)]

    // make name input, make modal, 
    res.json({ status: 'OK', friendName: friendData.name, friendImage: friendData.imageURL });
  });

}








