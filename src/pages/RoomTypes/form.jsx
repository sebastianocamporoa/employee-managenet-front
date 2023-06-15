import React, { useState } from 'react'
import './styles.css'
import Modal from '../../utils/Modal'
import useToggle from '../../utils/useToggle'

export function Form() {
  const [open, setOpen] = useToggle(false)
  const [username, setUsername] = useState('')

  const onChangeUsername = e => setUsername(e.target.value)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button type="button" onClick={() => setOpen()}>
        Open Modal
      </button>

      {open && (
        <Modal open={open} toggle={setOpen}>
          <h1>Hello Modal</h1>

          <form onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              name="username"
              value={username}
              onChange={e => onChangeUsername(e)}
            />
          </form>
        </Modal>
      )}
    </div>
  )
}