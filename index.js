var request = require("superagent");
var xml2js = require('xml2js');
var _=require("lodash");
var Promise = require("bluebird");
var parseXmlString;
Promise.promisifyAll(xml2js);

parseXmlStringAsync = xml2js.parseStringAsync;

request
  .get("http://m.highways.gov.uk/feeds/rss/AllEvents.xml")
  .buffer()
  .end((err,response) => {
    parseXmlStringAsync(response.text)
      .then((result) => {
      //console.log(result.rss.channel[0].item)
       _.forEach(result.rss.channel[0].item,(val) => {
          console.log(val);
        })
      })
  })
