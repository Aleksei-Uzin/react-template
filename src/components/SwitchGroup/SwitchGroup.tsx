import { useState } from 'react'
import { Switch } from '@aleksei-uzin/custom-components-lib'

export function SwitchGroup() {
  const [checked, setChecked] = useState(true)
  const handleCheck = () => {
    setChecked(prev => !prev)
  }

  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', paddingBottom: '20px' }}>
      <Switch
        id="121"
        color="primary"
        label="Switch Label"
        labelPosition="bottom"
        checked={checked}
        onChange={handleCheck}
      />
      <Switch
        id="122"
        color="info"
        label="Switch Label"
        labelPosition="bottom"
        checked={checked}
        onChange={handleCheck}
      />
      <Switch
        id="123"
        color="success"
        label="Switch Label"
        labelPosition="bottom"
        checked={checked}
        onChange={handleCheck}
      />
      <Switch
        id="124"
        color="warning"
        label="Switch Label"
        labelPosition="bottom"
        checked={checked}
        onChange={handleCheck}
      />
      <Switch
        id="125"
        color="success"
        label="Switch Label"
        labelPosition="bottom"
        checked={checked}
        onChange={handleCheck}
      />
    </div>
  )
}
