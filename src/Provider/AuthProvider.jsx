import React, { createContext, useState } from 'react';

export const AuthContext = createContext (null);
const AuthProvider = ({children}) => {
    const [timerunning,settimerunning] = useState(true)
    const Authinfo = {
        timerunning,
        settimerunning
    }
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;