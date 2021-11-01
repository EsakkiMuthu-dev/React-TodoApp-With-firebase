
import './index.css'
import db from './Firebase'
const Display = ({item ,id}) => {
const handleDelete =()=>{
            // define document location (Collection Name > Document Name > Collection Name >)
        var docRef = db.collection("todos").doc(id);
        // delete the document
        docRef.delete();
}

    return (
        <div key={id} className='list' >
            <h2> TodoList</h2>
            <h2>{`Todo : ${item.todos}`}</h2>
            <h2>{`Status : ${item.status}`}</h2>
            <button onClick={handleDelete} >Delete</button>
        </div>
     );
}
 
export default Display;