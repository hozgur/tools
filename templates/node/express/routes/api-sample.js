const express = require('express');

const router = express.Router();

const data = require('../sample-data.json')

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
    res.status(400).send('veri bekleniyor.')
  }
});

router.post("/:engine/:method", (req,res) => {
  
  // post kullanıyorsak 
  if(req.body)
  {
    res.json(req.body);
  }
  else
  {
    res.status(400).send('veri bekleniyor.')
  }
});

module.exports = router;
