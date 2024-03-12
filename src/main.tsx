import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "semantic-ui-css/semantic.min.css";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ToastContainer} from "react-toastify";
import { ThemeProvider } from './components/Themedark.tsx';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer />
    </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
