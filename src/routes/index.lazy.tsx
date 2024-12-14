import { createLazyFileRoute } from '@tanstack/react-router'
import { TaskList } from '@/components/TaskList'

export const Route = createLazyFileRoute('/')({
  component: TaskList,
})
