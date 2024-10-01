import { Button } from "./Button";

type UserProps = {
    name:string,
logoutHandler: ()=> void
    
    
  
};

export function User({ name, logoutHandler}: UserProps) {
return<> 
<h3>
Hello {name}!
    </h3>
<Button buttonName={"Logout"} onClick={logoutHandler}/>

</>
}