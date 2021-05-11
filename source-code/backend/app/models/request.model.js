'use strict'; 

const mongoose = require('mongoose'),
    mongoose_timestamps = require('mongoose-timestamp'), 
    schema = mongoose.Schema; 

let requestSchema = new schema ({
    title: {type: String, default: ''},
    description: {type: String, default: ''},
    type: {
        type: String,
        default: 'Approval',
        enum: ['Water', 'Electricity', 'Gas', 'Approval', 'Transfer']
    },
    recipient: {
        type: String,
        default: 'CDA',
        enum: ['WAPDA', 'Sui', 'CDA']
    },
    status: {
        type: String,
        default: 'Pending',
        enum: ['Active', 'Accepted', 'Rejected', 'Pending']
    },
    plot: {type: String, default: '', required: true},
    street: {type: String, default: '', required: true},
    sector: {type: String, default: '', required: true},
    city: {type: String, default: '', required: true},
    user: {type: schema.Types.ObjectId, ref: 'userAccount'},
    attachments: [{type: String, default: '', required: true}]
}); 

requestSchema.plugin(mongoose_timestamps);

module.exports = mongoose.model('requestSchema', requestSchema);
