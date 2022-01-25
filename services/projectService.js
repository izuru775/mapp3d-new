const VR = require('../models/3dmodel');
const axios = require('axios');

const getDataService = (req, res) => {
  VR.find({})
    .then((result) => {
      if (result) {
        res.json({ statusCode: 200, data: result });
      } else {
        res.json({ statusCode: 400, message: err });
      }
    })
    .catch((err) => console.log(err));
};

const uploadDataService = (req, res) => {
  let { environmentName, environmentCreator, environmentOptions, vrObject } =
    req.body;
  console.log(req.body);
  if (req.body) {
    const newVR = new VR({
      environmentName,
      environmentCreator,
      environmentOptions,
      vrObject,
    });
    newVR
      .save()
      .then((result) => {
        if (result) {
          res.json({
            statusCode: 200,
            message: 'object successfully added',
            data: result,
          });
        } else {
          res.json({ statusCode: 400, message: err });
        }
      })
      .catch((err) => console.log(err));
  }
};
const getEnvironmentService = (req, res) => {
  axios
    .get('http://localhost:3001/api')
    .then(function (response) {
      // handle success
      const records = response.data.data;
      
      res.render('myEnvironments', { title: 'My Environments' ,records});
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    // allways execute
    .then(function () {
      
    });
};
module.exports = {
  getDataService,
  uploadDataService,
  getEnvironmentService,
};
