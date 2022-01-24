const VR = require("../models/3dmodel");
const express = require("express");
const router = express.Router();
const ProjectControllers = require("../controllers");

router.get("/", (req, res) => {
  ProjectControllers.projectService.getDataController(req,res);
  
});

router.post("/", (req, res) => {
  let { environmentName, environmentCreator, vrObject } = req.body;
  console.log(req.body);
  if (req.body) {
    const newVR = new VR({
      environmentName,
      environmentCreator,
      vrObject,
    });
    newVR
      .save()
      .then((result) => {
        if (result) {
          res.json({
            statusCode: 200,
            message: "object successfully added",
            data: result,
          });
        } else {
          res.json({ statusCode: 400, message: err });
        }
      })
      .catch((err) => console.log(err));
  }
});

router.get("/home", (req, res) => {
  res.render("index", { title: "Home" });
});

router.get("/environments", (req, res) => {
  res.render("environments", { title: "Environments" });
});
router.get("/myEnvironments", (req, res) => {
  res.render("myEnvironments", { title: "My Environments",data: "Hello" });
});
router.get("/miami", (req, res) => {
  res.render("miami", { title: "My Environments" });
});
router.get("/360video", (req, res) => {
  res.render("360video", { title: "360 video" });
});
module.exports = router;
