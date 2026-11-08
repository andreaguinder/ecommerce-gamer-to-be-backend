import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 0 },
    category: { 
        type: String, 
        required: true, 
        enum: ["notebooks", "procesadores", "monitores", "placas", "perifericos"] 
    },
    imageUrl: { type: String },
    featured: { type: Boolean, default: false },
    bestSeller: { type: Boolean, default: false }
}, { versionKey: false, timestamps: true });

const Product = mongoose.model('Product', productSchema);

export { Product };