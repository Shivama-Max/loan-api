import React from 'react';

const AdminDashboard = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Admin Dashboard</h1>
            <div style={styles.dashboardSection}>
                <h2 style={styles.sectionHeader}>Quick Stats</h2>
                <p>Total Users: 120</p>
                <p>Total Loans: 45</p>
                <p>Total Repayments: 30</p>
            </div>
            <div style={styles.dashboardSection}>
                <h2 style={styles.sectionHeader}>Recent Activities</h2>
                
            </div>
            <div style={styles.dashboardSection}>
                <h2 style={styles.sectionHeader}>User Management</h2>
                
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
    dashboardSection: {
        margin: '20px 0',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    sectionHeader: {
        color: '#555',
    }
};

export default AdminDashboard;
