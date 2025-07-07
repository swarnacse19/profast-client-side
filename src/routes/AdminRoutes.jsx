import React, { Children } from 'react';
import { Navigate } from 'react-router';
import Loading from '../loading/Loading';
import useAuth from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const { role, roleLoading } = useUserRole();

    if (loading || roleLoading) {
        return <Loading></Loading>;
    }

    if (!user || role !== 'admin') {
        return <Navigate to="/forbidden"></Navigate>
    }

    return children;
};

export default AdminRoute;