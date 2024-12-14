import { Box, Typography, Container, Alert, CircularProgress } from '@mui/material'
import { TaskCard } from './TaskCard'
import { useTasks } from '@/hooks/useTasks'

export const TaskList = () => {
  const { tasks, loading, error, updateTask } = useTasks()

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        {error}
      </Alert>
    )
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, mb: 3 }}>
        Task List
      </Typography>
      <Box>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onComplete={(id, completed) => updateTask({ id, completed })}
          />
        ))}
      </Box>
    </Container>
  )
}