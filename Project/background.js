
$(document).ready(function() {
  LoadTweets();
  console.log("test");
});

function LoadTweets(){
var _url = 'https://api.twitter.com/1/statuses/user_timeline/CypressNorth.json?callback=?&count=1';
$.getJSON(_url,function(data){
console.log(data);
  //data is holding a JSON object
});
}
