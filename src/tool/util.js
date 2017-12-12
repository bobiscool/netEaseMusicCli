
/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-24 10:25:23 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-24 10:31:18
 */

 function encodeUnicode(str){
     var res =[];
     for (var i=0;i<str.length;i++){
         res[i] = ('00'+str.charCodeAt(i).toString(16)).slice(-4);

         return "\\u"+res.join('\\u');
     }
 }


 function decodeUnicode(str){
     str = str.replace(/\\/g,"%");
     return unescape(str);
 }

 console.log(encodeUnicode('dddd')==='dddd')

 module.exports = {
    encodeUnicode:encodeUnicode,
    decodeUnicode:decodeUnicode
 }