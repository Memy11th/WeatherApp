import './App.css';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Error from './Pages/Error';

const Routes = createBrowserRouter([
  {path:'', element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'*',element:<Error/>}
  ]
  }
])
function App() {
  
  return <> 
  <RouterProvider router={Routes}>
    
  </RouterProvider>  

  </>
}

export default App
