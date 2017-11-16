var blessed = require('blessed');

var screen = blessed.screen({
   smartCSR:true
});

screen.title = "NetEase";

var box = blessed.box({
   top:'center',
   left:"center",
   width:'50%',
   height:'50%',
   content:'Heloo {bold}world{/bold}',
   tags:true,
   border:{
       type:'line'
   },
   style:{
       fg:'white',
       bg:'magenta',
       border:{
           fg:'#f0f0f0'
       },
       hover:{
           bg:'green'
       }
   }
});

screen.append(box);

screen.render();