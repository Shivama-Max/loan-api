import { withTracker } from 'meteor/react-meteor-data';
import { Loans } from '/imports/api/loans/loans.js';

const LoansList = (props) => {
    if (props.loading) {
        return <div>Loading...</div>;
    }

    return (
        <ul>
            {props.loans.map(loan => (
                <li key={loan._id}>{loan.amount} - {loan.status}</li>
            ))}
        </ul>
    );
};

export default withTracker(() => {
    const handle = Meteor.subscribe('loans.all');
    return {
        loading: !handle.ready(),
        loans: Loans.find({}).fetch(),
    };
})(LoansList);
