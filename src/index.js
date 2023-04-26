import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import App from './page/App'
import Requisites from './page/Requisites'
import Policy from './page/Policy'
import './index.css'
import PaySystem from './page/PaySystem'
import PaySystemItem from './page/PaySystemItem'
import News from './page/News'
import NewsItem from './page/NewsItem'
import Exchange from './page/Exchange'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/policy-page', element: <Policy /> },
      { path: '/requisites', element: <Requisites /> },
      { path: '/pay-system', element: <PaySystem /> },
      { path: '/pay-system/:id', element: <PaySystemItem /> },
      { path: '/news', element: <News /> },
      { path: '/news/:id', element: <NewsItem /> },
      { path: '/exchange', element: <Exchange /> },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
