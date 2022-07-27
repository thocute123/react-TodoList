import './App.css';
import React, { useState } from 'react';

function App() {

  //search
  const [job, setjob] = useState("");
  //hien thi ra ds
  const [list, setList] = useState([]);
  //delete
  const [EditDelete, setTododeleteText] = React.useState("");


    //add
  function handleSubmit(e) {
    
    e.preventDefault()
    const newTodo = {
      id: new Date().getTime(),
      text: job,
    }
    setList([...list].concat(newTodo))
    setjob("")
  }

  //Delete
  function deleteTodo(id) {
    const updateTodos = [...list].filter((job) => job.id !== id)
    setList(updateTodos)
  }



  return (
    //New task input
    <div className="container">
      <h1 className="text-center bg-info">My To-Do-List </h1>
      <div className="row">
        <div className="col-sm-3">
          <div className="form-group">
            <h2> Add New Task</h2>

            
            <input type="text" placeholder="New Task..." className='id'
              value={job} onChange={e => setjob(e.target.value)}></input>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <button onClick={handleSubmit}>Add</button>
            </div>
          </div>
        </div>

        {/**My taskk list */}
        <div className="col-sm-8 active">
          <ol id="myList" className="list-group">
            <li className="list-group-item active disabled text-center">My Task List</li>
          </ol>
          <form border="1" width="100%">
            {list.map((job) => <div key={job.id}>
              {EditDelete === job.id ?
                (<input type="text"
                  onChange={(e) => setTododeleteText(e.target.value)}
                  value={EditDelete}
                />)
                : (<div> {job.text}</div>)
              }
              <button onClick={() => deleteTodo(job.id)}>Delete</button>
            </div>
            )}
          </form>
        </div>


      </div>
    </div >
  )
}

export default App;
