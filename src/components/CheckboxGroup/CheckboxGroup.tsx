import { Checkbox } from '@aleksei-uzin/custom-components-lib'
import { useState } from 'react'

export function CheckboxGroup() {
  const [checked, setChecked] = useState(true)
  const handleCheck = () => {
    setChecked(prev => !prev)
  }

  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', paddingBottom: '20px' }}>
      <Checkbox
        id="111"
        color="primary"
        label="Checkbox Label"
        labelPosition="bottom"
        checked={checked}
        onChange={handleCheck}
      />
      <Checkbox
        id="112"
        color="info"
        label="Checkbox Label"
        labelPosition="bottom"
        checked={checked}
        onChange={handleCheck}
      />
      <Checkbox
        id="113"
        color="success"
        label="Checkbox Label"
        labelPosition="bottom"
        checked={checked}
        onChange={handleCheck}
      />
      <Checkbox
        id="114"
        color="warning"
        label="Checkbox Label"
        labelPosition="bottom"
        checked={checked}
        onChange={handleCheck}
      />
      <Checkbox
        id="115"
        color="success"
        label="Checkbox Label"
        labelPosition="bottom"
        checked={checked}
        onChange={handleCheck}
      />
    </div>
  )
}
