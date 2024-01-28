import '/imports/api/loans/methods.js';
import '/imports/api/loans/publications.js';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Loans } from '/imports/api/loans/loans.js';

Meteor.startup(() => {
  const users = [
    { email: 'admin@example.com', password: 'admin123', roles: ['admin'] },
    { email: 'user@example.com', password: 'user123', roles: ['user'] },
  ];

  users.forEach(user => {
    if (!Accounts.findUserByEmail(user.email)) {
      const userId = Accounts.createUser({
        email: user.email,
        password: user.password,
      });
      Roles.addUsersToRoles(userId, user.roles);
    }
  });
  if (Loans.find().count() === 0) {
    Loans.insert({ borrowerId: 'someUserId', amount: 1000, createdAt: new Date(), status: 'pending' });
  }
});
Accounts.config({
    forbidClientAccountCreation: true
});
  