export interface Task {
    id: number
    title: string
    completed: boolean
  }
  
  export type TaskUpdate = {
    id: number
    completed: boolean
  }