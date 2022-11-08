const express = require('express');
const app = express();
const router = express.Router();

const genesController = require('../Controller/gene.controller');

// router.get('/:ensemblId', genesController.getByEnsemblId);
// router.get('/gene/mouse/search/symbol/:keyword', genesController.search);

// introns, CDS, UTR5, UTR3 start/end
router.get('/gene/Human/symbol/prefix/:prefix', genesController.findByPrefix);

// doesn't return anything?
router.get('/gene/mouse/ensemblId/:ensemblId', genesController.getByEnsemblId);




module.exports = router;
