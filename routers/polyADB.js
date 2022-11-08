const express = require('express');
const app = express();
const router = express.Router();

const polyADBController = require('../Controller/polyADB.controller');

// router.get('/:ensemblId', genesController.getByEnsemblId);
// router.get('/gene/mouse/search/symbol/:keyword', genesController.search);
// router.get('/gene/Human/symbol/prefix/:prefix', genesController.findByPrefix);
// router.get('/:ensemblId', polyADBController.getByEnsemblId);
// router.get('/polyADB/human/ensemblId/:ensemblId', polyADBController.getByEnsemblId);

// returns features(UTR3, Introns, UTR5) start/end, different than other prefix calls
router.get('/polyADB/human/prefix/:prefix', polyADBController.findByPrefix);

module.exports = router;