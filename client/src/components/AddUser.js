import React from 'react'
import { Icon, Modal } from 'semantic-ui-react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const AddUser = () => (
  <Modal trigger={<Button>Add New Data User</Button>}>
    <Modal.Header>Input New User</Modal.Header>
    <Modal.Content>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' />
        </Form.Field>
        <Form.Field>
          <label>Alamat</label>
          <input placeholder='Alamat' />
        </Form.Field>
        <Form.Field>
          <label>Lahir</label>
          <input placeholder='Lahir' />
        </Form.Field>
        <Form.Field>
          <label>Status</label>
          <input placeholder='Status' />
        </Form.Field>
        <Form.Field>
          <label>Image</label>
          <input placeholder='Your Photo' />
        </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
)

export default AddUser
