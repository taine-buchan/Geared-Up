import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Auth0Provider } from '@auth0/auth0-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes.tsx'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="harakeke-2025-user.au.auth0.com"
      clientId="IcQf8j9xT0Nw923ITTokG1kO6hYbePce"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://geared-up/api',
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Auth0Provider>,
  )
})
