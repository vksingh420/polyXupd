const mongoose = require('mongoose');

const biomartGenesSchema = mongoose.Schema({
  GenestableID: {
    type: String,
    required: true
  },
  Genename: {
    type: String,
    required: true
  },
  Genedescription: {
    type: String,
    required: true
  },
  Genetype: String,
}, 
{collection: 'biomartGenes'});
biomartGene = mongoose.model('biomartGenes', biomartGenesSchema);
module.exports = biomartGene;