var http = require("http");
var querystring = require('querystring');

// http.get("http://localhost:3020/comment/music?id=186016&limit=1", function(
//   res
// ) {
//   res.setEncoding("utf-8");
//   let rawData = ""; //binary
//   res.on("data", function(chunk) {
//     rawData += chunk;
//   });

//   res.on("end", function() {
//     const parsedData = JSON.parse(rawData);
//     console.log(parsedData);
//   });
// });

var data = querystring.stringify({
    username: 'q',
    password: 's',
    rememberLogin: "true"
  })

// http.request({
//   method: "POST",
//   data: {
//     username: 'q',
//     password: 's',
//     rememberLogin: "true"
//   },
//   uri:"http://localhost:3020/login/cellphone"
// },function(res){
//     res.setEncoding("utf-8");
//     let rawData = ""; //binary
//     res.on("data", function(chunk) {
//       rawData += chunk;
//     });
  
//     res.on("end", function() {
//       const parsedData = JSON.parse(rawData);
//       console.log(parsedData);
//     });
// });


var post_req = http.request()