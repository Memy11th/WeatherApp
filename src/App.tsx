import './App.css';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Error from './Pages/Error';
import { ThemeProvider } from './Providers/ThemeProvider';
import {QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()

const Routes = createBrowserRouter([
  {path:'', element:<Layout/>,children:[
    {index:true,element:<Home/>},
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
