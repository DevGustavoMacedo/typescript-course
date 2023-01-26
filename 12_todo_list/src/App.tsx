import { useState } from 'react'

// css modules
import styles from './App.module.css'

// components
import Footer from './components/Footer'
import Header from './components/Header'
import Modal from './components/Modal'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

// interfaces
import { ITask } from './interfaces/Task'

const App = () => {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  const toggleModal = () => {
    const modal = document.querySelector('#modal')

    modal!.classList.toggle('hide')
  }

  const editTask = (task: ITask): void => {
    toggleModal()
    setTaskToUpdate(task)
  } 

  const updateTask = (newTask: ITask) => {
    const updatedItems = taskList.map(task => {
      return newTask.id === task.id ? newTask : task
    })

    setTaskList(updatedItems)

    toggleModal()
  }

  return (
    <div>
      <Modal 
        children={
          <TaskForm 
            btnText="EDIT" 
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />} 
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>What you gonna do?</h2>
          <TaskForm 
            btnText="ADD" 
            taskList={taskList} 
            setTaskList={setTaskList} 
          />
        </div>
        <div>
          <h2>Your tasks:</h2>
          <TaskList 
            taskList={taskList} 
            handleDelete={deleteTask} 
            handleEdit={editTask} 
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
