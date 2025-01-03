import './App.css';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './Pages/Layout';
import Error from './Pages/Error';
import { ThemeProvider } from './Providers/ThemeProvider';
import {QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Dashboard from './Pages/Dashboard';
import City from './Pages/City';
import Favorites from './Pages/favorites';


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry:2,
      gcTime:1000*10,
      staleTime:1000*20,
      refetchOnMount:false,
            
    }
  }
})

const Routes = createBrowserRouter([
  {path:'', element:<Layout/>,children:[
    {index:true,element:<Dashboard/>},
    {path:'/city/:cityName',element:<City />},
    {path:'favorites',element:<Favorites/>},
    {path:'*',element:<Error/>}
  ]
  }
])

function App() {
  
  return <> 
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools/>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <RouterProvider router={Routes}>
    
  </RouterProvider> 
  </ThemeProvider> 
  </QueryClientProvider>

  </>
}

export default App
