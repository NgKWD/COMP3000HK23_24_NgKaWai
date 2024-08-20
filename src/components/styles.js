const styles = {
    container: {
        display: 'flex',
    },
    menu: {
        width: '350px',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRight: '1px solid #ddd',
    },
    menuList: {
        listStyleType: 'none',
        padding: 0,
    },
    menuItem: {
        marginBottom: '15px',
        cursor: 'pointer',
        padding: '10px',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    },
    expandedMenuItem: {
        backgroundColor: '#e0e0e0',
    },
    subMenuItem: {
        marginLeft: '20px',
        cursor: 'pointer',
        padding: '5px 0',
    },
    activeMenuItem: {
        fontWeight: 'bold',
        color: '#007BFF',
    },
    content: {
        flex: 1,
        padding: '20px',
    },
    heading: {
        fontSize: '28px',
        marginBottom: '20px',
    },
    subheading: {
        fontSize: '24px',
        marginTop: '20px',
    },
    subsubheading: {
        fontSize: '20px',
        marginTop: '15px',
        textDecoration: 'underline',
    },
    point: {
        fontSize: '16px',
        marginTop: '15px',
        color: '#007BFF',
    },
    text: {
        marginBottom: '15px',
    },
    list: {
        marginBottom: '15px',
        paddingLeft: '20px',
    },
    mainContent: {
        padding: '0px 70px 70px 70px',
    },
    reference: {
        color: '#808080',
        fontStyle: 'italic',
    },
    image: {
        width: '600px',
    },
};

export default styles;
