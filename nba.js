var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
var json2csv = require('json2csv');

var nba = function() {

  request({
    //url: "http://blog.infographics.tw",
    //url: "http://www.espn.com/nba/dailyleaders/_/date/20170522",
    //url: "http://www.cbc.gov.tw/sp.asp?xdURL=bankexam/cbc/search.asp",
    //url: "http://www.espn.com/nba/boxscore/_/id/400953697",           //boxscore
    url: "http://www.espn.com/nba/playbyplay?gameId=400953698", //playbyplay
    method: "GET"
  }, function(e, r, b) {
    if (e || !b) {
      return;
    }
    var $ = cheerio.load(b);
    var result = [];
    var titles = $("span.long-name"); //San Antonio
    var titles2 = $("#custom-nav span.short-name"); //Spurs
    var titles3 = $("#custom-nav div.score.icon-font-after"); //GSW ponint
    var titles5 = $("div.score.icon-font-before"); //SAS point
    var titles6 = $("span.game-time"); //gametime


    var titles7 = $("tr td.time-stamp");
    var titles8 = $("tr td.game-details");
    var titles9 = $("tr td.combined-score.no-change");

    //只抓地名 球隊名
    for (var i = 0; i <= titles.length - 1; i++) {
      var team = $(titles[i]).text() + " " + $(titles2[i]).text();

      result.push(team);
      console.log(team);
    }
    //只抓最上面的TIME SCORE PLAYBYPLAY
    for (var j = 0; j <= 0; j++) {
      var score = $(titles3[0]).text() + " " + $(titles5[0]).text();
      var time = $(titles6[0]).text()
      var play = $(titles7[0]).text() + " " + $(titles8[0]).text() + " " + $(titles9[0]).text();
      result.push(time + " " + score + " " + play);
      console.log(time + "\n" + score + "\n" + play);
    }

    fs.writeFileSync("nba.json", JSON.stringify(result));
    //var sysdate = Date();
    //console.log("Finish！" + sysdate);

  });
};

nba();
setInterval(nba, 1000);
