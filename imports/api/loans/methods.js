import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'loans.create'(amount) {
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Meteor.Error('invalid-amount', 'The loan amount must be a positive number.');
        }
        Loans.insert({
            amount,
            borrowerId: this.userId,
            createdAt: new Date(),
        });
    },
});
