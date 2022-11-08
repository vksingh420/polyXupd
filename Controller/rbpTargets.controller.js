const rbp_targets = require('../models/rbpTargets.models');

exports.findByPrefix = (req, res) => {
  const prefix = req.params.prefix || '';
  console.log(req.params.prefix);
  const limit = req.query.limit || 10;
  rbp_targets.find({startPosition: prefix },
    { chromosome: 1, startPosition: 1, endPosition: 1, description1: 1, strand: 1, '_id': 0 },
  )
    .lean()
    .then(docs => {
      if (!docs) {
        return res.status(404).send([]);
      }
      else {
        res.json(docs);   
      }
    }).catch(err => {
      console.log(err);
      return res.status(500).send({
        message: 'Server error occured'
      });
    });
};
