import api from '../api'
import { getExpiration } from '../Utilities/Decoded';
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'
import { useState, useEffect, useCallback } from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';

export default function ProtectedRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [cookies, setCookie] = useCookies([ACCESS_TOKEN, REFRESH_TOKEN]);

    const refreshToken = useCallback(async () => {
        const refreshToken = cookies[REFRESH_TOKEN];

        try {
            const response = await api.post("/api/token/refresh/", {
                refresh: refreshToken,
            });
            if (response.status === 200) {
                setCookie(ACCESS_TOKEN, response.data.access, { path: '/' });
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthenticated(false);
        }
    }, [cookies, setCookie]);

    const auth = useCallback(async () => {
        const token = cookies[ACCESS_TOKEN];

        if (!token) {
            setIsAuthenticated(false);
            return;
        }
        const tokenExpiration = getExpiration(token);
        const currentTime = Date.now() / 1000;

        if (tokenExpiration < currentTime) {
            await refreshToken();
        } else {
            setIsAuthenticated(true);
        }
    }, [cookies, refreshToken]);

    useEffect(() => {
        auth().catch(() => setIsAuthenticated(false));

        const intervalId = setInterval(() => {
            auth().catch(() => setIsAuthenticated(false));
        }, 1800000);

        return () => clearInterval(intervalId);
    }, [auth]);

    if (isAuthenticated === null) {
        return <div>Loading...</div>
    }

    return isAuthenticated ? children : <Navigate to="/login" />
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};