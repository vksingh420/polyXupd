const mongoose = require('mongoose');

const polyADBSchema = mongoose.Schema({
  geneId: {
    type: String,
    required: true
  },
  startPosition: {
    type: String,
    required: true
  },
  endPosition: {
    type: String,
    required: true
  },
  feature: {
    type: String,
    required: true
  },
  chromosome: {
    type: String,
    required: true
  },
  strand: {
    type: String,
    required: true
  },
  index: Number,
  
}, 
{collection: 'polyAdbBed'});
polyAdb_bed = mongoose.model('polyAdbBed', polyADBSchema);
module.exports = polyAdb_bed;