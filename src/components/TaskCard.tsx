import { Card, CardContent, IconButton, Typography, Box } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { Task } from '@/hooks/useTasks.types'

interface TaskCardProps {
  task: Task
  onComplete: (id: number, completed: boolean) => void
}

export const TaskCard = ({ task, onComplete }: TaskCardProps) => {
  return (
    <Card 
      sx={{ 
        mb: 2,
        backgroundColor: task.completed ? '#e8f5e9' : 'white',
        transition: 'background-color 0.3s ease'
      }}
    >
      <CardContent sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        '&:last-child': { pb: 2 }  
      }}>
        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
          {task.title}
        </Typography>
        <Box>
          <IconButton 
            onClick={() => onComplete(task.id, !task.completed)}
            color={task.completed ? 'success' : 'default'}
            aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {task.completed ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}