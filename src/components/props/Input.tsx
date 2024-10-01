 type InputProps = {
    value: string,
    name: string,
   type: "text"| "email",
   placeHolder: string,
   onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
 };
 
 export function Input({type, placeHolder, name, value, onChange}: InputProps) {
   return (<input id={name} name= {name} className="form-control" type= {type} value = {value} onChange={onChange} placeholder = {placeHolder}/>);
 }