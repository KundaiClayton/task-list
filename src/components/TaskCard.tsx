import { Card, CardContent, IconButton, Typography, Box, useTheme, alpha } from '@mui/material'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { Task } from '@/hooks/useTasks.types'

interface TaskCardProps {
  task: Task
  onComplete: (id: number, completed: boolean) => void
}

export const TaskCard = ({ task, onComplete }: TaskCardProps) => {
  const theme = useTheme()

  return (
    <Card 
      sx={{ 
        mb: 2,
        backgroundColor: task.completed 
          ? theme.palette.success.light 
          : theme.palette.background.paper,
         transition: 'background-color 0.3s ease',
        '&:hover': {
          boxShadow: theme.shadows[2],
        }
      }}
    >
      <CardContent sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        p: { xs: 2, sm: 3 }, 
        '&:last-child': { 
          paddingBottom: { xs: 2, sm: 3 } 
        }
      }}>
        <Typography 
          variant="body1" 
          sx={{ 
            flexGrow: 1,
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed 
              ? theme.palette.text.secondary 
              : theme.palette.text.primary
          }}
        >
          {task.title}
        </Typography>
        <IconButton 
          onClick={() => onComplete(task.id, !task.completed)}
          color={task.completed ? 'inherit' : 'primary'}
          aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
          size="medium"
          sx={{
            mr: 2,
            transition: theme.transitions.create('transform'),
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: task.completed 
                ? 'rgba(255, 255, 255, 0.2)'  // Subtle white hover for completed
                : alpha(theme.palette.primary.main, 0.1)
            },
            // White background for completed state
            backgroundColor: task.completed 
              ? 'white'
              : 'transparent',
         
            padding: '4px',
            // Keep icon color dark in completed state
            '& svg': {
              color: task.completed 
                ? theme.palette.success.main  // Keep the check mark green
                : 'inherit'
            }
          }}
        >
          {task.completed 
            ? <TaskAltIcon fontSize="medium" /> 
            : <RadioButtonUncheckedIcon fontSize="medium" />
          }
        </IconButton>
      </CardContent>
    </Card>
  )
}