import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import BlogList from './BlogsList';
import BlogPost from './BlogPost';

function App() {
  const routerConfig=createBrowserRouter([{
  path:'',
  element:<BlogList/>
  },{
    path:'/blog/:slug',
    element:<BlogPost/>
  }])
  return (
      <div className="App">
       <RouterProvider router={routerConfig}/>
      </div>
  );
}

export default App;