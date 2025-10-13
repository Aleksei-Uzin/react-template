import { TextField, Select } from '@aleksei-uzin/custom-components-lib'

const options = [
  { value: '1', description: 'Option 1' },
  { value: '2', description: 'Option 2' },
  { value: '3', description: 'Option 3 (disabled)', disabled: true },
  { value: '4', description: 'Option 4' },
  { value: '5', description: 'Option 5' },
]

export function SelectAndTextField() {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', paddingBottom: '20px' }}>
      <TextField
        id="text-field-id"
        color="info"
        label="Text Field label"
        placeholder="Type something"
        isRequired
      />
      <Select id="select-id" label="Select label" options={options} />
    </div>
  )
}
