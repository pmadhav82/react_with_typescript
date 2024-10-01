import { useState } from "react"
import { Input } from "../Input";

import { User } from "../User";

type User = {
    name: string,
    email: string
}

export const LoginUser = ()=>{
const [user , setUser] = useState<User>({name:"", email:""});

const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
setUser({...user, [e.target.name]: e.target.value})

}
const logoutHandler = ()=>{
setUser({name:"", email:""})

}



    return <form style={{maxWidth:"500px"}}>

        <div className="form-group" >
            <label htmlFor="name">User Name</label>
          <Input onChange={inputHandler} placeHolder="Enter your name" type= "text" name="name" value= {user.name}/>
          <label htmlFor="email">User Email</label>
          <Input onChange={inputHandler} placeHolder="Enter your email" type= "email" name="email" value= {user.email}/>
          {user.name &&  <User logoutHandler={logoutHandler} name={user.name} />}
        </div>
      
    </form>
}