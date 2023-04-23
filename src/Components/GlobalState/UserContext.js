import React, { createContext, useState, useContext } from "react";

// Create a context to hold user information
const UserContext = createContext();



// Create a custom hook to use the context
export function useUserContext() {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUserContext Must be within a UserProvider')
    }
    return context;
}


// Create a provider component to wrap the app
export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    function loginUser(userData) {
        setUser(userData)
    };
    function logoutUser() {
        setUser(null)
    };
    const contextValue = {
        user,
        loginUser,
        logoutUser
    };
    return (
        <UserContext.Provider value={contextValue} >
            {children}
        </UserContext.Provider>
    );
};
