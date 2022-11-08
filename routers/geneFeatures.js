const express = require('express');
const app = express();
const router = express.Router();

const genefeaturesController = require('../Controller/geneFeatures.controller');

// router.get('/:ensemblId', genesController.getByEnsemblId);
// router.get('/gene/mouse/search/symbol/:keyword', genesController.search);
// router.get('/:ensemblId', polyADBController.getByEnsemblId);
// router.get('/genefeatures/human/ensemblId/:ensemblId', genefeaturesController.getByEnsemblId);

// ex.atxn1 - provides introns, CDS, UTR5, UTR3 start/end
router.get('/genefeatures/human/symbol/prefix/:prefix', genefeaturesController.findByPrefix);

module.exports = router;