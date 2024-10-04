import  { useState, useEffect } from 'react';
const useOnlineStatus = () => {

    // Creating the state variable 'onlineStatus' to track the user's online/offline status
    // Initialize with navigator.onLine to get the current online status (true if online, false if offline)
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);
    
    //! adding the event listener inside the useEffect🧮 
    // The useEffect hook is used to handle side effects, in this case, adding event listeners 
    // for 'online' and 'offline' events when the component mounts
    useEffect(() => {
        // When the 'online' event is fired (user is back online), update the status to true
        window.addEventListener('online', () => {
            setOnlineStatus(true);
        });

        // When the 'offline' event is fired (user goes offline), update the status to false
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        });

        // The empty dependency array [] ensures that the effect only runs once (on mount)
    }, []);
        
    // Return the online status (true if online, false if offline) to be used in the component
    return onlineStatus;
}

export default useOnlineStatus;

