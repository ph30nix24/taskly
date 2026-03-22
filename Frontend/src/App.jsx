import React from 'react'
import router from './app.routes'
import { RouterProvider } from 'react-router'
import { AuthProvider } from './features/auth/services/auth.context'
import { TaskProvider } from "./features/dashboard/services/tasks.context";


const App = () => {
  return (
    <AuthProvider>
        <TaskProvider>
            <RouterProvider router={router} />
        </TaskProvider>
    </AuthProvider>
  )
}

export default App