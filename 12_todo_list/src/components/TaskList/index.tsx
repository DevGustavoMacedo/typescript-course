// interfaces
import { ITask } from '../../interfaces/Task'

// modules
import styles from './index.module.css'

interface Props {
  taskList: ITask[]
  handleDelete(id: number): void
  handleEdit(task: ITask): void
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {


  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task} >
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Priority: {task.priority}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil-fill" onClick={() => handleEdit(task)}></i>
              <i className="bi bi-trash-fill" onClick={() => handleDelete(task.id)}></i>
            </div>
          </div>
        ))
      ) : (
        <p>No tasks added</p>
      )}
    </>
  )
}

export default TaskList
