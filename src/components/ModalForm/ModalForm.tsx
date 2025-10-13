import { useState } from 'react'
import { Button, Modal } from '@aleksei-uzin/custom-components-lib'

export function ModalForm() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <Button color="info" onClick={() => setOpen(true)} size="large" variant="contained">
          Open Modal
        </Button>
      </div>
      <Modal isOpen={isOpen}>
        <Modal.Header onClose={() => setOpen(false)}>Log In</Modal.Header>
        <form>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '1rem',
            }}
          >
            <label htmlFor="email">Email address:</label>
            <input id="email" type="email" />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '1rem',
            }}
          >
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" />
          </div>
          <Button
            color="info"
            fullWidth={true}
            onClick={e => {
              e.preventDefault()
              setOpen(false)
            }}
            size="small"
            type="submit"
            variant="contained"
          >
            Log In
          </Button>
        </form>
      </Modal>
    </div>
  )
}
