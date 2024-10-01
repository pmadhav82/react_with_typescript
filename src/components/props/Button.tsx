type ButtonProps = {
  buttonName:String,
  onClick: ()=> void
};

export function Button(props: ButtonProps) {
  return (<button onClick={props.onClick} className="btn btn-secondary">{props.buttonName}</button>);
}