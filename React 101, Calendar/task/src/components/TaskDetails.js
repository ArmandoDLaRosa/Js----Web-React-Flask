import { useState, useEffect} from 'react'
import {useParams, useNavigate, useLocation} from 'react-router-dom'
import Button from './Button'

function TaskDetails () {
    const [loading, setLoading] = useState(false)
    const [task, setTask] = useState({})

    const params = useParams()
    const navigate = useNavigate()
    const {pathname} = useLocation()

    useEffect(() => {
        fetchTask()
    }, [])

    const fetchTask =  () => {
        setLoading(true)
        fetch(`http://localhost:5000/tasks/${params.id}`)
            .then(async (res) => {                
                if(res.status === 404 ) {
                 navigate('/')  
                } else {    
                  res = await res.json()
                  setTask(res)          
                  setLoading(false)    
                }
            } )
    }

    return (
        <>
        {loading ? (
            <h3>Loading...</h3> 
        ) : (
            <div>
                <p>{pathname}</p>
                <h3>{task.text}</h3>
                <p>{task.day}</p>
                <Button onClick={() => {navigate(-1)}} text='Go Back'/>
            </div>
        )}
        </>
        )
}


export default TaskDetails
