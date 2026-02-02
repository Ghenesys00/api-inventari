import mongoose from 'mongoose';
const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  contact: { type: String }
}, { timestamps: true });
export const Supplier = mongoose.model('Supplier', supplierSchema);
