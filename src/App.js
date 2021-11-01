import './App.css';
import {useState,useEffect} from 'react'
import Display from './Display';
import './index.css'
import db from './Firebase'
import firebase  from 'firebase';

function App() {
  const [todos,setTodos]= useState('')
  const [status,setStatus]= useState('')
  const[todolist,setList]=useState([])
 
  const handleSubmit =(event)=>{
    event.preventDefault()

    db.collection('todos').add({
      todos:todos,
      status:status,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setStatus('')
    setTodos('')
  }

useEffect(() => {
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    setList(snapshot.docs.map(doc =>({id:doc.id , todo: doc.data()})))
  })
  },[])

  return (
    <div className="App">
    <div className='app__form' >
    <form onSubmit={handleSubmit}>
      <p>
      <label>Activity</label>
      </p>
      <input type='text' value={todos} onChange={(e)=>{
        setTodos(e.target.value)
      }} />
      <p>
      <label > status</label></p>
      <p>
      <label > Done</label><input type='radio' name='status' value='Done'  onClick={e => setStatus(e.target.value)}  /></p>
      <p><label > Not Yet</label><input type='radio' name='status' value='Not Yet' onClick={e => setStatus(e.target.value)}   /></p>
      <p><label > Almost Done</label><input type='radio' name='status' value='Almost Done' onClick={e => setStatus(e.target.value)}   /></p>
      <button type='submit' onSubmit={handleSubmit} >Add Todo</button>
    </form>
    </div>
  <div className='app__flex'>
      {
        todolist.map(({todo,id})=>(
          <Display item={todo} id={id} />
        ))
      }

 </div>
  </div>

  );
}

export default App;
