import React, {useState, useEffect} from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../utils/Context/UserContext';
import { Provider } from 'react-redux';
import appStore from '../Redux/appStore';
function AppLayout() {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    // Making an api call and receiving the data
    const data = {
      name: "Divyanshu",
    };
    //  Saving the received data form the Api call to the state variable
    setUserInfo(data.name);
  }, []);
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        {/* Implementing the condition on the application so that children route is rendered */}
          <main className="flex-grow p-4">
            <Outlet />
          </main>
      </div>
    </UserContext.Provider>
</Provider>
  );
}

export default AppLayout;