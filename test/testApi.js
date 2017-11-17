var http = require('http');
http.get("http://localhost:3020/comment/music?id=186016&limit=1",function(res){
res.setEncoding('utf-8');
let rawData = '';//binary 
  res.on('data',function(chunk){
    rawData +=chunk;
  });

  res.on('end',function(){
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
  });

});