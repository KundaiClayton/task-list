import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ThemeProvider } from '@mui/material/styles'
import { AppBar, Toolbar, Typography, Container, CssBaseline } from '@mui/material'
import { theme } from '@/theme/theme' 

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Task List
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 3 }}>
        <Outlet />
      </Container>
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
})