import './App.css'
import Store from './components/Store'
import StoreNum from './components/Store_number'
import PropsTest from './components/PropsTest'

import PropsTestObj from './components/PropsTestObj'
import { user } from './model/propstestModel'

import PropsTestFn from './components/PropsTestFn'

// import { voidFn } from './model/propstestModel'

const App: React.FC = () => {
  const text: string = 'props test is from parent'
  const obj: user = {
    name: 'tester',
    age: 30,
  }

  const handleClick: () => void = () => {
    console.log('click ! event !')
  }

  return (
    <>
      <Store title={text} />
      <StoreNum kakinum={333} />
      <PropsTest isOpen={true} istest='good' />
      <PropsTestObj {...obj} />
      <PropsTestFn fn={handleClick} />
    </>
  )
}

export default App
