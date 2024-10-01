
import { Heading } from "./components/props/Heading"
import { Counter } from "./components/props/hooks/Counter"
import { LoginUser } from "./components/props/hooks/LoginUser"


function App() {

  return (
    <> <div className="container">

<Heading>Welcome to React With TypeScript Course</Heading>

<LoginUser/>

<Counter/>

    </div>
    </>
  )
}

export default App
