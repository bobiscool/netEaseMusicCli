/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-23 11:10:59 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-24 10:34:13
 */
var { encodeUnicode,decodeUnicode } = require('../../tool/util');
const listStore = [
  {
    "每日歌曲推荐": "",
    "每日推荐歌单": "",
    "私人 FM": "",
    "我的收藏": "",
    "最近播放": ""
  },
  {
    "排行榜": {
       "云音乐新歌榜":"0",   
       "云音乐热歌榜":"1",  
       "网易原创歌曲榜":"2",  
       "云音乐飙升榜":"3",  
       "云音乐电音榜":"4",  
       "UK排行榜周榜":"5",  
       "美国Billboard周榜":"6",
       "KTV嗨榜":"7",  
       "iTunes榜":"8", 
       "Hit FM Top榜":"9", 
        "日本Oricon周榜":"10",  
        "韩国Melon排行榜周榜": "11",  
        "韩国Mnet排行榜周榜":"12",  
        "韩国Melon原声周榜":"13",  
        "中国TOP排行榜(港台榜)":"14",  
        "中国TOP排行榜(内地榜)":"15", 
        "香港电台中文歌曲龙虎榜":"16",  
        "华语金曲榜":"17",  
        "中国嘻哈榜":"18",  
        "法国 NRJ EuroHot 30周榜":"19",  
        "台湾Hito排行榜":"20",  
        "Beatport全球电子舞曲榜":"21"
    }
  }
];

var listStore2 =  {
    "排行榜": {
       "云音乐新歌榜":"0",   
       "云音乐热歌榜":"1",  
       "网易原创歌曲榜":"2",  
       "云音乐飙升榜":"3",  
       "云音乐电音榜":"4",  
       "UK排行榜周榜":"5",  
       "美国Billboard周榜":"6",
       "KTV嗨榜":"7",  
       "iTunes榜":"8", 
       "Hit FM Top榜":"9", 
        "日本Oricon周榜":"10",  
        "韩国Melon排行榜周榜": "11",  
        "韩国Mnet排行榜周榜":"12",  
        "韩国Melon原声周榜":"13",  
        "中国TOP排行榜(港台榜)":"14",  
        "中国TOP排行榜(内地榜)":"15", 
        "香港电台中文歌曲龙虎榜":"16",  
        "华语金曲榜":"17",  
        "中国嘻哈榜":"18",  
        "法国 NRJ EuroHot 30周榜":"19",  
        "台湾Hito排行榜":"20",  
        "Beatport全球电子舞曲榜":"21"
    }
  };

function genList(list,item) {
   if(listStore[1][item]){
       list.setItems(Object.keys(listStore[1][item]))
   }

   list.pushItem(String('排行榜'==item));
}


module.exports = genList;