const express = require('express');
const app = express();
const router = express.Router();

const rbptargetsController = require('../Controller/rbpTargets.controller');

// router.get('/:ensemblId', miRNAtargetsController.getByEnsemblId);
// router.get('/miRNA/human/search/symbol/:keyword', miRNAtargetsController.search);
// router.get('/:prefix', miRNAtargetsController.findByPrefix);
// router.get('/rbp/human/ensemblId/:ensemblId', miRNAtargetsController.getByEnsemblId);

// server error occured
router.get('/rbp/human/prefix/:prefix', rbptargetsController.findByPrefix);

module.exports = router;