/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-17 11:12:44 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-17 13:23:29
 */


 var Bus = function(){
     this.busList = [];
 }

 Bus.prototype = {
     add:function(name,scope,func){
         let flag = false;
         this.busList.forEach(element => {
            if(element.name == name){
                element.thingsList.push({
                    scope:scope,
                    thing:func
                });
                flag = true;
            }
        });

         if(!flag){
          this.busList.push({
            name:name,
            thingsList:[
                {
                    scope:scope,
                    thing:func
                }
            ]
          });
         }
     },
     dispatch:function(name,scope){
         if(arguments.length<2){
             return false;
         }
        // let flag = true; 
        let exeFile;
        let argu = Array.prototype.slice.call(arguments,2);
        this.busList.forEach(element => {
            if(element.name == name){
                exeFile = element; 
            }
        });

        if(exeFile){
            exeFile.thingsList.forEach(element => {
              element.thing.apply(scope=='no'?element.scope:scope,argu);
            });
        }
     },
     delete:function(name){
         let deleteLoc;
         this.busList.forEach((element,index) =>{
             if(element.name == name){
                 deleteLoc = index;
             }
         })

         if(deleteLoc){
             this.busList.splice(deleteLoc,1);
         }
     }
 }

 module.exports = Bus;