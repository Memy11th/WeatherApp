import './App.css';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Error from './Pages/Error';
import { ThemeProvider } from './Providers/ThemeProvider';

const Routes = createBrowserRouter([
  {path:'', element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'*',element:<Error/>}
  ]
  }
])
function App() {
  
  return <> 
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <RouterProvider router={Routes}>
    
  </RouterProvider> 
  </ThemeProvider> 

  </>
}

export default App
