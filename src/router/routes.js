import About from "../pages/About"
import Posts from "../pages/Posts"
import PostIdPage from "../pages/PostIdPage"
import React from "react"
import Login from "../pages/Login"

export const privateRoutes = [
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '/*', element: <h1>Page not found</h1>}
]

export const publicRoutes = [
    {path: '/login', element: <Login/>},
    {path: '/*', element: <Login/>}
  
]