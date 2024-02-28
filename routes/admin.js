
const express = require('express');

const router = express.Router();

router.use('/add-product',(req,res,next)=>{
    console.log("Express running...")
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>')
  })
  
  router.post('/product',(req,res,next)=>{
  res.redirect('/')
  })


  module.exports = router;