

import mongoose from 'mongoose';
const countrySchema = new mongoose.Schema({
  name: {
    official:{
    type: String,
    minlength: 3,
    maxlength: 90
    },
  },
  capital: [{
    type: String,
    minlength: 3,
    maxlength: 90
  }],
  borders: [{
    type: String,
    match: /^[A-Z]{3}$/ 
  }],
  area: {
    type: Number,
    min: 1 
  },
  timezones: [{ type: String }],
  population: {
    type: Number,
    min: 1 
  },
  gini: {
    type: Number,
    min: 0,
    max: 100
  },
  creador: {
  type: String,
  default: "Eugenia Luna",
  immutable: true 
}
});

const Country = mongoose.model('Country', countrySchema, 'Grupo-06');
export default Country;