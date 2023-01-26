// react modules
import { useState, useEffect, ChangeEvent, FormEvent, Dispatch, SetStateAction } from 'react'

// css modules
import styles from './index.module.css'

// interfaces
import { ITask } from '../../interfaces/Task'

interface Props {
  btnText: string
  taskList: ITask[]
  setTaskList?: Dispatch<SetStateAction<ITask[]>>
  task?: ITask | null
  handleUpdate?(task: ITask): void
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {
  const [form, setForm] = useState<ITask>({
    id: 0,
    title: '',
    priority: 0,
  })

  useEffect(() => {
    if (task) {
      setForm({
        id: task.id,
        title: task.title,
        priority: task.priority,
      })
    }
  }, [task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (handleUpdate) {
      handleUpdate(form)

    } else {

      const newId = Math.floor(Math.random() * 1000)

      const newTask: ITask = {
        id: newId,
        title: form.title,
        priority: form.priority,
      }

      setTaskList!([...taskList, newTask])

      setForm({ id: 0, title: '', priority: 0 })
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setForm((prevState) => {
        return {
          ...prevState,
          title: e.target.value,
        }
      })
    } else if (e.target.name === 'priority') {
      setForm((prevState) => {
        return {
          ...prevState,
          priority: parseInt(e.target.value),
        }
      })
    }
  }

  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <div className={styles['input-container']}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div className={styles['input-container']}>
        <label htmlFor="priority">Priority:</label>
        <input
          type="text"
          name="priority"
          placeholder="Task Priority (1-5)"
          value={form.priority || ''}
          onChange={handleChange}
        />
      </div>

      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm
