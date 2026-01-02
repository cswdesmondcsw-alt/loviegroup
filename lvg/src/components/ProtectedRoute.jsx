import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // If not authenticated, show blank page (you can also redirect to login)
    if (!isAuthenticated) {
        // Option 1: Show blank page
        // return (
        //     <div style={{
        //         minHeight: '100vh',
        //         display: 'flex',
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //         backgroundColor: '#f8f9fa'
        //     }}>
        //         <div style={{
        //             textAlign: 'center',
        //             padding: '40px',
        //             backgroundColor: 'white',
        //             borderRadius: '8px',
        //             boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        //         }}>
        //             <h2 style={{ marginBottom: '20px', color: '#333' }}>Access Denied</h2>
        //             <p style={{ marginBottom: '20px', color: '#666' }}>
        //                 Please log in to access this page.
        //             </p>
        //             <a 
        //                 href="/login-register" 
        //                 style={{
        //                     display: 'inline-block',
        //                     padding: '12px 24px',
        //                     backgroundColor: '#333',
        //                     color: 'white',
        //                     textDecoration: 'none',
        //                     borderRadius: '4px',
        //                     transition: 'background-color 0.3s'
        //                 }}
        //             >
        //                 Go to Login
        //             </a>
        //         </div>
        //     </div>
        // );
        
        // Option 2: Redirect to login (uncomment to use this instead)
        return <Navigate to="/login-register" replace />;
    }

    // If authenticated, render the protected content
    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;

