import { useState } from 'react'
import { Button } from '@aleksei-uzin/custom-components-lib'

export function ButtonsGroup() {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(prev => prev + 1)

  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', paddingBottom: '20px' }}>
      <Button color="primary" variant="outlined" onClick={handleClick}>
        Increment count: {count}
      </Button>
      <Button color="info" variant="outlined" onClick={handleClick}>
        Increment count: {count}
      </Button>
      <Button color="success" variant="outlined" onClick={handleClick}>
        Increment count: {count}
      </Button>
      <Button color="warning" variant="outlined" onClick={handleClick}>
        Increment count: {count}
      </Button>
      <Button color="error" variant="outlined" onClick={handleClick}>
        Increment count: {count}
      </Button>
    </div>
  )
}
