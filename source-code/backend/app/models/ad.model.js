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
        default: 'Sell',
        enum: ['Buy', 'Sell']
    },
    category: {
        type: String,
        default: 'Equipement',
        enum: ['Property', 'Service', 'Equipement']
    },
    subcat: {type: String, default: ''},
    status: {
        type: String,
        default: 'Pending',
        enum: ['Active', 'Pending', 'Removed', 'Hidden']
    },
    posted: {type: Date, default: Date.now},
    user: {type: schema.Types.ObjectId, ref: 'userAccounts'},
    pictures: [{type: String, default: '', required: true}]   
}); 

adSchema.plugin(mongoose_timestamps);

module.exports = mongoose.model('adSchema', adSchema, 'adSchema');
