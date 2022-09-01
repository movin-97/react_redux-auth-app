import React from 'react';
import RouterProvider from './router/routerProvider';
import { CreateAuthContextProvider } from './contextAPI/UserAuthContext';

function App() {
  return (
    <div className="container">
      {/* <CreateAuthContextProvider> */}
        <RouterProvider/>
      {/* </CreateAuthContextProvider> */}
    </div>
  );
}

export default App;
