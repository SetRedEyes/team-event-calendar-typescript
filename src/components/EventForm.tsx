import { Form, Input } from 'antd'
import { validationRules } from '../utils/validationRules'

const EventForm = () => {
  return (
    <Form>
      <Form.Item
        label='Event Description'
        name='description'
        rules={[validationRules.required('Description is required')]}
      >
        <Input />
      </Form.Item>
    </Form>
  )
}

export default EventForm
