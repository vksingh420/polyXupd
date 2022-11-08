const express = require('express');
const app = express();
const router = express.Router();

const miRNAtargetsController = require('../Controller/miRNAtargets.controller');

// router.get('/:ensemblId', miRNAtargetsController.getByEnsemblId);
// router.get('/:prefix', miRNAtargetsController.findByPrefix);

// returns empty objects
router.get('/miRNA/human/search/symbol/:keyword', miRNAtargetsController.search);

// gives UTR start/end
router.get('/miRNA/human/prefix/:prefix', miRNAtargetsController.findByPrefix);

// gives different miRNA
router.get('/miRNA/human/ensemblId/:ensemblId', miRNAtargetsController.getByEnsemblId);

module.exports = router;