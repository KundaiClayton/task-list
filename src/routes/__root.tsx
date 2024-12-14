import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ThemeProvider } from '@mui/material/styles'
import {  Container, CssBaseline } from '@mui/material'
import { theme } from '@/theme/theme' 
import { Header } from '@/components/Header'
import React from 'react'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
         
        })),
      )

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container sx={{ mt: 3 }}>
        <Outlet />
      </Container>
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
})