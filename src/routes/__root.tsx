import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ThemeProvider } from '@mui/material/styles'
import {  Container, CssBaseline } from '@mui/material'
import { theme } from '@/theme/theme' 
import { Header } from '@/components/Header'

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