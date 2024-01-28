import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <nav style={styles.navbar}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
                    <li style={styles.navItem}><a href="/borrower" style={styles.navLink}>Borrower Dashboard</a></li>
                    <li style={styles.navItem}><a href="/lender" style={styles.navLink}>Lender Dashboard</a></li>
                    <li style={styles.navItem}><a href="/admin" style={styles.navLink}>Admin Dashboard</a></li>
                    <li style={styles.navItem}><a href="/login" style={styles.navLink}>Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#343a40',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
    },
    navbar: {
        display: 'flex',
        justifyContent: 'center',
    },
    navList: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
    },
    navItem: {
        margin: '0 10px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.2em',
    }
};

export default Header;
