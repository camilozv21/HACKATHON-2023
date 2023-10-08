const mongoose = require('mongoose');

const analysisSchema = new mongoose.Schema({
  filename: { type: String, required: true }, // Nombre del archivo
  methodology: { type: String, required: true }, // Metodología utilizada
  cleanedNames: {type: String, required: false},
  clusterCount: {type: Number, required: false},
  timestamp: { type: Date, default: Date.now }, // Marca de tiempo de la creación del registro
  createdBy: { type: String }, // Usuario que creó el análisis (si es aplicable)
});

const Analysis = mongoose.model('Analysis', analysisSchema);

module.exports = Analysis;
