import {React,useState} from "react"


function Signup() {
    
    const [newUserData,setNewUserData] = useState({
        username: "",
        email: "",
        password: "",
        firstname: "",
    })

    function handleChange(event) {
        setNewUserData({  
          ...newUserData,
          [event.target.name]: event.target.value
        })
      }


  return (
    <div>
        <form>
            <h2>Signup</h2>
            <input placeholder="User Name" type={"text"} name="username" id="username" value={newUserData.username} onChange={handleChange}/>
            <input placeholder="Email" type={"text"} name="email" id="email"  value={newUserData.email} onChange={handleChange}/>
            <input placeholder="password" type={"text"} name="password" id="password" value={newUserData.password} onChange={handleChange}/>
            <input type={"submit"} value="Create An Account"/>
        </form>

    </div>
  )
}

export default Signup