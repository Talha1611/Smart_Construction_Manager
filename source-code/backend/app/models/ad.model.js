'use strict'; 

const mongoose = require('mongoose'),
    mongoose_timestamps = require('mongoose-timestamp'), 
    schema = mongoose.Schema; 

let adSchema = new schema ({
    title: {type: String, default: ''},
    price: {type: String, default: ''},
    description: {type: String, default: ''},
    type: {
        type: String,
        default: '',
        enum: ['Buy', 'Sell']
    },
    category: {
        type: String,
        default: '',
        enum: ['Plot', 'Sui', 'CDA']
    },
    status: {
        type: String,
        default: '',
        enum: ['Active', 'Accepted', 'Rejected', 'Re-submit']
    },
    plot: {type: String, default: '', required: true},
    street: {type: String, default: '', required: true},
    sector: {type: String, default: '', required: true},
    city: {type: String, default: '', required: true},
    attachments: [{type: String, default: '', required: true}]
    
    
}); 

adSchema.plugin(mongoose_timestamps);

module.exports = mongoose.model('adSchema', adSchema);
