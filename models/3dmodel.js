const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
// Create Schema
const VRSchema = new mongoose.Schema({
    environmentName: {
        type: String,
        required: true
    },
    environmentCreator: {
        type: String,
        required: true
    },
    vrObject: [{
        name:String,
        position:String,
        scale:String,
        rotation:String,
    }]   
})

const VR = mongoose.model('VR', VRSchema)

module.exports = VR