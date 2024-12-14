import { AppBar, Toolbar, Typography, useTheme, Stack } from '@mui/material'
import { Link } from '@tanstack/react-router'


export const Header = () => {
  const theme = useTheme()

  return (
    <AppBar 
      position="static" 
      color="default"
      elevation={1}
    >
      <Toolbar sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack 
          direction="row" 
          spacing={1} 
          alignItems="center" 
          component={Link}
          to="/"
          style={{ 
            textDecoration: 'none', 
            color: theme.palette.text.primary 
          }}
        >
          
          <Typography 
            variant="h6" 
            component="div"
            sx={{ 
              fontWeight: 600,
              display: { sm: 'block' }
            }}
          >
            Task List
          </Typography>
        </Stack>

        
      </Toolbar>
    </AppBar>
  )
}