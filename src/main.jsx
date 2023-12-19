import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import toast, { Toaster } from "react-hot-toast";



// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'


import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Toaster position="top-right" reverseOrder={false} gutter={8} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
