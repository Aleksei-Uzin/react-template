import { ButtonsGroup } from '../ButtonsGroup'
import { CheckboxGroup } from '../CheckboxGroup'
import { SwitchGroup } from '../SwitchGroup'
import { SelectAndTextField } from '../SelectAndTextField'
import { ModalForm } from '../ModalForm'
import ReactIcon from 'assets/react.svg'
import reactLogo from 'assets/react.svg?url'
import './App.scss'

export function App() {
  return (
    <>
      <div className="logo">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Webpack, React, TypeScript Template</h1>
      <div className="logo-svg">
        <ReactIcon />
      </div>
      <ButtonsGroup />
      <CheckboxGroup />
      <SwitchGroup />
      <SelectAndTextField />
      <ModalForm />
    </>
  )
}
