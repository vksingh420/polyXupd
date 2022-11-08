const express = require('express');
const app = express();
const router = express.Router();

const biomartGenesController = require('../Controller/biomartGenes.controller');
//console.log("biomart router")


// router.get('/:ensemblId', genesController.getByEnsemblId);
// router.get('/gene/mouse/search/symbol/:keyword', genesController.search);
// router.get('/gene/human/search/symbol/:keyword', biomartGenesController.search);

// atxn1 - Provides itrons, CDS, UTR5, UTR3 start and end
router.get('/gene/human/symbol/prefix/:prefix', biomartGenesController.findByPrefix);




module.exports = router;