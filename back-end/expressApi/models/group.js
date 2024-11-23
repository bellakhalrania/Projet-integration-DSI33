import mongoose from 'mongoose';  // Utilisez 'import' ici
const url = 'mongodb://localhost:27017/Mentalhealth_db';

const groupSchema = new mongoose.Schema({
  nomgroup: {
    type: String, 
    required: true
  },
  image: {
    type: String, // URL du groupe
    required: true
  },
  url: {
    type: String, // URL de l'image
    required: true
  }
});

const Group = mongoose.model('Group', groupSchema);
export default Group;
