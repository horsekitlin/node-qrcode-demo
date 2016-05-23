var http = require("http");
var QRCode = require('qrcode');
function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  QRCode.toDataURL("https://www.youtube.com/watch?v=V4BR7HVV7zg",function(err,url){
    if(err) console.log('error: '+err);
    //console.log(url);
    response.end("<!DOCTYPE html/><html><head><title>QRcode</title></head><body><p >Scan the QRCode</p><img src='"+url+"'/></body></html>");
  });
}

http.createServer(onRequest).listen(8888);
