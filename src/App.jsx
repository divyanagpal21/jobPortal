import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing-page'
import JobListing from './pages/job-listing'
import Job from './pages/job'
import MyJobs from './pages/my-jobs'
import Onboarding from './pages/onboarding'
import PostJob from './pages/post-job'
import SavedJob from './pages/saved-job'
import { ThemeProvider } from './components/theme-provider'
const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>,
      },
      {
        path:'/jobs',
        element:<JobListing/>,
      },
      {
        path:'/job/:id',
        element:<Job/>,
      },
      {
        path:'/my-jobs',
        element:<MyJobs/>,
      },
      {
        path:'/onboarding',
        element:<Onboarding/>,
      },
      {
        path:'/post-job',
        element:<PostJob/>,
      },
      {
        path:'/saved-jobs',
        element:<SavedJob/>,
      },
    ]
  }
])
function App() {
  
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router}/>
    </ThemeProvider>
    </>
  )
}

export default App
