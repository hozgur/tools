const express = require('express');

const router = express.Router();

const data = require('../sample-data.json')

const errorMessages = {
  ERR_NO_DATA: 'veri gönderilmesi gerekli.'
}

router.get("/", (req,res) => {
    res.json(data);
});


router.post("/", (req,res) => {
  
  // post kullanıyorsak 
  if(req.body)
  {
    res.json(req.body);
  }
  else
  {
    res.status(400).send(errorMessages.ERR_NO_DATA)
  }
});

router.post("/:param1/:param2", (req,res) => {
  
  console.log("Param 1 :",req.params.param1);
  console.log("Param 2 :",req.params.param2);
  // post kullanıyorsak 
  if(req.body)
  {
    res.json(req.body);
  }
  else
  {
    res.status(400).send(errorMessages.ERR_NO_DATA)
  }
});

module.exports = router;
