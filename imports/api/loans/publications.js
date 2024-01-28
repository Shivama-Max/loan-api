import { Meteor } from 'meteor/meteor';
import { Loans } from './loans.js';

Meteor.publish('loans.all', function () {
    if (!this.userId) {
        return this.ready();
    }
    const user = Meteor.users.findOne(this.userId);
    if (user && user.isAdmin) {
        return Loans.find({});
    } else {
        return Loans.find({ borrowerId: this.userId });
    }
});
