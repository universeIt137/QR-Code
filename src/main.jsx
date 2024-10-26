import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FormPage from './Form/FormPage.jsx';
import FormDetail from './Form/FormDetail.jsx';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import UpdateNominee from './Form/UpdateNominee.jsx';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormPage></FormPage>,
  },
  {
    path: "/form-Details/:id",
    element: <FormDetail></FormDetail>
  },
  {
    path: "/nominee-update/:id",
    element: <UpdateNominee></UpdateNominee>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
