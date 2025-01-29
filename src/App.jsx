import { useState , useEffect , useContext} from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import {setLocalStorage , getLocalStorage} from './utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  
  useEffect(() => {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    
  },[])

  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'})) 
    } else if(userData){
      const employee = userData.find((e)=>email == e.email && e.password == password)
      if (employee) {
         setUser('employees')
         setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee', data:employee}))
      }
     
    }
    else{
      alert("Invalid credentials")
    }
  }

 
  return (
    <>
     {!user ? <Login handleLogin={handleLogin}/> : ''}
     {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employees' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App
