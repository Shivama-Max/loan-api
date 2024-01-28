import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Loans = new Mongo.Collection('loans');

const LoanSchema = new SimpleSchema({
    amount: Number,
    borrowerId: String,
    createdAt: Date,
    status: {
        type: String,
        allowedValues: ['pending', 'approved', 'rejected', 'repaid'],
        defaultValue: 'pending'
    },
});

Loans.attachSchema(LoanSchema);
