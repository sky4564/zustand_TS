import { user } from "../model/propstestModel"
const PropsTestObj: React.FC<user> = ({ name, age }) => {
  return (
    <>
      <h1>Props Test Obj</h1>
      <div>
        {name}
        {age}
      </div>
    </>
  )
}

export default PropsTestObj