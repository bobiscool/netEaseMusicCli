const express = require('express');
const router = express();

router.get('/',(req,res)=>{
   const cookie = req.get('Cookie')?req.get('Cookie'):''; 
   console.log(req);
});