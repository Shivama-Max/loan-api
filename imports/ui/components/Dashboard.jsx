import React from 'react';

const UserDashboard = () => {
    const recentActivities = [
        { id: 1, activity: "Logged in at 10:30 AM, Jan 28, 2024" },
        { id: 2, activity: "Updated profile at 3:45 PM, Jan 27, 2024" },
        { id: 3, activity: "Requested loan at 11:15 AM, Jan 25, 2024" },
    ];

    const settingsOptions = [
        { id: 1, option: "Change Password" },
        { id: 2, option: "Update Email Address" },
        { id: 3, option: "Configure Notifications" },
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Welcome to Your Dashboard</h1>
            <div style={styles.section}>
                <h2 style={styles.subHeader}>Recent Activities</h2>
                <ul>
                    {recentActivities.map(activity => (
                        <li key={activity.id} style={styles.listItem}>
                            {activity.activity}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={styles.section}>
                <h2 style={styles.subHeader}>Settings</h2>
                <ul>
                    {settingsOptions.map(option => (
                        <li key={option.id} style={styles.listItem}>
                            {option.option}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
    },
    header: {
        color: '#333',
        textAlign: 'center',
    },
    section: {
        backgroundColor: '#fff',
        padding: '20px',
        margin: '20px 0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    subHeader: {
        color: '#555',
        marginBottom: '10px',
    },
    listItem: {
        padding: '5px 0',
    },
};

export default UserDashboard;
