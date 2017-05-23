var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
var json2csv = require('json2csv');

var nba = function() {

  request({
    //url: "http://blog.infographics.tw",
    //url: "http://www.espn.com/nba/dailyleaders/_/date/20170522",
    //url: "http://www.cbc.gov.tw/sp.asp?xdURL=bankexam/cbc/search.asp",
    url: "http://www.espn.com/nba/boxscore/_/id/400953594",
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
    //var titles6 = $("tr td[headers=header6]");
    for (var i = 0; i <= titles.length; i++) {

      var score = ($(titles[i]).text() + " " +
        $(titles2[i]).text() + " " + $(titles3[i]).text() + " " + $(titles5[i]).text() + " " + $(titles6[i]).text());

      result.push(score);

      //result.push($(titles[i]).text());
      //result.push($(titles2[i]).text());
      //result.push($(titles2[i]).text());
      //result.push($(titles5[i]).text());
      //result.push($(titles6[i]).text());
      console.log(score);
    }
    fs.writeFileSync("nba.json", JSON.stringify(result));
    var sysdate = Date();
    console.log("Finish！" + sysdate);
  });
};

nba();
setInterval(nba, 5000);
